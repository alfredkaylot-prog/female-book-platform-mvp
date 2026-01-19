"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ReadingHistoryItem {
  id: number;
  title: string;
  lastRead: string;
  progress: number;
}

export default function ReadingHistory() {
  const [history, setHistory] = useState<ReadingHistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('reading-history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  if (history.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Reading History</h1>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">You haven't read any books yet.</p>
          <Link
            href="/books"
            className="inline-block px-6 py-3 rounded"
            style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reading History</h1>
      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg border"
            style={{ backgroundColor: 'var(--white)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--text-color)' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--primary-color)' }}>
                  Last read: {new Date(item.lastRead).toLocaleDateString()}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
                  Progress: Page {item.progress}
                </p>
              </div>
              <Link
                href={`/read/${item.id}`}
                className="px-4 py-2 rounded text-sm"
                style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
              >
                Continue Reading
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
