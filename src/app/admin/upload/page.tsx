"use client";

import { useState } from "react";
import "./upload.css";

export default function AdminUploadPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const [ebookPrice, setEbookPrice] = useState("");
  const [audioPrice, setAudioPrice] = useState("");
  const [hardcopyPrice, setHardcopyPrice] = useState("");

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  function handleCoverChange(file: File) {
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  }

  function handleAudioChange(file: File) {
    setAudioFile(file);
  }

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const newBook = {
    id: Date.now(),
    title,
    author,
    synopsis,
    coverPreview,
    audioName: audioFile?.name || null,
    formats: [
      { type: "ebook", price: ebookPrice },
      { type: "audio", price: audioPrice },
      { type: "hardcopy", price: hardcopyPrice },
    ],
  };

  const existing = JSON.parse(
    localStorage.getItem("adminBooks") || "[]"
  );

  const updated = [...existing, newBook];
  localStorage.setItem("adminBooks", JSON.stringify(updated));

  alert("✅ Book saved successfully!");

  // Reset form
  setTitle("");
  setAuthor("");
  setSynopsis("");
  setEbookPrice("");
  setAudioPrice("");
  setHardcopyPrice("");
  setCoverFile(null);
  setCoverPreview(null);
  setAudioFile(null);
}


  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">📚 Upload New Book</h1>

        <form onSubmit={handleSubmit} className="admin-form">

          {/* COVER UPLOAD */}
          <div className="upload-box">
            <label className="upload-label">Cover Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleCoverChange(e.target.files[0]);
                }
              }}
            />

            {coverPreview && (
              <img
                src={coverPreview}
                alt="Preview"
                className="preview-image"
              />
            )}
          </div>

          {/* AUDIO UPLOAD */}
          <div className="upload-box">
            <label className="upload-label">Audiobook File</label>

            <input
              type="file"
              accept="audio/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleAudioChange(e.target.files[0]);
                }
              }}
            />

            {audioFile && (
              <p className="file-name">🎧 {audioFile.name}</p>
            )}
          </div>

          {/* TEXT INPUTS */}
          <div className="input-group">
            <label>Book Title</label>
            <input
              className="admin-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Author</label>
            <input
              className="admin-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Synopsis</label>
            <textarea
              className="admin-textarea"
              rows={4}
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              required
            />
          </div>

          {/* PRICING */}
          <div className="price-panel">
            <h3 className="price-title">💰 Pricing</h3>

            <div className="price-grid">
              <input
                className="admin-input"
                placeholder="Ebook Price"
                value={ebookPrice}
                onChange={(e) => setEbookPrice(e.target.value)}
              />

              <input
                className="admin-input"
                placeholder="Audio Price"
                value={audioPrice}
                onChange={(e) => setAudioPrice(e.target.value)}
              />

              <input
                className="admin-input"
                placeholder="Hardcopy Price"
                value={hardcopyPrice}
                onChange={(e) => setHardcopyPrice(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            🚀 Upload Book
          </button>

        </form>
      </div>
    </div>
  );
}
