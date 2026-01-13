import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Female Book Platform",
  description: "Discover books written for women.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-10">
          <h1 className="text-xl font-bold">Female Book Platform</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/login" className="hover:text-gray-600">Login</Link>
            <Link href="/dashboard" className="hover:text-gray-600">Dashboard</Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="max-w-7xl mx-auto p-6">
          {children}
        </main>

      </body>
    </html>
  );
}
