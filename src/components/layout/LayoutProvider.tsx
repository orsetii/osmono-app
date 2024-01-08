"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

import ClipLoader from "react-spinners/ClipLoader";
import { GuestFooter } from "../guest/footer";
import { GuestHeader } from "../guest/header";
import { Header } from "../nav/header";
import { ThemeProvider } from "../theme/theme-provider";
import React from "react";
import { Toaster } from "../ui/sonner";

const inter = Inter({ subsets: ["latin"] });



export function LayoutProvider({children}: {children: any}) {
  const { user, error, isLoading } = useUser();

  if(isLoading && !user) return ( <><ClipLoader loading={isLoading} size={64} color="white" /></>)
  let guestMode =  (!user);




  if(guestMode ?? false) {

  return (

        <ThemeProvider
          defaultTheme="system"
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
                <div className="relative flex min-h-screen max-h-screen flex-col bg-background">
                  <Header />
                  <main className="flex-1 p-6 h-[calc(100vh-3.5rem)]">
{children}
                  </main>
                  <Toaster />
                </div>
              </div>
        </ThemeProvider>

    )
  }

}