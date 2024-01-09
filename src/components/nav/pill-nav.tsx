import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/misc/mode-toggle"

interface PillNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PillNav({ className, ...props }: PillNavProps) {

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none pl-16">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
        <div className="pl-16 mt-1 mb-1 items-right">
            <ModeToggle />
        </div>
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}