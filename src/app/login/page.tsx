"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginContent() {
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
        className="px-6 py-3 rounded shadow"
        style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
        onClick={() => signIn("google", { callbackUrl })}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
