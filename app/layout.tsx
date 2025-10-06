import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gingerclick.com'),
  title: {
    default: 'GingerClick - Growth Systems for B2B Companies',
    template: '%s | GingerClick'
  },
  description: 'Premium automated systems for established B2B businesses by Andy GUITTEAUD. Lead generation, project management, hiring systems, and sales administration with AI automation.',
  keywords: [
    'Andy GUITTEAUD',
    'B2B growth systems',
    'lead generation automation',
    'sales automation',
    'business systems',
    'CRM systems',
    'AI automation',
    'project management systems',
    'hiring systems',
    'B2B marketing automation',
    'sales administration',
    'GingerClick'
  ],
  authors: [{ name: 'Andy GUITTEAUD', url: 'https://www.linkedin.com/in/andy-guitteaud-a3357984/' }],
  creator: 'Andy GUITTEAUD',
  publisher: 'GingerClick - Andy GUITTEAUD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gingerclick.com',
    title: 'GingerClick - Growth Systems for B2B Companies',
    description: 'Premium automated systems for established B2B businesses. Lead generation, project management, hiring systems, and sales administration.',
    siteName: 'GingerClick',
    images: [{
      url: '/gingerclick-logo-new.png',
      width: 1200,
      height: 630,
      alt: 'GingerClick - Growth Systems for B2B Companies',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GingerClick - Growth Systems for B2B Companies',
    description: 'Premium automated systems for established B2B businesses',
    images: ['/gingerclick-logo-new.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#BFFF00' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://gingerclick.com',
    languages: {
      'en': 'https://gingerclick.com/en',
      'fr': 'https://gingerclick.com',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "GingerClick",
        "url": "https://gingerclick.com",
        "logo": "https://gingerclick.com/gingerclick-logo-new.png",
        "description": "Growth Systems for B2B Companies - Lead generation, project management, hiring systems, and sales administration",
        "founder": {
          "@type": "Person",
          "name": "Andy GUITTEAUD",
          "sameAs": "https://www.linkedin.com/in/andy-guitteaud-a3357984/",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "GingerClick"
          }
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "url": "https://calendly.com/andygtd/30min"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Lead Generation Systems",
          "Project Management Systems",
          "Hiring Systems",
          "Sales Administration Systems"
        ]
      },
      {
        "@type": "Person",
        "name": "Andy GUITTEAUD",
        "url": "https://gingerclick.com",
        "image": "https://gingerclick.com/profile-new.jpeg",
        "sameAs": [
          "https://www.linkedin.com/in/andy-guitteaud-a3357984/"
        ],
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@type": "Organization",
          "name": "GingerClick",
          "url": "https://gingerclick.com"
        },
        "description": "Specialist in building automation systems for B2B businesses. Expert in lead generation, project management, and sales administration systems.",
        "knowsAbout": [
          "B2B Growth Systems",
          "Lead Generation",
          "AI Automation",
          "CRM Systems",
          "Project Management",
          "Sales Administration"
        ]
      },
      {
        "@type": "WebSite",
        "name": "GingerClick",
        "url": "https://gingerclick.com",
        "description": "Growth Systems for B2B Companies by Andy GUITTEAUD",
        "publisher": {
          "@type": "Person",
          "name": "Andy GUITTEAUD"
        },
        "inLanguage": ["en", "fr"]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <Script
          defer
          data-website-id="68c02ad22c23b86ca8b151a5"
          data-domain="gingerclick.com"
          src="https://datafa.st/js/script.js"
        />
      </body>
    </html>
  )
}
