import { notFound } from "next/navigation";
import React from "react";

// Same Book type as homepage
type Book = {
  id: number;
  title: string;
  author: string;
  price: string;
  cover: string;
};

// Sample books data (same as homepage)
const books: Book[] = [
  { id: 1, title: "The Elegant Life", author: "Jane Doe", price: "GHS 50", cover: "/books/book-1.jpg" },
  { id: 2, title: "Empowered Women", author: "Mary Smith", price: "GHS 60", cover: "/books/book-2.jpg" },
  { id: 3, title: "She Leads", author: "Aisha Brown", price: "GHS 70", cover: "/books/book-3.jpg" },
  { id: 4, title: "Inspiring Stories", author: "Linda Kofi", price: "GHS 55", cover: "/books/book-4.jpg" },
];

// Dynamic page receives params from the URL
type BookPageProps = {
  params: { id: string };
};

export default function BookPage({ params }: BookPageProps) {
  const bookId = parseInt(params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return notFound(); // Next.js will show a 404 page
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-500 mb-2">by {book.author}</p>
      <img src={book.cover} alt={book.title} className="w-full h-80 object-cover rounded mb-4" />
      <p className="text-lg font-semibold">Price: {book.price}</p>
      <p className="mt-4 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros in justo facilisis fermentum. 
        {/* Replace this with a real book description later */}
      </p>
    </main>
  );
}
