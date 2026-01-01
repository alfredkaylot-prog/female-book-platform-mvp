import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Female Book Platform",
  description: "Web platform for female-oriented books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="bg-[var(--color-primary)] p-4 shadow-md relative z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Female Book Platform</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/books" className="hover:underline">
                Books
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-5xl mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-[var(--color-secondary)] p-4 mt-8 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Female Book Platform. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
