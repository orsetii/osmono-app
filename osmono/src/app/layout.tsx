import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PillNav } from "@/components/nav/pill-nav";
import { MainNav } from "@/components/nav/main-nav";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmono",
  description: "",
};

function isLoggedIn() {
  return false;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  if(isLoggedIn()) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-between p-6">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PillNav />
            {children}
        </ThemeProvider>
          </main>
      </body>
    </html>
  );
  } else {
    return (
      <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className= "min-h-screen bg-background font-sans antialiased" >
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
      </>
    )
  }
}
