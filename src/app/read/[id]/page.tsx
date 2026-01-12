'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/books";

type ReadPageProps = { params: { id: string } };

export default function ReadPage({ params }: ReadPageProps) {
  const bookId = parseInt(params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-500 mb-2">by {book.author}</p>
      <div className="w-full h-80 relative mb-4">
        <Image src={book.cover} alt={book.title} fill className="object-cover rounded" />
      </div>
      <p className="text-lg font-semibold mb-4">Price: {book.price}</p>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros in justo facilisis fermentum.
      </p>
      <Link href="/books" className="inline-block mt-6 text-blue-500 underline hover:text-blue-700">
        ← Back to Books
      </Link>
    </main>
  );
}
