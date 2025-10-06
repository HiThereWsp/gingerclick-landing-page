import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'GingerClick - Growth Systems for B2B Companies | Andy GUITTEAUD',
    template: '%s | GingerClick - Andy GUITTEAUD'
  },
  description: 'Premium automated systems for established B2B businesses by Andy GUITTEAUD. Lead generation, project management, hiring systems, and sales administration with AI automation.',
  alternates: {
    canonical: 'https://gingerclick.com/en',
    languages: {
      'en': 'https://gingerclick.com/en',
      'fr': 'https://gingerclick.com',
    },
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
