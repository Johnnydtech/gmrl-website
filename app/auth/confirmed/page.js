import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Email Confirmed - Gym Reel',
  description: 'Your email has been confirmed. Open the GMRL app to continue.',
}

export default function Confirmed() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--background)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Mascot */}
        <div style={{ marginBottom: '32px' }}>
          <Image
            src="/mascot-onboarding.png"
            alt="GMRL Mascot"
            width={140}
            height={140}
            style={{ margin: '0 auto' }}
          />
        </div>

        {/* Success Message */}
        <div style={{
          background: 'var(--background-secondary)',
          borderRadius: '20px',
          padding: '48px 32px',
          border: '1px solid var(--border)',
        }}>
          {/* Checkmark */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '12px',
            color: 'var(--text-primary)',
          }}>
            Email Confirmed!
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            Your email has been verified. Open the GMRL app to continue your workout journey.
          </p>

          {/* Open App Button */}
          <a
            href="gmrl://"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: 'var(--background)',
              fontSize: '17px',
              fontWeight: 600,
              padding: '16px 32px',
              borderRadius: '14px',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            Open GMRL App
          </a>

          {/* Fallback */}
          <p style={{
            fontSize: '14px',
            color: 'var(--text-tertiary)',
            marginTop: '24px',
          }}>
            Don't have the app?{' '}
            <a
              href="https://apps.apple.com/us/app/gym-reel/id6757939929"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              Download from App Store
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div style={{ marginTop: '32px' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
