import Link from "next/link";
import { Icons } from "../misc/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client"

function NavLink({ name, link, pathname }: any) {
  return (
    <Link
      href={link}
      className={cn(
        "transition-colors hover:text-foreground/80",
        pathname?.startsWith({ link })
          ? "text-foreground"
          : "text-foreground/60"
      )}
    >
    {name}
    </Link>
  );
}

export function MainNav() {
  const pathname = usePathname();
  
  return (
    <div className="mr-4 hidden md:flex mx-6">
      <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-8 w-8" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>

      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <NavLink name="Servers" link="/servers" pathname={pathname} />
        <NavLink name="Events" link="/events"  pathname={pathname} />
        <NavLink name="Tickets" link="/tickets"  pathname={pathname} />
        <NavLink name="Logs" link="/logs"  pathname={pathname} />
        <NavLink name="Customers" link="/customers" pathname={pathname}  />
</nav>
    </div>
  );
}
