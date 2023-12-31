"use client"

import { CommandMenu } from "@/components/nav/command-menu"
import { GuestNav } from "@/components/guest/nav"
import { MobileNav } from "../nav/mobile-nav"
import { ModeToggle } from "@/components/misc/mode-toggle"
import { UserNav } from "../nav/user-nav"
export function GuestHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <GuestNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <ModeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  )
}