export default function AccountPage() {
  return (
    <>
      <div className="breadcrumb">Dashboard / Account</div>
      <h1 className="dashboard-title">My Account</h1>

      <div className="account-card">
        <div className="account-row">
          <span>Name</span>
          <strong>Jane Doe</strong>
        </div>

        <div className="account-row">
          <span>Email</span>
          <strong>jane@example.com</strong>
        </div>

        <div className="account-row">
          <span>Membership</span>
          <strong>Premium</strong>
        </div>

        <button className="primary-btn">Edit Profile</button>
      </div>
    </>
  );
}
