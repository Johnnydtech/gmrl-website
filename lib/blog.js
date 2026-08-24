import fs from 'fs'
import path from 'path'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/**
 * Parse a simple `---` frontmatter block of `key: value` lines.
 * Returns { data, content }.
 */
export function parseFrontmatter(raw) {
  const data = {}
  let content = raw

  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3)
    if (end !== -1) {
      const block = raw.slice(3, end).trim()
      content = raw.slice(end + 4).replace(/^\r?\n/, '')
      for (const line of block.split('\n')) {
        const idx = line.indexOf(':')
        if (idx === -1) continue
        const key = line.slice(0, idx).trim()
        let value = line.slice(idx + 1).trim()
        // strip optional surrounding quotes
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1)
        }
        data[key] = value
      }
    }
  }

  return { data, content }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** Inline markdown: **bold** and [text](url). Escapes HTML first. */
function renderInline(text) {
  let out = escapeHtml(text)
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (m, label, url) => {
      // only allow safe link schemes / relative paths
      if (!/^(https?:\/\/|\/|mailto:)/.test(url)) return m
      const external = /^https?:\/\//.test(url) && !url.startsWith('https://gmrl.app')
      return `<a href="${url}"${external ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`
    }
  )
  return out
}

/**
 * Minimal markdown -> HTML converter.
 * Supports: ## h2, ### h3, paragraphs, **bold**, [links](url),
 * unordered lists (- ), and blockquotes (> ).
 */
export function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html = []
  let listItems = null
  let quoteLines = null
  let paragraph = []

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${renderInline(paragraph.join(' '))}</p>`)
      paragraph = []
    }
  }
  const flushList = () => {
    if (listItems) {
      html.push(`<ul>${listItems.map((li) => `<li>${renderInline(li)}</li>`).join('')}</ul>`)
      listItems = null
    }
  }
  const flushQuote = () => {
    if (quoteLines) {
      html.push(`<blockquote><p>${renderInline(quoteLines.join(' '))}</p></blockquote>`)
      quoteLines = null
    }
  }
  const flushAll = () => {
    flushParagraph()
    flushList()
    flushQuote()
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (!line.trim()) {
      flushAll()
      continue
    }
    if (line.startsWith('### ')) {
      flushAll()
      html.push(`<h3>${renderInline(line.slice(4))}</h3>`)
      continue
    }
    if (line.startsWith('## ')) {
      flushAll()
      html.push(`<h2>${renderInline(line.slice(3))}</h2>`)
      continue
    }
    if (line.startsWith('- ')) {
      flushParagraph()
      flushQuote()
      if (!listItems) listItems = []
      listItems.push(line.slice(2))
      continue
    }
    if (line.startsWith('> ')) {
      flushParagraph()
      flushList()
      if (!quoteLines) quoteLines = []
      quoteLines.push(line.slice(2))
      continue
    }
    flushList()
    flushQuote()
    paragraph.push(line.trim())
  }
  flushAll()

  return html.join('\n')
}

/** All posts, newest first. Each: { slug, title, description, date, tags, content, html }. */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []

  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = parseFrontmatter(raw)
      const slug = data.slug || file.replace(/\.md$/, '')
      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '1970-01-01',
        tags: data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
        content,
        html: markdownToHtml(content),
      }
    })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) || null
}
