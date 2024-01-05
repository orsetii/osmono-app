"use client"

import { CommandMenu } from "@/components/nav/command-menu"
import { GuestNav } from "@/components/guest/nav"
import { MobileNav } from "./nav/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "./nav/user-nav"
import { MainNav } from "./nav/main-nav"
import { Search } from "./dashboard/search"
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="hidden flex-col md:flex w-full">
        <div className="">
          <div className="flex h-16 items-center px-4">
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <ModeToggle />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>

  )
}