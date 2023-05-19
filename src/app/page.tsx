import { AbsolutePurpleBlur } from '@/components/AbsolutePurpleBlur'
import { AbsoluteVerticalStripes } from '@/components/AbsoluteVerticalStripes'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { getUser } from '@/lib/auth'

export default function Home() {
  const user = getUser()

  return (
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
        <EmptyMemories />
      </div>
    </main>
  )
}
