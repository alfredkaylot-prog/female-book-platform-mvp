import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/books";
import "./books.css";

export default function BooksPage() {
  return (
    <main className="books-page">
      <h2 className="books-title">Bentil&apos;s Bookshop Collection</h2>

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-image">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="img"
              />
            </div>

            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            

            {/* FORMAT BUTTONS */}
           <div className="formats">
  <div className="formats-row">
    <button className="format ebook">📘 E-Book</button>

    <Link
      href={`/login?callbackUrl=/order/${book.id}`}
      className="format hardcopy"
    >
      📦 Hardcopy
    </Link>
  </div>

  <button className="format audio full">
    🎧 Audiobook
  </button>
</div>


          </div>
        ))}
      </div>
    </main>
  );
}
