# Female Book Platform MVP

A modern, elegant book platform designed specifically for women, featuring curated books by female authors with a seamless reading and purchasing experience.

## ✨ Features

- **📚 Curated Book Collection**: Hand-picked books by and for women
- **🔐 Secure Authentication**: Google OAuth integration
- **📖 Immersive Reading Experience**: Progress tracking, customizable fonts, and smooth navigation
- **🛒 Complete Order Management**: Full ordering system with email confirmations
- **❤️ Favorites System**: Save and manage favorite books
- **📊 Personal Dashboard**: Reading history, order tracking, and account management
- **🔍 Smart Search**: Find books by title or author instantly
- **🔔 Toast Notifications**: Real-time feedback for user actions
- **📧 Email Notifications**: Automated order confirmations and updates
- **🎨 Beautiful Design**: Rose & cream theme with responsive layout and smooth animations
- **📱 Mobile-First**: Fully responsive design for all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alfredkaylot-prog/female-book-platform-mvp.git
   cd female-book-platform-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```env
   # Google OAuth (Required)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # NextAuth Secret (Required - generate a random string)
   NEXTAUTH_SECRET=your_random_secret_here

   # Email Configuration (Optional - for order confirmations)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ADMIN_EMAIL=admin@yourdomain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📋 Configuration

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### Email Configuration (Optional)
For order confirmations, configure SMTP settings:
- **Gmail**: Use App Passwords (not your regular password)
- **Other providers**: Update SMTP_HOST, SMTP_PORT accordingly

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth authentication
│   │   └── orders/        # Order processing with email
│   ├── books/             # Book catalog with search
│   ├── dashboard/         # User dashboard
│   │   ├── account/       # Account information
│   │   ├── favorites/     # Favorite books
│   │   ├── history/       # Reading history
│   │   └── orders/        # Order history
│   ├── login/             # Authentication page
│   ├── order/             # Order forms
│   ├── read/              # Reading interface
│   └── globals.css        # Global styles with theme variables
├── components/            # Reusable components
│   ├── FavoritesContext.tsx  # Favorites state management
│   ├── Footer.tsx           # Site footer
│   ├── LoadingSpinner.tsx   # Loading components
│   └── Toast.tsx           # Notification system
└── lib/                   # Utilities and data
    ├── auth.ts           # NextAuth configuration
    └── books.ts          # Book data
```

## 🎨 Design System

### Color Palette
- **Primary**: Soft Rose (#E91E63)
- **Secondary**: Deep Rose (#C2185B)
- **Background**: Cream (#FFF8E1)
- **Text**: Charcoal Gray (#424242)
- **Accent**: Gold (#FFD700)

### Typography
- **Font Family**: System UI fonts
- **Headings**: Bold, hierarchical sizing
- **Body**: 16px base, optimized for reading

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Adding New Books

When you have actual book content:

1. **Update book data** in `src/lib/books.ts`:
   ```typescript
   export const books = [
     {
       id: 5,
       title: "Your Book Title",
       author: "Author Name",
       price: "GHS XX",
       cover: "/books/book-5.jpg"
     }
   ];
   ```

2. **Add book content** in `src/app/read/[id]/page.tsx`:
   ```typescript
   const sampleContent = {
     5: {
       title: "Your Book Title",
       author: "Author Name",
       content: `# Your book content here...`,
       totalPages: XX
     }
   };
   ```

3. **Add cover image** to `public/books/`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app is compatible with any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions:
- Email: support@femalebookplatform.com
- GitHub Issues: [Create an issue](https://github.com/alfredkaylot-prog/female-book-platform-mvp/issues)

---

**Built with ❤️ for women, by women, celebrating women's voices worldwide.**
