import Link from "next/link";
import Image from "next/image";
import "./home.css";

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
    <main className="page">
      <section className="hero">
        <h1>Discover Books Written for Women</h1>
        <p>Read, learn, and grow with inspiring female voices.</p>
      </section>

      <section className="grid">
        {books.map((book) => (
          <div key={book.id} className="card">
            <div className="cover">
              <Image src={book.cover} alt={book.title} fill />
            </div>

            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="price">{book.price}</p>

            <div className="actions">
              <Link href={`/login?callbackUrl=/read/${book.id}`} className="btn primary">
                Read
              </Link>

              <Link href={`/login?callbackUrl=/order/${book.id}`} className="btn outline">
                Order
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
