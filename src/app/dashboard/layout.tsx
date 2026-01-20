"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

const isActive = (path: string) =>
  pathname === path || pathname.startsWith(path + "/");


  return (
    <div className="dashboard-root">

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${open ? "open" : ""}`}>
        <h2 className="dashboard-title">📚 Dashboard</h2>

        <nav className="dashboard-nav">
  <Link
    href="/dashboard"
    className={isActive("/dashboard") ? "active" : ""}
  >
    🏠 Home
  </Link>

  <Link
    href="/dashboard/account"
    className={isActive("/dashboard/account") ? "active" : ""}
  >
    👤 Account
  </Link>

  <Link
    href="/dashboard/history"
    className={isActive("/dashboard/history") ? "active" : ""}
  >
    📖 Reading History
  </Link>

  <Link
    href="/dashboard/orders"
    className={isActive("/dashboard/orders") ? "active" : ""}
  >
    🛒 Orders
  </Link>
</nav>

        <button
          className="dashboard-logout"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </button>
      </aside>

      {/* Main Area */}
      <main className="dashboard-main">
        {/* Mobile toggle */}
        <button
          className="dashboard-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {children}
      </main>
    </div>
  );
}
