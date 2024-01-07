import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { LayoutProvider } from "@/components/layout/LayoutProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmono",
  description: "",
};

export default function App({children}: { children: any }) {
  return (
    <UserProvider>


      <html>
        <body className="min-h-screen overflow-hidden bg-background font-sans antialiased">
          <LayoutProvider >
            {children}
            </LayoutProvider> 
        </body>
      </html>
    </UserProvider>
  );
}
