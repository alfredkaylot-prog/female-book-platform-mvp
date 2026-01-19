"use client";

import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export default function LoadingSpinner({
  size = "medium",
  color = "var(--primary-color)"
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-2 ${sizeClasses[size]}`}
         style={{ borderTopColor: color }}>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center"
         style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="text-center">
        <LoadingSpinner size="large" />
        <p className="mt-4" style={{ color: 'var(--text-color)' }}>Loading...</p>
      </div>
    </div>
  );
}

export function LoadingButton({ children, loading, ...props }: {
  children: React.ReactNode;
  loading: boolean;
  [key: string]: any;
}) {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <LoadingSpinner size="small" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}