"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/nav/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/nav/main-nav"
import { MobileNav } from "./nav/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { UserNav } from "./nav/user-nav"
import LoginButton from "./auth/login-button"
import { useUser } from "@auth0/nextjs-auth0/client"


export function AuthButton() {
  const {user, error, isLoading} = useUser();
  if(user) {
    return <UserNav user={user} />
  } else {
    return <LoginButton />
  }
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <ModeToggle />
            <AuthButton />
          </nav>
        </div>
      </div>
    </header>
  )
}