import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          background: "#F8FAFC",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background: "#fff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h1>🛠️ Admin Dashboard</h1>

          <p
            style={{
              color: "#6B7280",
              marginTop: "10px",
            }}
          >
            Manage careers for SkillPath AI.
          </p>

          <hr style={{ margin: "30px 0" }} />

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <button
  onClick={() => navigate("/admin/add-career")}
  style={{
    padding: "15px",
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  ➕ Add Career
</button>

            <button
  onClick={() => navigate("/admin/edit-careers")}
  style={{
    padding: "15px",
    background: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  ✏️ Edit Careers
</button>

            <button
              style={{
                padding: "15px",
                background: "#DC2626",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              🗑️ Delete Careers
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;