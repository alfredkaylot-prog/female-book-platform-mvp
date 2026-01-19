"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Sidebar */}
      <aside className={`w-64 p-6 space-y-6 transition-all ${open ? "block" : "hidden"} md:block`} style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}>
        <h2 className="text-2xl font-bold">📚 Dashboard</h2>

        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:opacity-80">🏠 Home</Link>
          <Link href="/dashboard/account" className="block hover:opacity-80">👤 Account</Link>
          <Link href="/dashboard/history" className="block hover:opacity-80">📖 Reading History</Link>
          <Link href="/dashboard/orders" className="block hover:opacity-80">🛒 Orders</Link>
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-10 w-full py-2 rounded hover:opacity-90"
          style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-color)' }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6" style={{ backgroundColor: 'var(--white)' }}>
        {/* Mobile toggle */}
        <button
          className="md:hidden mb-4 px-4 py-2 rounded"
          style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
          onClick={() => setOpen(!open)}
        >
          ☰ Menu
        </button>

        {children}
      </main>
    </div>
  );
}
