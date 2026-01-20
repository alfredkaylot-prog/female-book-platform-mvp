const orders = [
  { id: 1, book: "Elegant Life", date: "2026-01-10", status: "Delivered" },
  { id: 2, book: "She Leads", date: "2026-01-15", status: "Processing" },
];

export default function OrdersPage() {
  return (
    <>
      <div className="breadcrumb">Dashboard / Orders</div>
      <h1 className="dashboard-title">Order History</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.book}</td>
              <td>{o.date}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
