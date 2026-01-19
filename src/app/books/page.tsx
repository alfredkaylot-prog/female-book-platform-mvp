"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { books } from "@/lib/books";
import { useFavorites } from "@/components/FavoritesContext";
import { useToast } from "@/components/Toast";

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToast } = useToast();

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return books;

    return books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleFavoriteToggle = (book: any) => {
    if (isFavorite(book.id)) {
      removeFromFavorites(book.id);
      addToast(`Removed "${book.title}" from favorites`, "info");
    } else {
      addToFavorites(book.id);
      addToast(`Added "${book.title}" to favorites`, "success");
    }
  };

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Our Female-Oriented Book Collection
      </h2>

      {/* Search and Filter Section */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
            style={{
              borderColor: 'var(--border-color)',
              backgroundColor: 'var(--white)',
              color: 'var(--text-color)'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
          <div className="absolute right-3 top-3 text-gray-400">
            🔍
          </div>
        </div>
      </div>

      {filteredBooks.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No books found matching "{searchTerm}"</p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 rounded"
            style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
          >
            Clear Search
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
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
                onClick={() => handleFavoriteToggle(book)}
                className="px-3 py-2 rounded text-sm"
                style={{
                  backgroundColor: isFavorite(book.id) ? 'var(--secondary-color)' : 'var(--light-gray)',
                  color: isFavorite(book.id) ? 'var(--white)' : 'var(--text-color)'
                }}
              >
                {isFavorite(book.id) ? '❤️' : '🤍'}
              </button>
              <Link
                href={`/order/${book.id}`}
                className="flex-1 text-center px-3 py-2 rounded text-sm border-2"
                style={{
                  borderColor: 'var(--primary-color)',
                  color: 'var(--primary-color)',
                  backgroundColor: 'transparent'
                }}
              >
                Order
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 rounded-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
        <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
          Can't find what you're looking for?
        </h3>
        <p className="mb-6" style={{ color: 'var(--text-color)' }}>
          We're constantly adding new titles to our collection. Check back soon for more inspiring stories by women authors.
        </p>
        <div className="text-sm" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
          📧 Contact us: support@femalebookplatform.com
        </div>
      </div>
    </main>
  );
}

