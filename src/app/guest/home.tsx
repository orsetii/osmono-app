"use client"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/ui/announcement"
import { Icons } from "@/components/misc/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"
import { buttonVariants } from "@/components/ui/button"

export function GuestHome() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Simplify Remote Access</PageHeaderHeading>
        <PageHeaderDescription>
          One-click remote access and you never have to leave your browser. Automate common tasks with hundreds of pre-configured scripts, or customize your own
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="/pricing"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Pricing
          </Link>
        </PageActions>
      </PageHeader>
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
        </div>
      </section>
    </div>
  )
}