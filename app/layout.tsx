import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Schema Differ — Visual Database Schema Diff Tool',
  description: 'Compare database schemas across environments and visualize differences with automated migration script generation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4d3b520b-8a97-45a8-a12d-cc0a3359916a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
