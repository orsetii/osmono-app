import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmono",
  description: "",
};


export default function App({ children }: any) {
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
                  <Toaster />
                  <SiteFooter />
                </div>
              </div>
        </ThemeProvider>
    </body>
    </html>
    </UserProvider>
  );
}