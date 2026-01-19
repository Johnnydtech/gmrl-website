import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - Gym Reel',
  description: 'Privacy Policy for Gym Reel - Learn how we collect, use, and protect your data.',
}

export default function Privacy() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/AppIcon.png" alt="Gym Reel" width={36} height={36} style={{ borderRadius: '8px' }} />
            <span style={{ fontSize: '24px', fontWeight: 700 }}><span style={{ color: 'var(--accent)' }}>Gym</span> Reel</span>
          </Link>
        </div>
      </nav>

      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: January 19, 2026</p>

        <p>
          AskQuala ("we," "our," or "us") operates the Gym Reel mobile application (the "Service").
          This page informs you of our policies regarding the collection, use, and disclosure of
          personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect several types of information for various purposes to provide and improve our Service:</p>

        <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Account Information</h3>
        <ul>
          <li>Email address (required for account creation)</li>
          <li>Username and display name (optional)</li>
          <li>Profile picture (optional)</li>
        </ul>

        <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Workout Data</h3>
        <ul>
          <li>Videos you choose to import from your photo library</li>
          <li>Exercise tags and labels you create</li>
          <li>Personal record (PR) markers</li>
          <li>Highlight collections you create</li>
        </ul>

        <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>Usage Data</h3>
        <ul>
          <li>Anonymous analytics data (app usage patterns)</li>
          <li>Device information (device type, operating system)</li>
          <li>Crash reports and performance data</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the collected data for the following purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To sync your workout data across devices</li>
          <li>To improve and personalize your experience</li>
          <li>To analyze usage patterns and fix bugs</li>
          <li>To communicate with you about the Service</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <p>
          Your data is stored securely using industry-standard encryption:
        </p>
        <ul>
          <li><strong>Account data:</strong> Stored securely on Supabase servers with encryption at rest and in transit</li>
          <li><strong>Videos:</strong> Stored locally on your device. Optional cloud backup is encrypted and only accessible by you</li>
          <li><strong>Analytics:</strong> Processed by PostHog with anonymized identifiers</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
        <ul>
          <li><strong>Service providers:</strong> Companies that help us operate the Service (hosting, analytics)</li>
          <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
        </ul>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your account and associated data</li>
          <li>Export your data</li>
          <li>Opt out of analytics tracking</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to provide the Service.
          When you delete your account, we will delete your personal data within 30 days,
          except where we are required to retain it for legal purposes.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our Service is not intended for children under 13. We do not knowingly collect
          personal information from children under 13. If you are a parent or guardian and
          believe your child has provided us with personal information, please contact us.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes
          by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:support@gmrl.app">support@gmrl.app</a></li>
          <li>Address: 2300 Wilson Blvd, Arlington, VA</li>
        </ul>

        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <Link href="/" style={{ color: 'var(--accent)' }}>← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
