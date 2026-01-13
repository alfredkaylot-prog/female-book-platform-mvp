import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function ReadPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);

  // 🚫 Not logged in → send to login
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Reading Book #{params.id}
      </h1>

      <p className="text-gray-700">
        📖 Book content will appear here.
      </p>
    </main>
  );
}
