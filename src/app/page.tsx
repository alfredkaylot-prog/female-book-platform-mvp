// app/page.tsx
import React from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  price: string;
  cover: string;
};

const books: Book[] = [
  { id: 1, title: "The Elegant Life", author: "Jane Doe", price: "GHS 50", cover: "/books/book-1.jpg" },
  { id: 2, title: "Empowered Women", author: "Mary Smith", price: "GHS 60", cover: "/books/book-2.jpg" },
  { id: 3, title: "She Leads", author: "Aisha Brown", price: "GHS 70", cover: "/books/book-3.jpg" },
  { id: 4, title: "Inspiring Stories", author: "Linda Kofi", price: "GHS 55", cover: "/books/book-4.jpg" },
];

export default function HomePage() {
  return (
    <main className="p-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Female Book Platform</h1>
        <p className="text-gray-600 text-lg">
          Discover inspiring books written for women.
        </p>
      </section>

      {/* Books Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{book.title}</h2>
            <p className="text-gray-500">{book.author}</p>
            <p className="mt-2 font-bold">{book.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
