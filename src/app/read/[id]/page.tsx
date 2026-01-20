"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { books } from "@/lib/books";
import "./reader.css";

type Props = {
  params: { id: string };
};

export default function ReaderPage({ params }: Props) {
  const bookId = Number(params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  const [activeChapter, setActiveChapter] = useState(book.chapters[0]);

  return (
    <div className="reader-root">
      {/* COVER SECTION */}
      <section className="reader-hero">
        <img src={book.cover} alt={book.title} />
        <div>
          <h1>{book.title}</h1>
          <p className="synopsis">{book.synopsis}</p>
        </div>
      </section>

      {/* CHAPTER LIST */}
      <section className="chapter-list">
        <h3>Chapters</h3>
        <div className="chapters">
          {book.chapters.map((chapter) => (
            <button
              key={chapter.id}
              className={`chapter-btn ${
                chapter.id === activeChapter.id ? "active" : ""
              }`}
              onClick={() => setActiveChapter(chapter)}
            >
              {chapter.title}
            </button>
          ))}
        </div>
      </section>

      {/* READER CONTENT */}
      <article className="reader-content">
        <h2>{activeChapter.title}</h2>
        <pre>{activeChapter.content}</pre>
      </article>
    </div>
  );
}
