import Image from "next/image";


const books = [
  {
    id: 1,
    title: "The Elegant Life",
    author: "Jane Doe",
    price: "GHS 50",
    cover: "/books/book-1.jpg",
  },
  {
    id: 2,
    title: "Dreams & Ambitions",
    author: "Mary Smith",
    price: "GHS 45",
    cover: "/books/book-2.jpg",
  },
  {
    id: 3,
    title: "Graceful Mind",
    author: "Linda White",
    price: "GHS 60",
    cover: "/books/book-3.jpg",
  },
  {
    id: 4,
    title: "Soft Power",
    author: "Anne Brown",
    price: "GHS 55",
    cover: "/books/book-4.jpg",
  },
];


export default function BooksPage() {
  return (
  <main className="p-6">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Our Female-Oriented Book Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            <p className="text-pink-500 font-bold">{book.price}</p>
          </div>
        ))}
      </div>
      </main>
);

}

