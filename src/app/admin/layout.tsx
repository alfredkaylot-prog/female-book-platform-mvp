import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  if (session.user?.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-[#2f4f3f] text-white p-6 space-y-6">
        <h2 className="text-xl font-bold">🛠 Admin Panel</h2>

        <nav className="space-y-3">
          <a href="/admin">📊 Dashboard</a>
          <a href="/admin/books">📚 Books</a>
          <a href="/admin/upload">⬆ Upload</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
