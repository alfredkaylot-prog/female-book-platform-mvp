"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get callbackUrl from ?callbackUrl=/read/3
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    if (session) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);

  if (session) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Login to Continue</h1>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded shadow"
        onClick={() => signIn("google", { callbackUrl })}
      >
        Sign in with Google
      </button>
    </div>
  );
}
