import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Gym Reel',
  description: 'Terms of Service for Gym Reel - Read our terms and conditions for using the app.',
}

export default function Terms() {
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
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: January 19, 2026</p>

        <p>
          Please read these Terms of Service ("Terms") carefully before using the Gym Reel
          mobile application (the "Service") operated by AskQuala ("us," "we," or "our").
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you
          disagree with any part of the terms, you may not access the Service.
        </p>

        <h2>Description of Service</h2>
        <p>
          Gym Reel is a mobile application that allows users to organize, tag, and track
          their workout videos. The Service includes features such as:
        </p>
        <ul>
          <li>Importing and organizing videos from your device</li>
          <li>Tagging videos with exercises and categories</li>
          <li>Marking personal records (PRs)</li>
          <li>Creating highlight collections</li>
          <li>Syncing data across devices</li>
        </ul>

        <h2>User Accounts</h2>
        <p>
          To use certain features of the Service, you must create an account. You are responsible for:
        </p>
        <ul>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized use</li>
        </ul>
        <p>
          You must provide accurate and complete information when creating your account.
          We reserve the right to suspend or terminate accounts that violate these Terms.
        </p>

        <h2>User Content</h2>
        <p>
          You retain all rights to the videos and content you upload to the Service ("User Content").
          By using the Service, you grant us a limited license to store and process your User Content
          solely for the purpose of providing the Service to you.
        </p>
        <p>You agree not to upload content that:</p>
        <ul>
          <li>Violates any law or regulation</li>
          <li>Infringes on intellectual property rights</li>
          <li>Contains malware or harmful code</li>
          <li>Is obscene, defamatory, or harassing</li>
        </ul>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the Service</li>
          <li>Reverse engineer or decompile the application</li>
          <li>Use automated systems to access the Service</li>
          <li>Share your account with others</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          The Service and its original content (excluding User Content), features, and functionality
          are and will remain the exclusive property of AskQuala. The Service is protected by
          copyright, trademark, and other laws.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          The Service may integrate with third-party services (such as cloud storage providers).
          Your use of such services is subject to their respective terms and privacy policies.
          We are not responsible for the practices of third-party services.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
          SECURE, OR ERROR-FREE.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, ASKQUALA SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA,
          PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless AskQuala and its officers, directors, employees,
          and agents from any claims, damages, or expenses arising from your use of the Service
          or violation of these Terms.
        </p>

        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account and access to the Service immediately,
          without prior notice, for any reason, including breach of these Terms.
          Upon termination, your right to use the Service will cease immediately.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of
          significant changes by posting the new Terms on this page. Your continued use of
          the Service after changes constitutes acceptance of the new Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          Commonwealth of Virginia, without regard to its conflict of law provisions.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
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
