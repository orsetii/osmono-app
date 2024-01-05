"use client"
import { GuestHome } from './guest/home'

import { useUser } from "@auth0/nextjs-auth0/client"
import { redirect } from 'next/navigation'

export default function Home() {
  const { user } = useUser();
  if(user) redirect("/dashboard")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <GuestHome />
    </main>
  )

}
