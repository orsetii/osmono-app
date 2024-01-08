import { siteConfig } from "app/config/site"
import { cn } from "app/lib/utils"
import { Announcement } from "app/components/ui/announcement"
import { Icons } from "app/components/misc/icons"
import { Link }from "@remix-run/react"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "app/components/ui/page-header"
import { buttonVariants } from "app/components/ui/button"

export function GuestIndex() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Simplify Remote Access</PageHeaderHeading>
        <PageHeaderDescription>
          One-click remote access and you never have to leave your browser. Automate common tasks with hundreds of pre-configured scripts, or customize your own
        </PageHeaderDescription>
        <PageActions>
          <Link to="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            to="/pricing"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Pricing
          </Link>
        </PageActions>
      </PageHeader>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
        </div>
      </section>
    </div>
  )
}