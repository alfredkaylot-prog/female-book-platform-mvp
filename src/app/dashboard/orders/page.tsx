"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface OrderItem {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: string;
  orderDate: string;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('user-orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  if (orders.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Order History</h1>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
          <Link
            href="/books"
            className="inline-block px-6 py-3 rounded"
            style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return '#ff9800'; // Orange
      case 'confirmed': return '#2196f3'; // Blue
      case 'completed': return '#4caf50'; // Green
      case 'cancelled': return '#f44336'; // Red
      default: return '#9e9e9e'; // Gray
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 rounded-lg border"
            style={{ backgroundColor: 'var(--white)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold" style={{ color: 'var(--text-color)' }}>
                    {order.bookTitle}
                  </h3>
                  <span
                    className="px-2 py-1 rounded text-xs text-white"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--primary-color)' }}>
                  by {order.bookAuthor}
                </p>
                <p className="text-sm font-semibold" style={{ color: 'var(--accent-color)' }}>
                  {order.bookPrice}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
                  Ordered on {new Date(order.orderDate).toLocaleDateString()}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
                  Order ID: {order.id}
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/read/${order.id.split('-')[0]}`} // Extract book ID from order ID
                  className="px-3 py-1 rounded text-sm"
                  style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}
                >
                  Read Book
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
