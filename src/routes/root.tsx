import { Header } from "@/components/nav/header"
import { Outlet } from "react-router-dom"


export function RootLayout() {


    return (
        <>
                  <div vaul-drawer-wrapper="">
                <div className="relative flex min-h-screen max-h-screen flex-col bg-background">
                  <Header />
                  <main className="flex-1 p-6 h-[calc(100vh-3.5rem)]">
                  <Outlet />
                  </main>
                </div>
              </div>
        </>
    )
}