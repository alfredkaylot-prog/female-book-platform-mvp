"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect if already signed in
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (session) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Login to Continue</h1>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded shadow"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        Sign in with Google
      </button>
    </div>
  );
}
