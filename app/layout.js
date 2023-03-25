import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Notes app',
  description: 'With React, Next, PocketBase db',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><main>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/api/notes">Notes</Link>
        </nav>
        {children}
        </main>
        </body>
    </html>
  )
}
