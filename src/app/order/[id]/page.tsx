'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { books } from "@/lib/books";
import "./order.css";

type OrderPageProps = { params: { id: string } };

export default function OrderPage({ params }: OrderPageProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const bookId = parseInt(params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const orderData = {
      bookId: bookId.toString(),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      paymentMethod: formData.get("paymentMethod"),
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.order.message);

        // Store order in localStorage for dashboard
        const orders = JSON.parse(localStorage.getItem("user-orders") || "[]");
        orders.unshift({
          id: result.order.id,
          bookTitle: book.title,
          bookAuthor: book.author,
          bookPrice: book.price,
          orderDate: new Date().toISOString(),
          status: result.order.status,
        });
        localStorage.setItem("user-orders", JSON.stringify(orders.slice(0, 10))); // Keep last 10

        // Redirect to dashboard after 3 seconds
        setTimeout(() => {
          router.push("/dashboard/orders");
        }, 3000);
      } else {
        setSubmitError(result.error || "Failed to place order");
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="order-container">
      <h1 className="order-title">Order: {book.title}</h1>

      <div className="order-image">
        <Image src={book.cover} alt={book.title} width={200} height={300} />
      </div>

      <p className="order-price">Price: {book.price}</p>

      {submitMessage && (
        <div className="order-message success">
          ✅ {submitMessage}
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Redirecting to your orders page...
          </p>
        </div>
      )}

      {submitError && (
        <div className="order-message error">
          ❌ {submitError}
        </div>
      )}

      {!submitMessage && (
        <form className="order-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            disabled={isSubmitting}
          />

          <select name="paymentMethod" required disabled={isSubmitting}>
            <option value="">Select Payment Method</option>
            <option value="mobilemoney">Mobile Money (MTN, Vodafone, AirtelTigo)</option>
            <option value="paypal">PayPal</option>
            <option value="card">Credit/Debit Card</option>
            <option value="bank">Bank Transfer</option>
          </select>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      )}

      <Link href="/books" className="order-back">
        ← Back to Books
      </Link>
    </main>
  );
}
