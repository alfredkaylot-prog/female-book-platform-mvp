import Link from "next/link";
import Image from "next/image";
import { books } from "@/lib/books";
import "./home.css";

export default function HomePage() {
  const featured = books.slice(0, 4);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Bentil’s Bookshop</h1>
        <p>
          Discover inspiring books and audiobooks created for growth,
          leadership, and personal excellence.
        </p>

        <div className="hero-actions">
          <Link href="/books" className="btn primary">
            📚 Browse Library
          </Link>

          <Link href="/dashboard" className="btn outline">
            👤 My Dashboard
          </Link>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="featured">
        <h2>✨ Featured Books</h2>

        <div className="featured-grid">
          {featured.map((book) => (
            <div key={book.id} className="featured-card">
              <div className="featured-image">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="img"
                />
              </div>

              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
            </div>
          ))}
        </div>

        <div className="center">
          <Link href="/books" className="btn secondary">
            View Full Collection →
          </Link>
        </div>
      </section>

    </main>
  );
}
