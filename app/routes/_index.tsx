import type { MetaFunction } from "@remix-run/node";
import { siteConfig } from "app/config/site";
import { IsLoggedIn } from "app/lib/auth";
import DashboardPage from "./dashboard";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: siteConfig.name },
    { name: "description", content: siteConfig.description },
  ];
};

export default function Index() {
  if(IsLoggedIn()) {
    return (<DashboardPage />)
  } else {
    return redirect("/about")
  }
}
