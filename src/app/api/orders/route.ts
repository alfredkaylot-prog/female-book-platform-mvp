import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { books } from "@/lib/books";

export async function POST(request: NextRequest) {
  try {
    const { bookId, name, email, phone, paymentMethod } = await request.json();

    // Validate input
    if (!bookId || !name || !email || !phone || !paymentMethod) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Find the book
    const book = books.find((b) => b.id === parseInt(bookId));
    if (!book) {
      return NextResponse.json(
        { error: "Book not found" },
        { status: 404 }
      );
    }

    // Create order object
    const order = {
      id: Date.now().toString(),
      bookId: parseInt(bookId),
      bookTitle: book.title,
      bookAuthor: book.author,
      bookPrice: book.price,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      paymentMethod,
      orderDate: new Date().toISOString(),
      status: "pending"
    };

    // Store order (in a real app, this would go to a database)
    // For now, we'll just log it and store in memory/localStorage simulation
    console.log("New Order:", order);

    // Send confirmation email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: `Order Confirmation - ${book.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFF8E1;">
            <h1 style="color: #E91E63; text-align: center;">Order Confirmation</h1>

            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h2 style="color: #424242;">Thank you for your order, ${name}!</h2>

              <div style="margin: 20px 0; padding: 15px; background: #FAFAFA; border-radius: 5px;">
                <h3 style="color: #E91E63; margin: 0 0 10px 0;">Order Details:</h3>
                <p><strong>Book:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Price:</strong> ${book.price}</p>
                <p><strong>Payment Method:</strong> ${paymentMethod}</p>
                <p><strong>Order ID:</strong> ${order.id}</p>
              </div>

              <div style="margin: 20px 0; padding: 15px; background: #FFF8E1; border-radius: 5px; border-left: 4px solid #FFD700;">
                <h4 style="color: #E91E63; margin: 0 0 10px 0;">Next Steps:</h4>
                <p>1. Our team will contact you within 24 hours to confirm payment details.</p>
                <p>2. Once payment is confirmed, you'll receive your book access information.</p>
                <p>3. For any questions, contact us at support@femalebookplatform.com</p>
              </div>

              <p style="color: #424242; font-style: italic;">
                We're excited to share this inspiring story with you!
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; color: #666;">
              <p>📚 Female Book Platform - Empowering Women Through Stories</p>
            </div>
          </div>
        `,
      };

      // Only send email if SMTP is configured
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("Confirmation email sent to:", email);
      } else {
        console.log("SMTP not configured - skipping email send");
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the order if email fails
    }

    // Send admin notification (optional)
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ADMIN_EMAIL) {
        const adminTransporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await adminTransporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.ADMIN_EMAIL,
          subject: `New Order - ${book.title}`,
          html: `
            <h2>New Order Received</h2>
            <p><strong>Customer:</strong> ${name} (${email})</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Book:</strong> ${book.title} by ${book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Payment:</strong> ${paymentMethod}</p>
            <p><strong>Order ID:</strong> ${order.id}</p>
          `,
        });
      }
    } catch (adminEmailError) {
      console.error("Admin email failed:", adminEmailError);
    }

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        status: order.status,
        message: "Order placed successfully! Check your email for confirmation."
      }
    });

  } catch (error) {
    console.error("Order processing error:", error);
    return NextResponse.json(
      { error: "Failed to process order" },
      { status: 500 }
    );
  }
}