import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'

const APP_STORE_URL = 'https://apps.apple.com/app/id6757939929'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — GMRL Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://gmrl.app/blog/${post.slug}`,
      siteName: 'Gym Reel',
      type: 'article',
      publishedTime: post.date,
      authors: ['GMRL Team'],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  }
}

function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://gmrl.app/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gmrl.app/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'GMRL Team',
      url: 'https://gmrl.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GMRL',
      url: 'https://gmrl.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gmrl.app/AppIcon.png',
      },
    },
    keywords: post.tags.join(', '),
  }

  return (
    <main className="lp" style={{ minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="lp-grain" />

      {/* Navigation */}
      <nav
        style={{
          padding: '16px 24px',
          background: 'rgba(5,5,5,0.7)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/AppIcon.png" alt="GMRL" width={36} height={36} style={{ borderRadius: 9 }} />
            <span className="lp-display" style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em' }}>GMRL</span>
          </Link>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link href="/blog" style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Blog</Link>
            <a href={APP_STORE_URL} className="lp-btn lp-btn-yellow" style={{ padding: '10px 20px', fontSize: 14 }}>
               Download
            </a>
          </div>
        </div>
      </nav>

      <article className="container blog-post" style={{ position: 'relative', zIndex: 2, padding: '70px 24px 90px', maxWidth: 760 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal)', marginBottom: 14 }}>
          {formatDate(post.date)} · GMRL Team
        </div>
        <h1
          className="lp-display"
          style={{
            fontSize: 'clamp(32px, 5vw, 50px)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            lineHeight: 1.05,
            marginBottom: 18,
          }}
        >
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {post.tags.map((tag) => (
              <span key={tag} className="lp-chip" style={{ fontSize: 12 }}>{tag}</span>
            ))}
          </div>
        )}

        {/* Post HTML is generated at build time from our own markdown files in
            content/blog by lib/blog.js, which HTML-escapes all source text. */}
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />

        {/* CTA */}
        <div
          className="lp-card"
          style={{ marginTop: 56, textAlign: 'center', borderColor: 'rgba(245,200,66,0.35)' }}
        >
          <Image src="/GMRLLogoMascot.png" alt="GMRL mascot" width={90} height={90} style={{ margin: '0 auto 6px' }} />
          <h3 style={{ marginBottom: 8 }}>Film it. Tag it. Share it with your crew.</h3>
          <p style={{ marginBottom: 20 }}>
            GMRL organizes your lifting videos into dated sessions, tracks your PRs, and keeps sharing between real gym friends only. Free on iPhone.
          </p>
          <a href={APP_STORE_URL} className="lp-btn lp-btn-yellow">
             Download on the App Store
          </a>
        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <Link href="/blog" style={{ color: 'var(--accent)' }}>← All posts</Link>
        </div>
      </article>
    </main>
  )
}
