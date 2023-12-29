import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ExamplesNav } from "@/components/nav/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmono",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <ExamplesNav />
            {children}
        </ThemeProvider>
          </main>
      </body>
    </html>
  );
}
