import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PillNav } from "@/components/nav/pill-nav";
import { MainNav } from "@/components/nav/main-nav";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmono",
  description: "",
};

function isLoggedIn() {
  return false;
}




export default function App({ children }) {
  return (

    <UserProvider>

    <html>
      <body className="min-h-screen bg-background font-sans antialiased" >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
              <div vaul-drawer-wrapper="">
                <div className="relative flex min-h-screen flex-col bg-background">
                  <SiteHeader />
                  <main className="flex-1">
                    {children}
                  </main>
                  <SiteFooter />
                </div>
              </div>
        </ThemeProvider>



    </body>
    </html>
    </UserProvider>
  );
}