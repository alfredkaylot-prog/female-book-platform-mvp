import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import "./dashboard-page.css";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <section className="dashboard-page">
      <h1 className="dashboard-title">
        Welcome to Your Dashboard
      </h1>

      <p className="dashboard-greeting">
        Hello, {session.user?.name}!
      </p>
    </section>
  );
}
