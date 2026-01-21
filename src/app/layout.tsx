import "./globals.css";
import "./layout.css";
import Link from "next/link";
import Providers from "./providers";

export const metadata = {
  title: "BENTIL'S BOOKSHOP",
  description: "Discover inspiring books and audiobooks.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
         <nav className="topbar">
  <h1>BENTIL'S BOOKSHOP</h1>
  <div className="links">
    <Link href="/">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/dashboard">Dashboard</Link>
  </div>
  
  {/* 🌙 DARK MODE TOGGLE */}
  <button
  id="theme-toggle"
  className="theme-toggle"
  aria-label="Toggle theme"
/>

</nav>



          <main className="page-container">
            {children}
          </main>
        </Providers>
        <script src="/theme.js" />
        


      </body>
    </html>
  );
}
