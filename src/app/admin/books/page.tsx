import { books } from "@/lib/books";

export default function AdminBooksPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Manage Books</h1>

      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Formats</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-t">
              <td className="p-3">{book.title}</td>

              <td className="p-3 text-center">
                {book.formats.map((f) => f.type).join(", ")}
              </td>

              <td className="p-3 text-center space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
