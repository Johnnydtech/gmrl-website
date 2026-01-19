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
        background: 'rgba(13, 13, 13, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 100,
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/AppIcon.png" alt="Gym Reel" width={40} height={40} style={{ borderRadius: '10px' }} />
            <span style={{ fontSize: '24px', fontWeight: 700 }}><span style={{ color: 'var(--accent)' }}>Gym</span> Reel</span>
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
        textAlign: 'center',
        padding: '120px 24px 80px',
        background: 'radial-gradient(ellipse at top, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
      }}>
        <div className="container">
          <Image
            src="/GMRLLogoMascot.png"
            alt="Gym Reel Mascot"
            width={180}
            height={180}
            style={{ marginBottom: '24px' }}
            priority
          />
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(255, 107, 53, 0.1)',
            borderRadius: '20px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 107, 53, 0.2)',
          }}>
            <span style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 500 }}>
              Your Fitness Journey, Organized
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Track Your<br />
            <span style={{ color: 'var(--accent)' }}>Workout Videos</span>
          </h1>

          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}>
            The simplest way to organize and relive your workout videos.
            Stop scrolling endlessly — find any lift instantly.
          </p>

          <div id="download" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary" style={{ gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Coming Soon on App Store
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section" style={{ background: 'var(--background-secondary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontWeight: 700, textAlign: 'center', marginBottom: '16px' }}>
            Everything You Need
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '500px', margin: '0 auto 60px' }}>
            Built for athletes who want to track their progress without the hassle.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                icon: '📅',
                title: 'Auto-Organize by Date',
                description: 'Videos are automatically grouped by workout day. No manual sorting required.'
              },
              {
                icon: '🏷️',
                title: 'Tag Your Exercises',
                description: 'Label videos with exercises like Squat, Deadlift, Bench Press and more.'
              },
              {
                icon: '🏆',
                title: 'Track Your PRs',
                description: 'Mark your personal records and watch your progress over time.'
              },
              {
                icon: '⭐',
                title: 'Save Favorites',
                description: 'Bookmark your best clips for quick reference and motivation.'
              },
              {
                icon: '🎬',
                title: 'Create Highlight Reels',
                description: 'Combine your best clips into collections and transformation compilations.'
              },
              {
                icon: '🔍',
                title: 'Find Any Lift Instantly',
                description: 'Search by exercise, tag, or date to find exactly what you need.'
              },
            ].map((feature, index) => (
              <div key={index} className="card">
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Styles Section */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            Built for Every Athlete
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Whether you're into powerlifting, CrossFit, bodybuilding, or general fitness.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}>
            {['Powerlifting', 'CrossFit', 'Bodybuilding', 'Olympic Lifting', 'Calisthenics', 'General Fitness'].map((style) => (
              <span key={style} style={{
                padding: '12px 24px',
                background: 'var(--background-secondary)',
                borderRadius: '30px',
                border: '1px solid var(--border)',
                fontSize: '15px',
              }}>
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, var(--background) 0%, rgba(255, 107, 53, 0.1) 100%)',
      }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
            Ready to Track Your Gains?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Download Gym Reel and turn your camera roll chaos into a visual record of your progress.
          </p>
          <a href="#" className="btn btn-primary" style={{ gap: '12px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Image src="/AppIcon.png" alt="Gym Reel" width={32} height={32} style={{ borderRadius: '8px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700 }}>
                  <span style={{ color: 'var(--accent)' }}>Gym</span> Reel
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                The simplest way to organize and relive your workout videos.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-secondary)' }}>
                LEGAL
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Privacy Policy</Link>
                <Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Terms of Service</Link>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-secondary)' }}>
                CONTACT
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="mailto:support@gmrl.app" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  support@gmrl.app
                </a>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  2300 Wilson Blvd<br />
                  Arlington, VA
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
