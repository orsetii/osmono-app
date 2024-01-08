"use client"
import type { Metadata } from "next";
import "~/styles/globals.css";

import { Toaster } from "sonner";
import { GuestFooter } from "../guest/footer";
import { GuestHeader } from "../guest/header";
import { Header } from "../nav/header";
import { ThemeProvider } from "../theme/theme-provider";
import React from "react";




export function LayoutProvider({children}: {children: any}) {




  if(true) {

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