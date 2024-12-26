import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio professionnel créé avec Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">MonPortfolio</div>
              <div className="space-x-4">
                <a href="/" className="hover:text-gray-300">Accueil</a>
                <a href="/about" className="hover:text-gray-300">À propos</a>
                <a href="/projects" className="hover:text-gray-300">Projets</a>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white mt-8">
          <div className="container mx-auto px-6 py-4 text-center">
            © 2024 MonPortfolio. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  )
}
