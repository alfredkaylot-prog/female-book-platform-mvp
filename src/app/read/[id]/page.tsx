"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { books } from "@/lib/books";
import "./reader.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default function ReaderPage({ params }: Props) {
  const { id } = use(params);
  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  // ✅ Track chapter using index instead of chapter.id
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = book.chapters[activeIndex];

  return (
    <div className="reader-root">
      {/* COVER */}
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
          {book.chapters.map((chapter, index) => (
            <button
              key={index}
              className={`chapter-btn ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {chapter.title}
            </button>
          ))}
        </div>
      </section>

      {/* SCROLLABLE READER */}
      <article className="reader-content">
        <h2>{activeChapter.title}</h2>
        <pre>{activeChapter.content}</pre>
      </article>
    </div>
  );
}
