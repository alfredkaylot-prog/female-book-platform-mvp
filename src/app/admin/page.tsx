export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">📚 Total Books</h3>
          <p className="text-2xl mt-2">2</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">🎧 Audiobooks</h3>
          <p className="text-2xl mt-2">1</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">🧾 Orders</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

      </div>
    </div>
  );
}
