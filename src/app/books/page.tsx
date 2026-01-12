'use client';

import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Female-Oriented Book Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col">
            <div className="flex justify-center mb-4">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="rounded-lg object-cover"
                />
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
