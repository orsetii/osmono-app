"use client"

import * as React from "react"
import { Link }from "@remix-run/react"

import { siteConfig } from "app/config/site"
import { cn } from "app/lib/utils"
import { Icons } from "app/components/misc/icons"
import { Badge } from "app/components/ui/badge"

export function GuestNav() {

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-8 w-8" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          to="/docs"
          className={cn(
            "transition-colors text-foreground hover:text-foreground/80",
          )}
        >
        Docs
        </Link>
        <Link
          to="/pricing"
          className={cn(
            "transition-colors text-foreground hover:text-foreground/80",
          )}
        >
          Pricing
        </Link>
        <Link
          to="/about"
          className={cn(
            "transition-colors text-foreground hover:text-foreground/80",
          )}
        >
          About
        </Link>
      </nav>
    </div>
  )
}