import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Question Leak Detector',
  description: 'Detect if your interview questions are posted online. Monitor Glassdoor, Blind, and forums to alert when your company\'s interview questions are leaked publicly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e5d420c6-f86a-4ef7-9fb0-2696511bfa69"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
