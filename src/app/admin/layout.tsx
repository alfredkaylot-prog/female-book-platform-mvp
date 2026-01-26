import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import "./admin.css";

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
    <div className="admin-shell">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>🛠 Admin Panel</h2>
          <span>Bentil&apos;s Bookshop</span>
        </div>

        <nav className="admin-nav">
          <Link href="/admin" className="admin-link">
            📊 Dashboard
          </Link>

          <Link href="/admin/books" className="admin-link">
            📚 Books
          </Link>

          <Link href="/admin/upload" className="admin-link">
            ⬆ Upload
          </Link>
        </nav>

        <div className="admin-footer">
          © {new Date().getFullYear()} Bentil&apos;s Bookshop
        </div>
      </aside>

      {/* CONTENT */}
      <main className="admin-main">
        <div className="admin-card">
          {children}
        </div>
      </main>

    </div>
  );
}
