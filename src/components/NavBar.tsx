"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 flex justify-between items-center" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="flex space-x-4">
        <Link href="/" className="font-semibold" style={{ color: 'var(--text-color)' }}>Home</Link>
        <Link href="/books" className="font-semibold" style={{ color: 'var(--text-color)' }}>Books</Link>
      </div>

      <div>
        {!session ? (
          <button
            className="px-4 py-2 rounded"
            style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Login
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded"
            style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--white)' }}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
