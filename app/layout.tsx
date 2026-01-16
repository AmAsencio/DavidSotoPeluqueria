import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "David Soto | Premium Barbershop in Estepona",
  description:
    "Classic values, modern style. Premium barbershop offering traditional cuts and contemporary grooming in Estepona, Spain since 2014.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Esto evita que el usuario haga zoom pellizcando (opcional, da sensación de app nativa)
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
