import { isLoggedIn } from '@/lib/auth'
import Image from 'next/image'
import Dashboard from './dashboard/page'
import { GuestHome } from './guest/home'

export default function Home() {
  if(isLoggedIn()) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dashboard />
    </main>
  )
  } else {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <GuestHome />
    </main>
  )

  }
}
