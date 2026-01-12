'use client'; // client component for buttons

import Image from "next/image";
import Link from "next/link";

// Sample books
export const books = [
  { id: 1, title: "The Elegant Life", author: "Jane Doe", price: "GHS 50", cover: "/books/book-1.jpg" },
  { id: 2, title: "Dreams & Ambitions", author: "Mary Smith", price: "GHS 45", cover: "/books/book-2.jpg" },
  { id: 3, title: "Graceful Mind", author: "Linda White", price: "GHS 60", cover: "/books/book-3.jpg" },
  { id: 4, title: "Soft Power", author: "Anne Brown", price: "GHS 55", cover: "/books/book-4.jpg" },
];

export default function BooksPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Female-Oriented Book Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col">
            <div className="relative w-full h-64 mb-4">
              <Image src={book.cover} alt={book.title} fill className="object-cover rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{book.author}</p>
            <p className="text-pink-600 font-bold mb-4">{book.price}</p>

            <div className="mt-auto flex flex-col gap-2">
              <Link
                href={`/read/${book.id}`}
                className="text-center bg-pink-600 text-white px-4 py-2 rounded-lg border border-pink-600 hover:bg-white hover:text-pink-600 transition-colors"
              >
                Read Online 🔒
              </Link>
              <Link
                href={`/order/${book.id}`}
                className="text-center bg-green-600 text-white px-4 py-2 rounded-lg border border-green-600 hover:bg-white hover:text-green-600 transition-colors"
              >
                Order Book 🛒
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
