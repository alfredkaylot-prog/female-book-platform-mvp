import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Get user stats from localStorage (in a real app, this would come from a database)
  const getUserStats = () => {
    if (typeof window === 'undefined') return { booksRead: 0, ordersPlaced: 0 };

    const history = JSON.parse(localStorage.getItem('reading-history') || '[]');
    const orders = JSON.parse(localStorage.getItem('user-orders') || '[]');

    return {
      booksRead: history.length,
      ordersPlaced: orders.length,
    };
  };

  const stats = getUserStats();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Information */}
        <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--border-color)' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
            Profile Details
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                Name
              </label>
              <p className="text-lg" style={{ color: 'var(--text-color)' }}>
                {session.user?.name || 'Not provided'}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                Email
              </label>
              <p className="text-lg" style={{ color: 'var(--text-color)' }}>
                {session.user?.email || 'Not provided'}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                Account Type
              </label>
              <p className="text-lg" style={{ color: 'var(--text-color)' }}>
                Google Account
              </p>
            </div>
          </div>
        </div>

        {/* Reading Statistics */}
        <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--border-color)' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
            Reading Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 rounded" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="text-2xl font-bold" style={{ color: 'var(--primary-color)' }}>
                {stats.booksRead}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-color)' }}>
                Books Read
              </div>
            </div>
            <div className="text-center p-4 rounded" style={{ backgroundColor: 'var(--light-gray)' }}>
              <div className="text-2xl font-bold" style={{ color: 'var(--primary-color)' }}>
                {stats.ordersPlaced}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-color)' }}>
                Orders Placed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="mt-8 p-6 rounded-lg border" style={{ backgroundColor: 'var(--white)', borderColor: 'var(--border-color)' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
          Account Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/books"
            className="block text-center p-4 rounded-lg border-2 border-dashed transition-colors hover:border-solid"
            style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
          >
            <div className="text-2xl mb-2">📚</div>
            <div className="font-medium">Browse Books</div>
            <div className="text-sm opacity-75">Discover new titles</div>
          </a>
          <a
            href="/dashboard/history"
            className="block text-center p-4 rounded-lg border-2 border-dashed transition-colors hover:border-solid"
            style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
          >
            <div className="text-2xl mb-2">📖</div>
            <div className="font-medium">Reading History</div>
            <div className="text-sm opacity-75">Continue where you left off</div>
          </a>
          <a
            href="/dashboard/orders"
            className="block text-center p-4 rounded-lg border-2 border-dashed transition-colors hover:border-solid"
            style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
          >
            <div className="text-2xl mb-2">🛒</div>
            <div className="font-medium">Order History</div>
            <div className="text-sm opacity-75">Track your purchases</div>
          </a>
        </div>
      </div>
    </div>
  );
}
