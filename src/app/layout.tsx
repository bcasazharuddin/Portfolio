import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import PageTransition from '@/components/pageTransition'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohd Azharuddin",
  description: "Software Developer with expertise in MERN stack, API development, and modern web applications.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-gray-950 dark:text-gray-300`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageTransition>
          {children}
          </PageTransition>
          <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
