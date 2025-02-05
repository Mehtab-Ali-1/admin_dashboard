import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" 
import { Sidebar } from "lucide-react"
// 
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard",
  description: "An awesome admin dashboard built with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          {/* <Sidebar /> */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              <div className="container mx-auto px-6 py-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

