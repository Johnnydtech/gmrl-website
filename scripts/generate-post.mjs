#!/usr/bin/env node
/**
 * Weekly blog post generator for gmrl.app.
 *
 * Calls the Anthropic Messages API to write a new markdown post for
 * content/blog, avoiding topics already covered. No dependencies.
 *
 * Usage: ANTHROPIC_API_KEY=... node scripts/generate-post.mjs
 * Prints the path of the created file on success.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BLOG_DIR = path.join(ROOT, 'content', 'blog')

const API_KEY = process.env.ANTHROPIC_API_KEY
if (!API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY environment variable is required.')
  process.exit(1)
}

/* ---------- read existing posts ---------- */

function parseFrontmatter(raw) {
  const data = {}
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3)
    if (end !== -1) {
      for (const line of raw.slice(3, end).trim().split('\n')) {
        const idx = line.indexOf(':')
        if (idx === -1) continue
        let value = line.slice(idx + 1).trim()
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1)
        }
        data[line.slice(0, idx).trim()] = value
      }
    }
  }
  return data
}

const existing = fs.existsSync(BLOG_DIR)
  ? fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.md'))
      .map((f) => {
        const data = parseFrontmatter(fs.readFileSync(path.join(BLOG_DIR, f), 'utf8'))
        return { slug: data.slug || f.replace(/\.md$/, ''), title: data.title || f }
      })
  : []

/* ---------- prompt ---------- */

const today = new Date().toISOString().slice(0, 10)

const existingList = existing.map((p) => `- ${p.slug}: ${p.title}`).join('\n')

const prompt = `You write the blog for GMRL (Gym Reel, https://gmrl.app), a free iOS app for lifters that organizes workout videos into dated gym sessions, tracks PRs with exercise tags, builds highlight reels, and shares lifts privately with real gym friends (connected by tapping phones in person — no public feed, no algorithm).

Write ONE new blog post in markdown.

Requirements:
- Pick a topic genuinely useful to lifters that is NOT already covered by these existing posts:
${existingList}
- 700-900 words, practical and specific, written for lifters. No fluff, no hype, no ad copy. Mention GMRL naturally where it is genuinely relevant (once or twice), the way the existing posts do.
- Structure: intro paragraphs, ## h2 sections (with ### h3 subsections where useful), - bullet lists and > blockquotes where they help, **bold** for key terms.
- End with a "## FAQ" section containing exactly 3 "### question" subsections, each answered in one direct 40-60 word paragraph (answer-engine friendly: the first sentence should directly answer the question).
- Start the file with this exact frontmatter format (plain key: value lines, no quotes):
---
title: <post title>
description: <one-sentence 140-160 char description>
date: ${today}
slug: <kebab-case-slug>
tags: <3-5 comma-separated tags>
---

Return ONLY the raw markdown file content, starting with ---. No preamble, no code fences.`

/* ---------- call Anthropic Messages API ---------- */

const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-api-key': API_KEY,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-sonnet-5',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  }),
})

if (!res.ok) {
  console.error(`Anthropic API error ${res.status}: ${await res.text()}`)
  process.exit(1)
}

const data = await res.json()
let markdown = (data.content || [])
  .filter((block) => block.type === 'text')
  .map((block) => block.text)
  .join('')
  .trim()

// Strip accidental code fences.
markdown = markdown.replace(/^```(?:markdown|md)?\n/, '').replace(/\n```$/, '').trim()

/* ---------- validate ---------- */

if (!markdown.startsWith('---')) {
  console.error('Error: model output does not start with frontmatter. Output was:\n' + markdown.slice(0, 500))
  process.exit(1)
}

const fm = parseFrontmatter(markdown)
for (const key of ['title', 'description', 'date', 'slug', 'tags']) {
  if (!fm[key]) {
    console.error(`Error: frontmatter is missing required key "${key}".`)
    process.exit(1)
  }
}

if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.date)) {
  console.error(`Error: frontmatter date "${fm.date}" is not YYYY-MM-DD.`)
  process.exit(1)
}

const slug = fm.slug
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

if (!slug) {
  console.error('Error: could not derive a valid slug.')
  process.exit(1)
}

if (existing.some((p) => p.slug === slug)) {
  console.error(`Error: slug "${slug}" already exists. Refusing to overwrite.`)
  process.exit(1)
}

if (!markdown.includes('## FAQ')) {
  console.error('Error: post is missing the required "## FAQ" section.')
  process.exit(1)
}

/* ---------- write ---------- */

fs.mkdirSync(BLOG_DIR, { recursive: true })
const outPath = path.join(BLOG_DIR, `${slug}.md`)
if (fs.existsSync(outPath)) {
  console.error(`Error: ${outPath} already exists. Refusing to overwrite.`)
  process.exit(1)
}
fs.writeFileSync(outPath, markdown.endsWith('\n') ? markdown : markdown + '\n')

console.log(outPath)
