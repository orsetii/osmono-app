import { Link }from "@remix-run/react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Separator } from "~/components/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">New calendar page, and more.</span>
      <span className="hidden sm:inline">
      Calendar and site appointment module, and more.
      </span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}