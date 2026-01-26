"use client";

import { useEffect, useState } from "react";
import "./books-admin.css";

/* ======================
   TYPES
====================== */

type Format = {
  type: "ebook" | "audio" | "hardcopy";
  price: string;
};

type AdminBook = {
  id: number;
  title: string;
  author: string;
  synopsis: string;
  coverPreview?: string;
  audioName?: string | null;
  formats: Format[];
};

/* ======================
   COMPONENT
====================== */

export default function AdminBooksPage() {
  const [books, setBooks] = useState<AdminBook[]>([]);
  const [editing, setEditing] = useState<AdminBook | null>(null);

  /* ======================
     LOAD DATA
  ====================== */

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    const stored = JSON.parse(
      localStorage.getItem("adminBooks") || "[]"
    );
    setBooks(stored);
  }

  function saveBooks(updated: AdminBook[]) {
    localStorage.setItem("adminBooks", JSON.stringify(updated));
    setBooks(updated);
  }

  /* ======================
     DELETE
  ====================== */

  function deleteBook(id: number) {
    if (!confirm("Delete this book permanently?")) return;

    const updated = books.filter((b) => b.id !== id);
    saveBooks(updated);
  }

  /* ======================
     EDIT
  ====================== */

  function startEdit(book: AdminBook) {
    setEditing({ ...book });
  }

  function saveEdit() {
    if (!editing) return;

    const updated = books.map((b) =>
      b.id === editing.id ? editing : b
    );

    saveBooks(updated);
    setEditing(null);
  }

  /* ======================
     🚀 PUBLISH TO STOREFRONT
  ====================== */

  function publishBook(book: AdminBook) {
    const published = JSON.parse(
      localStorage.getItem("storeBooks") || "[]"
    );

    const exists = published.find(
      (b: AdminBook) => b.id === book.id
    );

    if (exists) {
      alert("⚠️ This book is already published.");
      return;
    }

    const updated = [...published, book];
    localStorage.setItem("storeBooks", JSON.stringify(updated));

    alert("✅ Book published successfully!");
  }

  /* ======================
     RENDER
  ====================== */

  return (
    <div className="admin-books-page">
      <h1>📚 Uploaded Books</h1>

      {books.length === 0 && (
        <p className="empty">No books uploaded yet.</p>
      )}

      {books.length > 0 && (
        <table className="books-table">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Formats</th>
              <th>Audio</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                {/* COVER */}
                <td>
                  {book.coverPreview && (
                    <img
                      src={book.coverPreview}
                      className="cover-thumb"
                      alt={book.title}
                    />
                  )}
                </td>

                {/* TITLE */}
                <td>{book.title}</td>

                {/* AUTHOR */}
                <td>{book.author}</td>

                {/* FORMATS */}
                <td>
                  {book.formats.map((f) => (
                    <div key={f.type}>
                      {f.type} — {f.price || "N/A"}
                    </div>
                  ))}
                </td>

                {/* AUDIO */}
                <td>{book.audioName ? "🎧 Yes" : "—"}</td>

                {/* ACTIONS */}
                <td className="actions">
                  <button
                    className="btn publish"
                    onClick={() => publishBook(book)}
                  >
                    🚀 Publish
                  </button>

                  <button
                    className="btn edit"
                    onClick={() => startEdit(book)}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="btn delete"
                    onClick={() => deleteBook(book.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ======================
         EDIT MODAL
      ====================== */}

      {editing && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Edit Book</h2>

            <input
              value={editing.title}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  title: e.target.value,
                })
              }
              placeholder="Title"
            />

            <input
              value={editing.author}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  author: e.target.value,
                })
              }
              placeholder="Author"
            />

            <textarea
              value={editing.synopsis}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  synopsis: e.target.value,
                })
              }
              placeholder="Synopsis"
              rows={3}
            />

            <div className="modal-formats">
              {editing.formats.map((f, index) => (
                <input
                  key={index}
                  value={f.price}
                  placeholder={`${f.type} price`}
                  onChange={(e) => {
                    const updated = [...editing.formats];
                    updated[index] = {
                      ...updated[index],
                      price: e.target.value,
                    };
                    setEditing({
                      ...editing,
                      formats: updated,
                    });
                  }}
                />
              ))}
            </div>

            <div className="modal-actions">
              <button className="btn save" onClick={saveEdit}>
                💾 Save
              </button>

              <button
                className="btn cancel"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
