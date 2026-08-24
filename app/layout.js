import './globals.css'
import { Anton, Barlow } from 'next/font/google'

const display = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const body = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://gmrl.app'),
  alternates: {
    canonical: '/',
  },
  title: 'Gym Reel - Organize Your Workout Videos',
  description: 'The simplest way to organize and relive your workout videos. Track your gym progress with automatic organization, exercise tagging, and PR tracking.',
  keywords: 'gym, workout, fitness, video, tracker, exercise, PR, personal record, lifting',
  openGraph: {
    title: 'Gym Reel - Organize Your Workout Videos',
    description: 'The simplest way to organize and relive your workout videos.',
    url: 'https://gmrl.app',
    siteName: 'Gym Reel',
    type: 'website',
    images: [
      {
        url: '/AppIcon.png',
        width: 1024,
        height: 1024,
        alt: 'Gym Reel App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Gym Reel - Organize Your Workout Videos',
    description: 'The simplest way to organize and relive your workout videos.',
    images: ['/AppIcon.png'],
  },
  icons: {
    icon: '/AppIcon.png',
    apple: '/AppIcon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
