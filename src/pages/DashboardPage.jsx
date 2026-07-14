import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { useAuth } from "../context/AuthContext";
import {
  getSavedCareers,
  removeSavedCareer,
} from "../api/authApi";

const DashboardPage = () => {
  const { user } = useAuth();

  const [savedCareers, setSavedCareers] = useState([]);

  useEffect(() => {
    fetchSavedCareers();
  }, []);

  const fetchSavedCareers = async () => {
    try {
      const data = await getSavedCareers();
      setSavedCareers(data);
    } catch (error) {
      console.error("Error loading saved careers:", error);
    }
  };

  const handleRemoveCareer = async (careerId) => {
    try {
      await removeSavedCareer(careerId);

      setSavedCareers((prev) =>
        prev.filter((career) => career._id !== careerId)
      );

      alert("Career removed successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to remove career.");
    }
  };

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
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          {/* Welcome Card */}

          <div
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              marginBottom: "30px",
            }}
          >
            <h1>👋 Welcome, {user?.name}</h1>

            <p
              style={{
                color: "#6B7280",
                marginTop: "10px",
              }}
            >
              Welcome back to SkillPath AI.
            </p>

            <hr style={{ margin: "25px 0" }} />

            <h2>Profile Information</h2>

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

          {/* Saved Careers */}

          <div
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2 style={{ marginBottom: "25px" }}>
              ⭐ Saved Careers
            </h2>

            {savedCareers.length === 0 ? (
              <div>
                <p
                  style={{
                    color: "#6B7280",
                    marginBottom: "20px",
                  }}
                >
                  You haven't saved any careers yet.
                </p>

                <Link
                  to="/careers"
                  style={{
                    background: "#4F46E5",
                    color: "#fff",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Browse Careers
                </Link>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                }}
              >
                {savedCareers.map((career) => (
                  <div
                    key={career._id}
                    style={{
                      border: "1px solid #E5E7EB",
                      borderRadius: "15px",
                      padding: "22px",
                    }}
                  >
                    <h3>{career.title}</h3>

                    <p
                      style={{
                        color: "#6B7280",
                        margin: "12px 0",
                        lineHeight: "1.6",
                      }}
                    >
                      {career.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginTop: "15px",
                      }}
                    >
                      <span
                        style={{
                          background: "#EEF2FF",
                          color: "#4338CA",
                          padding: "8px 14px",
                          borderRadius: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {career.category}
                      </span>

                      <span
                        style={{
                          background: "#ECFDF5",
                          color: "#047857",
                          padding: "8px 14px",
                          borderRadius: "20px",
                          fontWeight: "600",
                        }}
                      >
                        💰 {career.averageSalary}
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={`/careers/${career._id}`}
                        style={{
                          color: "#4F46E5",
                          textDecoration: "none",
                          fontWeight: "600",
                        }}
                      >
                        View Details →
                      </Link>

                      <button
                        onClick={() =>
                          handleRemoveCareer(career._id)
                        }
                        style={{
                          background: "#DC2626",
                          color: "#fff",
                          border: "none",
                          padding: "10px 16px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;