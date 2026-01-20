

import "./order.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { books } from "@/lib/books";
import PhoneInput from "../../../components/PhoneInput";

type OrderPageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderPage({ params }: OrderPageProps) {
  const { id } = await params;
  const bookId = parseInt(id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  return (
    <main className="order-container">
      <h1 className="order-title">
        Order: {book.title}
      </h1>

      <div className="order-image">
        <Image
          src={book.cover}
          alt={book.title}
          width={220}
          height={320}
        />
      </div>

      <p className="order-price">
        Price: {book.price}
      </p>

      <form className="order-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
         <PhoneInput />
        




        <select required>
          <option value="">Select Payment Method</option>
          <option value="mobilemoney">Mobile Money</option>
          <option value="paypal">PayPal</option>
          <option value="card">Credit/Debit Card</option>
        </select>

        <button className="order-button" type="submit">
          Place Order
        </button>
      </form>

      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
    </main>
  );
}
