import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Account Info</h1>
      <p><strong>Name:</strong> {session?.user?.name}</p>
      <p><strong>Email:</strong> {session?.user?.email}</p>
    </div>
  );
}
