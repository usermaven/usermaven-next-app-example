import { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Usermaven Next.js 13 Example",
  description: "Welcome to Usermaven Next.js 13 Example"
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
