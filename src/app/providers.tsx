"use client";

import { SessionProvider } from "next-auth/react";
import { FavoritesProvider } from "@/components/FavoritesContext";
import { ToastProvider } from "@/components/Toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <FavoritesProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </FavoritesProvider>
    </SessionProvider>
  );
}
