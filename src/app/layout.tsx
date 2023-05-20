import './globals.css'

import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'

import { AbsolutePurpleBlur } from '@/components/AbsolutePurpleBlur'
import { AbsoluteVerticalStripes } from '@/components/AbsoluteVerticalStripes'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { ReactNode } from 'react'
import { SignIn } from '@/components/SignIn'
import { getUser } from '@/lib/auth'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, Tailwindcss e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const user = getUser()
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {user ? <Profile data={user} /> : <SignIn />}
            <Hero />
            <Copyright />

            <AbsolutePurpleBlur />
            <AbsoluteVerticalStripes />
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
