import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { LayoutProvider } from "@/components/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmono",
  description: "",
};

export default function App({ children }: any) {
  return (
    <UserProvider>
      <html>
        <body className="min-h-screen bg-background font-sans antialiased">
          <LayoutProvider children={children} />
        </body>
      </html>
    </UserProvider>
  );
}
