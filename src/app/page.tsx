import Link from "next/link";
import Image from "next/image";

const books = [
  { id: 1, title: "The Elegant Life", author: "Jane Doe", price: "GHS 50", cover: "/books/book-1.jpg" },
  { id: 2, title: "Empowered Women", author: "Mary Smith", price: "GHS 60", cover: "/books/book-2.jpg" },
  { id: 3, title: "She Leads", author: "Aisha Brown", price: "GHS 70", cover: "/books/book-3.jpg" },
  { id: 4, title: "Inspiring Stories", author: "Linda Kofi", price: "GHS 55", cover: "/books/book-4.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="text-center my-12">
        <h2 className="text-4xl font-bold mb-3">Discover Books Written for Women</h2>
        <p className="text-gray-600 text-lg">
          Read, learn, and grow with inspiring female voices.
        </p>
      </section>
      <div className="bg-black text-white p-4 rounded-xl">
  Tailwind is working 🎉
</div>


      {/* BOOK GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition flex flex-col">
            <div className="relative w-full h-56 mb-3">
              <Image src={book.cover} alt={book.title} fill className="object-cover rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold text-center">{book.title}</h3>
            <p className="text-gray-500 text-center text-sm">{book.author}</p>
            <p className="font-bold text-center mt-2">{book.price}</p>
            <Link
              href={`/read/${book.id}`}
              className="mt-auto text-center bg-black text-white py-3 rounded-lg
                         hover:bg-white hover:text-black border border-black transition"
            >
              Read Book
            </Link>
          </div>
          
        ))}
        
      </section>
    </>
  );
}
