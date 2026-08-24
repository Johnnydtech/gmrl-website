import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'GMRL — Your Lifts. Your Crew. Your Story.',
  description:
    'Film your lifts, tag your PRs, and share the grind with your gym crew. Tap phones to connect, watch each other\'s stories, and keep every rep organized.',
}

const APP_STORE_URL = 'https://apps.apple.com/app/id6757939929'

/* ---------- Code-drawn app UI pieces (no photos) ---------- */

function StoryRing({ color, size = 52, children, pulse }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        padding: 3,
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        animation: pulse ? 'lpPulse 2.6s ease-in-out infinite' : 'none',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#1C1C1E',
          border: '2px solid #0B0B0C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* A fake vertical video card: gradient "footage" + duration badge */
function ClipCard({ hue1, hue2, duration, label, pr }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        aspectRatio: '9 / 13',
        background: `linear-gradient(160deg, ${hue1}, ${hue2} 70%, #0a0a0a)`,
      }}
    >
      {/* abstract "lifter" silhouette drawn in SVG */}
      <svg viewBox="0 0 100 140" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <ellipse cx="50" cy="128" rx="34" ry="6" fill="rgba(0,0,0,0.35)" />
        <rect x="14" y="78" width="72" height="5" rx="2.5" fill="rgba(255,255,255,0.75)" />
        <circle cx="18" cy="80" r="9" fill="rgba(20,20,20,0.9)" />
        <circle cx="82" cy="80" r="9" fill="rgba(20,20,20,0.9)" />
        <circle cx="50" cy="58" r="8" fill="rgba(255,255,255,0.85)" />
        <path
          d="M50 66 q-10 6 -12 22 l6 30 h12 l6 -30 q-2 -16 -12 -22z"
          fill="rgba(255,255,255,0.7)"
        />
      </svg>
      <span
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          fontSize: 10,
          fontWeight: 700,
          padding: '3px 7px',
          borderRadius: 6,
          background: 'rgba(0,0,0,0.65)',
        }}
      >
        {duration}
      </span>
      <span
        style={{
          position: 'absolute',
          left: 8,
          bottom: 8,
          fontSize: 10,
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: pr ? 'var(--yellow)' : 'rgba(255,255,255,0.85)',
        }}
      >
        {label} {pr ? '🏆' : ''}
      </span>
    </div>
  )
}

