import { Link } from "react-router-dom";
import { Icons } from "../misc/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function NavLink({ name, link, pathname }: any) {
  return (
    <Link
      to={link}
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
  
  return (
    <div className="mr-4 hidden md:flex mx-6">
      <Link to="/dashboard" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-8 w-8" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>

      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <NavLink name="Servers" link="/servers"  />
        <NavLink name="Events" link="/events"   />
        <NavLink name="Tickets" link="/tickets"   />
        <NavLink name="Logs" link="/logs"   />
        <NavLink name="Customers" link="/customers"   />
</nav>
    </div>
  );
}
