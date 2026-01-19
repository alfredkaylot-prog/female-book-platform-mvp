"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { books } from "@/lib/books";
import "./home.css";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main className="page">
      <section className="hero">
        <h1>Discover Books Written for Women</h1>
        <p>Read, learn, and grow with inspiring female voices.</p>
        <div className="hero-actions">
          <Link href="/books" className="btn primary">
            Browse All Books
          </Link>
          {!session && (
            <Link href="/login" className="btn outline">
              Sign In to Read
            </Link>
          )}
        </div>
      </section>

      <section className="grid">
        {books.slice(0, 4).map((book) => (
          <div key={book.id} className="card">
            <div className="cover">
              <Image src={book.cover} alt={book.title} fill />
            </div>

            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="price">{book.price}</p>

            <div className="actions">
              <Link
                href={session ? `/read/${book.id}` : `/login?callbackUrl=/read/${book.id}`}
                className="btn primary"
              >
                {session ? "Read Now" : "Sign In to Read"}
              </Link>

              <Link
                href={session ? `/order/${book.id}` : `/login?callbackUrl=/order/${book.id}`}
                className="btn outline"
              >
                Order
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="featured-content">
          <h2>Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Curated Collection</h3>
              <p>Hand-picked books by and for women, celebrating diverse voices and experiences.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💝</div>
              <h3>Empowering Stories</h3>
              <p>Inspiring narratives that motivate, educate, and transform your perspective.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌟</div>
              <h3>Quality Experience</h3>
              <p>Seamless reading experience with progress tracking and personalized recommendations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
