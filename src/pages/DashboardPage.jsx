import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

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
            maxWidth: "900px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "18px",
            padding: "40px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h1>👋 Welcome, {user?.name}</h1>

          <p
            style={{
              marginTop: "10px",
              color: "#6B7280",
            }}
          >
            Welcome back to SkillPath AI.
          </p>

          <hr style={{ margin: "30px 0" }} />

          <h3>Profile Information</h3>

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Role:</strong> {user?.role}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;