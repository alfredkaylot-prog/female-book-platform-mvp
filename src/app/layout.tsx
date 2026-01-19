import "./globals.css";
import "./layout.css";
import Link from "next/link";
import Providers from "./providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Female Book Platform",
  description: "Discover books written for women.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
         <nav className="topbar">
  <h1>Female Book Platform</h1>
  <div className="links">
    <Link href="/">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/dashboard">Dashboard</Link>
  </div>
</nav>



          <main className="page-container">
            {children}
          </main>

          <Footer />
        </Providers>
        <script src="/theme.js" />

      </body>
    </html>
  );
}
