"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in first. <a href="/login" className="text-blue-500 underline">Go to login</a></p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {session.user?.name}</h1>
      <p className="mb-4">You are logged in with {session.user?.email}</p>

      <button
        onClick={() => signOut()}
        className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </div>
  );
}
