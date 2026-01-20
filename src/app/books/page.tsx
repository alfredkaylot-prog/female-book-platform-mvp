import Image from "next/image";
import { books } from "@/lib/books";
import "./books.css";




export default function BooksPage() {
  return (
    <main className="books-page">
      <h2 className="books-title">
        Our Female-Oriented Book Collection
      </h2>

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
            <p className="price">{book.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


