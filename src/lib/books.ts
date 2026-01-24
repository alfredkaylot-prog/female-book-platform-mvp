export type Chapter = {
  title: string;
  content: string;
};

export type BookFormat = {
  type: "ebook" | "audio" | "hardcopy";
  price: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  synopsis: string;
  formats: BookFormat[];
  chapters: Chapter[];
};

export const books: Book[] = [
  {
    id: 1,
    title: "The Elegant Life",
    author: "Jane Doe",
    cover: "/books/book-1.jpg",
    synopsis: "A guide to intentional living and confidence.",
    formats: [
      { type: "ebook", price: "GHS 30" },
      { type: "audio", price: "GHS 40" },
      { type: "hardcopy", price: "GHS 60" },
    ],
    chapters: [
      {
        title: "Introduction",
        content: "Welcome to The Elegant Life...",
      },
    ],
  },
];
