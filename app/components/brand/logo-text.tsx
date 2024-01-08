import { siteConfig } from "~/config/site";

export function LogoText() {
    return (
        <>
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
        </>
    )
}