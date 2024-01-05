"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import { Toaster } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";
import { GuestFooter } from "./guest/footer";
import { GuestHeader } from "./guest/header";

const inter = Inter({ subsets: ["latin"] });



export function LayoutProvider({ children }: any) {
  const { user, error, isLoading } = useUser();

  if(isLoading && !user) return ( <><ClipLoader loading={isLoading} size={64} color="white" /></>)
  let guestMode =  (!user);




  if(guestMode ?? false) {

  return (

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
              <div vaul-drawer-wrapper="">
                <div className="relative flex min-h-screen flex-col bg-background">
                  <GuestHeader />
                  <main className="flex-1">
                    {children}
                  </main>
                  <Toaster />
                  <GuestFooter />
                </div>
              </div>
        </ThemeProvider>
  );
   } else {
    return (

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
              <div vaul-drawer-wrapper="">
                <div className="relative flex min-h-screen flex-col bg-background">
                  <Header />
                  <main className="flex-1">
                    {children}
                  </main>
                  <Toaster />
                </div>
              </div>
        </ThemeProvider>

    )
  }

}