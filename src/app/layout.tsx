import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "~/components/navbar"
import { Footer } from "~/components/footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Anichan",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-[family-name:var(--font-inter)]`}
      >
        <Navbar />
        <main className="p-8 pt-4 min-h-[55vh] bg-[#16042f] text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
