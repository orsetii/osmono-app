"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/mode-toggle"

const examples = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Customers",
    href: "/customers",
  },
  {
    name: "Profile",
    href: "/profile",
  },
]

interface PillNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PillNav({ className, ...props }: PillNavProps) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none pl-16">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        <div className="pl-16 mt-1 mb-1 items-right">
            <ModeToggle />
        </div>
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}