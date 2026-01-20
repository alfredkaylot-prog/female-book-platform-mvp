// src/lib/books.ts

export type Chapter = {
  title: string;
  content: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  price: string;
  cover: string;
  synopsis: string;
  audio?: string;
  chapters: Chapter[];
};

export const books: Book[] = [
  {
    id: 1,
    title: "The Elegant Life",
    author: "Jane Doe",
    price: "GHS 50",
    cover: "/books/book-1.jpg",
    synopsis:
      "A guide to intentional living, confidence, and modern femininity.",
    audio: "/audio/elegant-life.mp3",
    chapters: [
      {
        title: "Introduction",
        content: "Welcome to The Elegant Life. This chapter introduces...",
      },
      {
        title: "Mindset",
        content: "Building a strong and graceful mindset starts with...",
      },
    ],
  },
  {
    id: 2,
    title: "Dreams & Ambitions",
    author: "Mary Smith",
    price: "GHS 45",
    cover: "/books/book-2.jpg",
    synopsis:
      "Learn how to transform dreams into achievable life goals.",
    chapters: [
      {
        title: "Dream Big",
        content: "Every success begins with imagination...",
      },
      {
        title: "Taking Action",
        content: "Small daily steps build momentum...",
      },
    ],
  },
];
