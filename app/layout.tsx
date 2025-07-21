import type React from "react"
import type { Metadata } from "next"
import { Ubuntu, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { AppContextProvider } from "@/contexts/app-context"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-ubuntu" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-poppins" })

// Metadata is now defined in [locale]/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${poppins.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <AppContextProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <Toaster />
          </AuthProvider>
        </AppContextProvider>
      </body>
    </html>
  )
}