function TabIcon({ d }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <path d={d} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

/* The hero phone: home feed of the actual 1.2 app, drawn in code */
function HeroPhone() {
  return (
    <div
      className="lp-phone"
      aria-hidden="true"
      style={{ height: 'auto', aspectRatio: '540 / 1174', position: 'relative' }}
    >
      <Image
        src="/shot-tap.png"
        alt=""
        fill
        priority
        sizes="300px"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

/* Mini player mock for the streaming card */
function PlayerMock() {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 18,
        overflow: 'hidden',
        aspectRatio: '9 / 12',
        maxWidth: 210,
        background: 'linear-gradient(165deg, #2b3450, #131722 70%, #0a0a0a)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* segmented story bar */}
      <div style={{ position: 'absolute', top: 10, left: 10, right: 10, display: 'flex', gap: 4 }}>
        <div style={{ flex: 1, height: 3, borderRadius: 2, background: '#fff' }} />
        <div style={{ flex: 1, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: '#fff', animation: 'lpFill 3s ease-in-out infinite alternate' }} />
        </div>
        <div style={{ flex: 1, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }} />
      </div>
      {/* double-tap heart */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 54,
          animation: 'lpHeart 2.8s ease-in-out infinite',
        }}
      >
        🤍
      </div>
      <span style={{ position: 'absolute', bottom: 10, left: 12, fontSize: 11, fontWeight: 700 }}>
        DEADLIFT <span style={{ color: 'var(--yellow)' }}>🏆 PR</span>
      </span>
    </div>
  )
}

/* ---------- Page ---------- */

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'MobileApplication'],
  name: 'Gym Reel (GMRL)',
  operatingSystem: 'iOS',
  applicationCategory: 'HealthApplication',
  description:
    'Film your lifts, tag your PRs, and share the grind with your gym crew. Organize workout videos into dated sessions with exercise tagging and PR tracking.',
  url: 'https://gmrl.app',
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  image: 'https://gmrl.app/AppIcon.png',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'GMRL',
    url: 'https://gmrl.app',
  },
}

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <main className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <div className="lp-grain" />

      {/* Nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '14px 24px',
          background: 'rgba(5,5,5,0.7)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
          zIndex: 100,
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/AppIcon.png" alt="GMRL" width={36} height={36} style={{ borderRadius: 9 }} />
            <span className="lp-display" style={{ fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em' }}>GMRL</span>
          </Link>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link href="#crew" style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Features</Link>
            <Link href="/blog" style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Blog</Link>
            <a href={APP_STORE_URL} className="lp-btn lp-btn-yellow" style={{ padding: '10px 20px', fontSize: 14 }}>
               Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '150px 24px 40px', zIndex: 2 }}>
        <div
          className="container lp-hero-grid"
          style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap', justifyContent: 'space-between' }}
        >
          <div style={{ flex: 1, minWidth: 300, maxWidth: 560 }}>
            <div className="lp-rise lp-chip teal" style={{ marginBottom: 22 }}>
              NEW · Your crew is here
            </div>
            <h1
              className="lp-display lp-rise lp-d1"
              style={{
                fontSize: 'clamp(52px, 8.5vw, 96px)',
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
              }}
            >
              Your lifts.
              <br />
              <span style={{ color: 'var(--yellow)' }}>Your crew.</span>
              <br />
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255,255,255,0.85)',
                }}
              >
                Your story.
              </span>
            </h1>
            <p
              className="lp-rise lp-d2"
              style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.6, margin: '26px 0 34px', maxWidth: 460 }}
            >
              Film the rep. Tag the PR. Tap phones with your gym friends and watch
              each other&apos;s stories — no strangers, no algorithm, just the grind.
            </p>
            <div className="lp-rise lp-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={APP_STORE_URL} className="lp-btn lp-btn-yellow">
                 Download on the App Store
              </a>
              <Link href="#crew" className="lp-btn lp-btn-ghost">
                See how it works
              </Link>
            </div>
          </div>

          <div className="lp-rise lp-d3" style={{ position: 'relative', ['--tilt']: '3deg', animation: 'lpRise 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both' }}>
            <div style={{ animation: 'lpFloat 7s ease-in-out infinite', ['--tilt']: '3deg' }}>
              <HeroPhone />
            </div>
            {/* mascot peeking */}
            <Image
              src="/mascot-pr.png"
              alt=""
              width={130}
              height={130}
              style={{ position: 'absolute', bottom: -34, left: -98, zIndex: 3, transform: 'rotate(-8deg)' }}
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
        <div className="lp-marquee">
          {[0, 1].map((i) => (
            <span key={i}>
              SQUAT&nbsp;·&nbsp;<b>PR&nbsp;🏆</b>&nbsp;·&nbsp;DEADLIFT&nbsp;·&nbsp;TAP&nbsp;IN&nbsp;·&nbsp;CLEAN&nbsp;&amp;&nbsp;JERK&nbsp;·&nbsp;<b>YOUR&nbsp;CREW</b>&nbsp;·&nbsp;BENCH&nbsp;·&nbsp;SNATCH&nbsp;·&nbsp;<b>GMRL</b>&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Bento features */}
      <section id="crew" style={{ position: 'relative', zIndex: 2, padding: '90px 24px' }}>
        <div className="container">
          <h2
            className="lp-display"
            style={{ fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 400, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: 10 }}
          >
            Built for the gym floor
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 520, marginBottom: 44 }}>
            Everything streams instantly, organizes itself, and stays between you and the people you actually lift with.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: 18,
            }}
          >
            {/* Tap to connect — feature card */}
            <div className="lp-card" style={{ gridRow: 'span 2', display: 'flex', flexDirection: 'column' }}>
              <h3>Tap phones. That&apos;s the friend request.</h3>
              <p>
                No usernames, no follow spam. Hold your phones together at the gym and
                you&apos;re crew — a real-life handshake, verified in person.
              </p>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 220, position: 'relative', padding: '18px 0' }}>
                <div style={{ position: 'relative', width: 120, height: 120 }}>
                  {[0, 0.7, 1.4].map((d) => (
                    <div
                      key={d}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: '2px solid var(--teal)',
                        animation: `lpRipple 2.4s ease-out ${d}s infinite`,
                      }}
                    />
                  ))}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 18,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#04110d',
                      fontSize: 26,
                    }}
                  >
                    )))
                  </div>
                </div>
                <Image
                  src="/mascot-onboarding.png"
                  alt=""
                  width={110}
                  height={110}
                  style={{ position: 'absolute', right: -2, bottom: -8, transform: 'rotate(6deg)' }}
                />
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="lp-chip teal">In person only</span>
                <span className="lp-chip">Block &amp; report built in</span>
              </div>
            </div>

            {/* Stories */}
            <div className="lp-card">
              <h3>Crew stories</h3>
              <p>Your friends&apos; latest lifts, front and center. React, hype, repeat.</p>
              <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
                <StoryRing color="var(--teal)" size={58} pulse>
                  <svg viewBox="0 0 40 40" width="44" height="44">
                    <circle cx="20" cy="14" r="7" fill="#E8907A" />
                    <path d="M7 35 q13 -15 26 0z" fill="#E8907A" />
                  </svg>
                </StoryRing>
                <StoryRing color="var(--yellow)" size={58}>
                  <span style={{ fontSize: 19, lineHeight: 1 }}>🏋️</span>
                </StoryRing>
                <StoryRing color="var(--yellow)" size={58}>
                  <span style={{ fontSize: 20 }}>🔥</span>
                </StoryRing>
              </div>
            </div>

            {/* Streaming player */}
            <div className="lp-card" style={{ gridRow: 'span 2' }}>
              <h3>Plays instantly. Like, instantly.</h3>
              <p>
                Cloud clips stream the moment you tap — no downloads, no spinners.
                Double-tap to send some love.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 22 }}>
                <PlayerMock />
              </div>
            </div>

            {/* Tags / search */}
            <div className="lp-card">
              <h3>Every PR, findable in seconds</h3>
              <p>Tag exercises, mark PRs, add your own custom tags — then filter your whole library live.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 18 }}>
                <span className="lp-chip on">PR 🏆</span>
                <span className="lp-chip">Squat</span>
                <span className="lp-chip">Deadlift</span>
                <span className="lp-chip">Favorites</span>
                <span className="lp-chip teal">+ Add &quot;Sled Push&quot;</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="lp-card">
              <h3>Highlight reels</h3>
              <p>Stack your best clips into collections — the 6-month squat glow-up edits itself.</p>
              <div style={{ display: 'flex', gap: 14, marginTop: 18, alignItems: 'center' }}>
                {['SQUAT', 'OLY', 'PRs'].map((n, i) => (
                  <div key={n} style={{ textAlign: 'center' }}>
                    <StoryRing color={i === 1 ? 'var(--teal)' : 'var(--yellow)'} size={54}>
                      <span style={{ fontSize: 16 }}>{['🦵', '🏋️', '🏆'][i]}</span>
                    </StoryRing>
                    <div style={{ fontSize: 10, fontWeight: 700, marginTop: 6, color: 'var(--text-secondary)' }}>{n}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy */}
            <div className="lp-card">
              <h3>No public feed. Ever.</h3>
              <p>
                Clips stay on your device by default. Share only with mutually-added
                friends. Optional encrypted cloud backup. Delete everything anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ position: 'relative', zIndex: 2, padding: '40px 24px 110px', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative' }}>
          <Image src="/GMRLLogoMascot.png" alt="GMRL mascot" width={150} height={150} style={{ margin: '0 auto 10px' }} />
          <h2
            className="lp-display"
            style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Don&apos;t train <span style={{ color: 'var(--yellow)' }}>alone</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, margin: '18px auto 32px', maxWidth: 420 }}>
            Free on iPhone. Bring your gym crew.
          </p>
          <a href={APP_STORE_URL} className="lp-btn lp-btn-yellow" style={{ fontSize: 17, padding: '18px 34px' }}>
             Download on the App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 2, borderTop: '1px solid var(--border)', padding: '36px 24px' }}>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/AppIcon.png" alt="GMRL" width={28} height={28} style={{ borderRadius: 7 }} />
            <span style={{ color: 'var(--text-tertiary)', fontSize: 14 }}>© {year} AskQuala</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Privacy</Link>
            <Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Terms</Link>
            <Link href="/support" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Support</Link>
            <Link href="/help" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Help</Link>
            <Link href="/blog" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Blog</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
