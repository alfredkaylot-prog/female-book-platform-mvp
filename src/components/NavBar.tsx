"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-pink-100 p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" className="font-semibold hover:text-pink-700">Home</Link>
        <Link href="/books" className="font-semibold hover:text-pink-700">Books</Link>
      </div>

      <div>
        {!session ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Login
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
