import { notFound } from "next/navigation";
import Image from "next/image";

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

export default function BookPage({
  params,
}: {
  params: { id: string };
}) {
  const bookId = Number(params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return notFound();
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-500 mb-4">by {book.author}</p>

      <Image
        src={book.cover}
        alt={book.title}
        width={600}
        height={400}
        className="rounded mb-4"
      />

      <p className="text-lg font-semibold mb-4">
        Price: {book.price}
      </p>

      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Replace this with a real book description later.
      </p>

      {/* READ BUTTON */}
      <a
        href={`/read/${book.id}`}
        className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black border border-black transition"
      >
        Read Book
      </a>
    </main>
  );
}
