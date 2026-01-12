'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { books } from "@/lib/books";

type OrderPageProps = { params: { id: string } };

export default function OrderPage({ params }: OrderPageProps) {
  const bookId = parseInt(params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-green-700">
        Order: {book.title}
      </h1>

      <div className="flex justify-center mb-6">
        <Image src={book.cover} alt={book.title} width={200} height={300} className="rounded-lg object-cover" />
      </div>

      <p className="text-lg font-semibold text-green-600 mb-2 text-center">Price: {book.price}</p>

      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="border rounded-lg px-4 py-2" required />
        <input type="email" placeholder="Your Email" className="border rounded-lg px-4 py-2" required />
        <input type="tel" placeholder="Phone Number" className="border rounded-lg px-4 py-2" required />
        <select className="border rounded-lg px-4 py-2" required>
          <option value="">Select Payment Method</option>
          <option value="mobilemoney">Mobile Money</option>
          <option value="paypal">PayPal</option>
          <option value="card">Credit/Debit Card</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg border border-green-600 hover:bg-white hover:text-green-600 transition-colors">
          Place Order
        </button>
      </form>

      <Link href="/books" className="inline-block mt-6 text-blue-500 underline hover:text-blue-700 text-center w-full">
        ← Back to Books
      </Link>
    </main>
  );
}
