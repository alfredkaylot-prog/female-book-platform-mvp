'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { books } from "@/lib/books";
import "./order.css";

type OrderPageProps = { params: { id: string } };

export default function OrderPage({ params }: OrderPageProps) {
  const bookId = parseInt(params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();
'use client';


  return (
    <main className="order-container">
      <h1 className="order-title">Order: {book.title}</h1>

      <div className="order-image">
        <Image src={book.cover} alt={book.title} width={200} height={300} />
      </div>

      <p className="order-price">Price: {book.price}</p>

      <form className="order-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Phone Number" required />

        <select required>
          <option value="">Select Payment Method</option>
          <option value="mobilemoney">Mobile Money</option>
          <option value="paypal">PayPal</option>
          <option value="card">Credit/Debit Card</option>
        </select>

        <button type="submit">Place Order</button>
      </form>

      <Link href="/books" className="order-back">
        ← Back to Books
      </Link>
    </main>
  );
}
