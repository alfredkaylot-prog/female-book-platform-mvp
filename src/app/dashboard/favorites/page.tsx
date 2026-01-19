"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/components/FavoritesContext";
import { books } from "@/lib/books";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const [favoriteBooks, setFavoriteBooks] = useState<any[]>([]);

  useEffect(() => {
    const favBooks = books.filter(book => favorites.includes(book.id));
    setFavoriteBooks(favBooks);
  }, [favorites]);

  if (favoriteBooks.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">You haven't added any books to your favorites yet.</p>
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
      <h1 className="text-2xl font-bold mb-4">My Favorites ({favoriteBooks.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoriteBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            <p className="font-bold mb-3" style={{ color: 'var(--accent-color)' }}>{book.price}</p>

            <div className="flex gap-2">
              <Link
                href={`/read/${book.id}`}
                className="flex-1 text-center px-3 py-2 rounded text-sm"
                style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
              >
                Read
              </Link>
              <button
                onClick={() => removeFromFavorites(book.id)}
                className="px-3 py-2 rounded text-sm border-2"
                style={{
                  borderColor: 'var(--secondary-color)',
                  color: 'var(--secondary-color)',
                  backgroundColor: 'transparent'
                }}
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}