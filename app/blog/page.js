import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../../lib/blog'

export const metadata = {
  title: 'GMRL Blog — Training, Filming & PR Tracking',
  description:
    'Practical guides for lifters: filming your lifts, tracking progress with video, organizing gym footage, PR day, and training with your crew.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'GMRL Blog — Training, Filming & PR Tracking',
    description:
      'Practical guides for lifters: filming your lifts, tracking progress with video, organizing gym footage, PR day, and training with your crew.',
    url: 'https://gmrl.app/blog',
    siteName: 'Gym Reel',
    type: 'website',
  },
}

function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="lp" style={{ minHeight: '100vh' }}>
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
            <Link href="/help" style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Help</Link>
            <a
              href="https://apps.apple.com/app/id6757939929"
              className="lp-btn lp-btn-yellow"
              style={{ padding: '10px 20px', fontSize: 14 }}
            >
               Download
            </a>
          </div>
        </div>
      </nav>

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 24px 110px', maxWidth: 860 }}>
        <h1
          className="lp-display"
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: 14,
          }}
        >
          The <span style={{ color: 'var(--yellow)' }}>GMRL</span> Blog
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 520, marginBottom: 56 }}>
          Practical guides on filming your lifts, tracking progress with video, and training with your crew.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block' }}>
              <article className="lp-card">
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal)', marginBottom: 10 }}>
                  {formatDate(post.date)}
                </div>
                <h2
                  className="lp-display"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 26px)',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.55 }}>
                  {post.description}
                </p>
                <span style={{ display: 'inline-block', marginTop: 14, fontSize: 14, fontWeight: 700, color: 'var(--yellow)' }}>
                  Read it →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
