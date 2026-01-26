import { books } from "@/lib/books";
import "./admin.css";

export default function AdminDashboard() {
  const totalBooks = books.length;
  const audioBooks = books.filter((b) =>
  b.formats.some((f) => f.type === "audio")
).length;


  return (
    <div className="admin-dashboard">
      <h1>📊 Admin Dashboard</h1>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p>{totalBooks}</p>
        </div>

        <div className="stat-card">
          <h3>Audiobooks</h3>
          <p>{audioBooks}</p>
        </div>

        <div className="stat-card">
          <h3>Formats</h3>
          <p>Ebook • Hardcopy • Audio</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions">
        <a href="/admin/books" className="action-btn">
          📚 Manage Books
        </a>

        <a href="/admin/upload" className="action-btn">
          ⬆ Upload New Book
        </a>
      </div>

      {/* RECENT BOOKS */}
      <section className="recent-books">
        <h2>Recently Added</h2>

        <div className="recent-grid">
          {books.slice(0, 4).map((book) => (
            <div key={book.id} className="recent-card">
              <img src={book.cover} alt={book.title} />
              <div>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
