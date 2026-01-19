'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 24px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 100,
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/AppIcon.png" alt="GMRL" width={40} height={40} style={{ borderRadius: '10px' }} />
            <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>GMRL</span>
          </Link>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="#features" style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Features</Link>
            <Link href="#download" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '15px' }}>
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '80px',
          flexWrap: 'wrap',
        }}>
          {/* Left: Text Content */}
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-1px',
            }}>
              Your lifts.<br />
              <span style={{ color: 'var(--text-secondary)' }}>Your story.</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}>
              The simplest way to organize and track your workout videos.
              Stop scrolling endlessly — find any lift instantly.
            </p>

            <div id="download" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-primary" style={{ gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Coming Soon
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div style={{ flex: '0 0 auto' }}>
            <div className="phone-mockup">
              <div className="phone-screen">
                <Image
                  src="/screenshot-timeline.png"
                  alt="GMRL Timeline"
                  width={260}
                  height={550}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              Built for athletes
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              Everything you need to track your progress, nothing you don't.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {[
              {
                image: '/mascot-organize.png',
                title: 'Auto-Organize',
                description: 'Videos are automatically grouped by workout day. No manual sorting required.'
              },
              {
                image: '/mascot-add.png',
                title: 'Tag Exercises',
                description: 'Label videos with exercises like Squat, Deadlift, Bench Press and more.'
              },
              {
                image: '/mascot-pr.png',
                title: 'Track PRs',
                description: 'Mark your personal records and watch your progress over time.'
              },
              {
                image: '/mascot-highlights.png',
                title: 'Highlights',
                description: 'Create highlight reels of your best lifts and transformations.'
              },
              {
                image: '/mascot-login.png',
                title: 'Instant Search',
                description: 'Find any lift by exercise, tag, or date. No more endless scrolling.'
              },
              {
                image: '/mascot-sync.png',
                title: 'Sync Anywhere',
                description: 'Your tags and highlights sync across all your devices automatically.'
              },
            ].map((feature, index) => (
              <div key={index} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center',
                textAlign: 'center',
                padding: '32px 24px',
              }}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
                <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '15px' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              See it in action
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              A glimpse of what's waiting for you
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
          }}>
            <div className="phone-mockup" style={{ transform: 'rotate(-5deg)' }}>
              <div className="phone-screen">
                <Image
                  src="/screenshot-login.png"
                  alt="GMRL Login"
                  width={260}
                  height={550}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="phone-mockup" style={{ transform: 'translateY(-20px)' }}>
              <div className="phone-screen">
                <Image
                  src="/screenshot-timeline.png"
                  alt="GMRL Timeline"
                  width={260}
                  height={550}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="phone-mockup" style={{ transform: 'rotate(5deg)' }}>
              <div className="phone-screen">
                <Image
                  src="/screenshot-empty.png"
                  alt="GMRL Empty State"
                  width={260}
                  height={550}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            Ready to track your gains?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
            Turn your camera roll chaos into a visual record of your fitness journey.
          </p>
          <a href="#" className="btn btn-primary" style={{ gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Coming Soon on App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 24px 40px',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Image src="/AppIcon.png" alt="GMRL" width={32} height={32} style={{ borderRadius: '8px' }} />
                <span style={{ fontSize: '18px', fontWeight: 700 }}>GMRL</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                Your lifts. Your story.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-tertiary)', letterSpacing: '0.5px' }}>
                LEGAL
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Privacy Policy</Link>
                <Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Terms of Service</Link>
                <Link href="/support" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Support</Link>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-tertiary)', letterSpacing: '0.5px' }}>
                CONTACT
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="mailto:support@gmrl.app" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  support@gmrl.app
                </a>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  2300 Wilson Blvd<br />
                  Arlington, VA 22201
                </span>
              </div>
            </div>
          </div>

          <div style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>
              © 2026 AskQuala. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
