"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-black text-white w-64 p-6 space-y-6 transition-all ${open ? "block" : "hidden"} md:block`}>
        <h2 className="text-2xl font-bold">📚 Dashboard</h2>

        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:text-pink-400">🏠 Home</Link>
          <Link href="/dashboard/account" className="block hover:text-pink-400">👤 Account</Link>
          <Link href="/dashboard/history" className="block hover:text-pink-400">📖 Reading History</Link>
          <Link href="/dashboard/orders" className="block hover:text-pink-400">🛒 Orders</Link>
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-10 bg-white text-black w-full py-2 rounded hover:bg-gray-200"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Mobile toggle */}
        <button
          className="md:hidden mb-4 bg-black text-white px-4 py-2 rounded"
          onClick={() => setOpen(!open)}
        >
          ☰ Menu
        </button>

        {children}
      </main>
    </div>
  );
}
