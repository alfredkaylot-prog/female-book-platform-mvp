import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
              Female Book Platform
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
              Empowering women through stories. Discover, read, and grow with inspiring female voices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:opacity-75">📘</a>
              <a href="#" className="text-2xl hover:opacity-75">📖</a>
              <a href="#" className="text-2xl hover:opacity-75">💝</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-color)' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/books" className="hover:underline" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:underline" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-color)' }}>Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@femalebookplatform.com" className="hover:underline" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-color)', opacity: 0.6 }}>
          <p>&copy; 2026 Female Book Platform. All rights reserved.</p>
          <p className="mt-2">Built with ❤️ for women, by women.</p>
        </div>
      </div>
    </footer>
  );
}