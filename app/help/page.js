import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Help & FAQ - Gym Reel',
  description: 'Get help with Gym Reel. Find answers to frequently asked questions about importing videos, organizing workouts, and more.',
}

export default function Help() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/AppIcon.png" alt="GMRL" width={36} height={36} style={{ borderRadius: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: 700 }}>GMRL</span>
          </Link>
        </div>
      </nav>

      <div className="legal-content">
        <h1>Help & FAQ</h1>
        <p className="last-updated">Everything you need to know about Gym Reel</p>

        {/* Getting Started */}
        <h2>Getting Started</h2>
        <div style={{ marginTop: '16px' }}>
          {[
            {
              q: 'How do I get started with Gym Reel?',
              a: 'After signing in, grant photo library access so Gym Reel can import your workout videos. Then tap the + button on the Timeline tab to add your first clips.'
            },
            {
              q: 'Do I need to create an account?',
              a: 'Yes, an account is required to save your preferences and sync data across devices. You can sign in with Apple or use your email.'
            },
            {
              q: 'What permissions does the app need?',
              a: 'Gym Reel needs access to your Photo Library to import and display your workout videos. Camera access is optional and only needed if you want to record directly from the app.'
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

        {/* Importing & Recording */}
        <h2>Importing & Recording Videos</h2>
        <div style={{ marginTop: '16px' }}>
          {[
            {
              q: 'How do I import videos?',
              a: 'Tap the + button on the Timeline tab, then select "Import from Library." Choose one or more videos from your photo library, and they\'ll be organized automatically by date.'
            },
            {
              q: 'Can I record videos directly in the app?',
              a: 'Yes! Tap the + button and select "Record Video" to open the camera. Your recorded videos are saved to your photo library and added to your timeline.'
            },
            {
              q: 'What video formats are supported?',
              a: 'Gym Reel supports all video formats available in your iOS Photo Library, including MOV, MP4, and HEVC recordings.'
            },
            {
              q: 'Is there a limit to how many videos I can import?',
              a: 'No, there is no limit. You can import as many workout videos as you like.'
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

        {/* Timeline & Organization */}
        <h2>Timeline & Organization</h2>
        <div style={{ marginTop: '16px' }}>
          {[
            {
              q: 'How are my videos organized?',
              a: 'Videos are automatically grouped by the date they were recorded, creating a timeline of your workout days. Each day shows all clips from that session.'
            },
            {
              q: 'Can I tag my exercises?',
              a: 'Yes! Open any video and tap on it to view details. You can add exercise tags (like "Bench Press" or "Squats"), mark it as a PR, or add it to your favorites.'
            },
            {
              q: 'What are highlights?',
              a: 'Highlights are custom collections of your best clips. Create a highlight for specific exercises, PRs, or progress compilations that you can scroll through like a reel.'
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

        {/* Privacy & Data */}
        <h2>Privacy & Data</h2>
        <div style={{ marginTop: '16px' }}>
          {[
            {
              q: 'Are my videos uploaded to the cloud?',
              a: 'No. Your videos stay on your device in your Photo Library. Gym Reel only stores references to your videos, along with your tags and metadata.'
            },
            {
              q: 'What data is stored on your servers?',
              a: 'We store your account info (email, display name), exercise tags, highlights, and preferences. Your actual video files never leave your device.'
            },
            {
              q: 'Is my data secure?',
              a: 'Yes. We use industry-standard encryption for all data in transit and at rest. Your account is protected by Apple Sign In or email authentication.'
            },
            {
              q: 'Can I use the app on multiple devices?',
              a: 'Yes! Sign in with the same account on all your devices. Your tags, highlights, and preferences will sync automatically. Videos must be in each device\'s Photo Library.'
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

        {/* Account Management */}
        <h2>Account Management</h2>
        <div style={{ marginTop: '16px' }}>
          {[
            {
              q: 'How do I change my profile?',
              a: 'Go to the Profile tab and tap "Edit Profile" to update your display name, username, or profile photo.'
            },
            {
              q: 'How do I delete my account?',
              a: 'Go to Profile → Delete Account. This will permanently delete your account and all associated data (tags, highlights, preferences). Your videos in your Photo Library are not affected.'
            },
            {
              q: 'How do I sign out?',
              a: 'Go to the Profile tab and tap "Sign Out" at the bottom of the settings.'
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

        {/* Troubleshooting */}
        <h2>Troubleshooting</h2>
        <div style={{ marginTop: '16px' }}>
          {[
            {
              q: 'My videos aren\'t showing up',
              a: 'Make sure you\'ve granted Gym Reel access to your Photo Library. Go to Settings → Privacy → Photos → Gym Reel and select "Full Access." Then restart the app.'
            },
            {
              q: 'The app says "Video not found"',
              a: 'This happens if a video was deleted from your Photo Library. Gym Reel references videos in your library — if the original is removed, it can no longer be played.'
            },
            {
              q: 'Sign in with Apple isn\'t working',
              a: 'Make sure you\'re signed into iCloud on your device (Settings → Apple ID). If the issue persists, try restarting the app or your device.'
            },
            {
              q: 'The app is running slowly',
              a: 'Try closing and reopening the app. If you have many videos, the initial load may take a moment. Performance improves after thumbnails are cached.'
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

        {/* Contact */}
        <h2>Still Need Help?</h2>
        <div style={{
          background: 'var(--background-secondary)',
          borderRadius: '16px',
          padding: '32px',
          marginTop: '24px',
          border: '1px solid var(--border)',
        }}>
          <p style={{ marginBottom: '16px' }}>
            Can't find what you're looking for? Reach out to our support team.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>Email</p>
              <a href="mailto:support@gmrl.app" style={{ color: 'var(--accent)', fontSize: '18px' }}>
                support@gmrl.app
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <Link href="/" style={{ color: 'var(--accent)' }}>← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
