const history = [
  { id: 1, title: "Empowered Women", progress: "80%" },
  { id: 2, title: "Inspiring Stories", progress: "35%" },
];

export default function HistoryPage() {
  return (
    <>
      <div className="breadcrumb">Dashboard / Reading History</div>
      <h1 className="dashboard-title">Reading History</h1>

      <div className="history-list">
        {history.map((item) => (
          <div className="history-card" key={item.id}>
            <strong>{item.title}</strong>
            <span>{item.progress} completed</span>
          </div>
        ))}
      </div>
    </>
  );
}
