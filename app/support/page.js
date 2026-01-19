import Link from 'next/link'

export const metadata = {
  title: 'Support - Gym Reel',
  description: 'Get help with Gym Reel - Contact our support team for assistance.',
}

export default function Support() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '24px', fontWeight: 700 }}>
            <span style={{ color: 'var(--accent)' }}>Gym</span> Reel
          </Link>
        </div>
      </nav>

      <div className="legal-content">
        <h1>Support</h1>
        <p className="last-updated">We're here to help!</p>

        <h2>Contact Us</h2>
        <p>
          Have a question, issue, or feedback? We'd love to hear from you.
          Our support team typically responds within 24-48 hours.
        </p>

        <div style={{
          background: 'var(--background-secondary)',
          borderRadius: '16px',
          padding: '32px',
          marginTop: '24px',
          marginBottom: '40px',
          border: '1px solid var(--border)',
        }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Get in Touch</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>Email</p>
              <a href="mailto:support@gmrl.app" style={{ color: 'var(--accent)', fontSize: '18px' }}>
                support@gmrl.app
              </a>
            </div>

            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>Address</p>
              <p style={{ fontSize: '18px' }}>
                2300 Wilson Blvd<br />
                Arlington, VA 22201
              </p>
            </div>
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>

        <div style={{ marginTop: '24px' }}>
          {[
            {
              q: 'How do I import videos?',
              a: 'Tap the + button on the Timeline tab and select videos from your photo library. Gym Reel will organize them automatically by date.'
            },
            {
              q: 'Are my videos uploaded to the cloud?',
              a: 'By default, videos stay on your device. You can optionally enable cloud backup to sync across devices, but this is completely optional.'
            },
            {
              q: 'How do I tag my exercises?',
              a: 'Open any video and tap on it to access the details. From there, you can add tags, mark it as a PR, or add it to your favorites.'
            },
            {
              q: 'Can I use Gym Reel on multiple devices?',
              a: 'Yes! Sign in with the same account on all your devices, and your tags, PRs, and highlights will sync automatically.'
            },
            {
              q: 'How do I delete my account?',
              a: 'Go to Profile → Settings → Delete Account. This will permanently delete your account and all associated data.'
            },
            {
              q: 'Is my data secure?',
              a: 'Yes. We use industry-standard encryption for all data. Your videos remain on your device unless you choose to enable cloud backup.'
            },
          ].map((faq, index) => (
            <div key={index} style={{
              padding: '24px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{faq.q}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '60px' }}>Report a Bug</h2>
        <p>
          Found a bug? Please email us at{' '}
          <a href="mailto:support@gmrl.app" style={{ color: 'var(--accent)' }}>support@gmrl.app</a>{' '}
          with the following information:
        </p>
        <ul>
          <li>Your device model and iOS version</li>
          <li>Steps to reproduce the issue</li>
          <li>Screenshots or screen recordings if possible</li>
        </ul>

        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <Link href="/" style={{ color: 'var(--accent)' }}>← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
