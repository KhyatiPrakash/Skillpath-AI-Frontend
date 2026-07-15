import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  getAllCareers,
  deleteCareer,
} from "../api/careerApi";

const EditCareersPage = () => {
  const [careers, setCareers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const data = await getAllCareers();
      setCareers(data);
    } catch (error) {
      console.error("Error fetching careers:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this career?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCareer(id);

      alert("Career deleted successfully!");

      fetchCareers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete career.");
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
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              marginBottom: "10px",
            }}
          >
            Edit Careers
          </h1>

          <p
            style={{
              color: "#6B7280",
              marginBottom: "30px",
            }}
          >
            Manage all careers from here.
          </p>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {careers.length === 0 ? (
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <h3>No careers found.</h3>
              </div>
            ) : (
              careers.map((career) => (
                <div
                  key={career._id}
                  style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0,0,0,.06)",
                  }}
                >
                  <h2>{career.title}</h2>

                  <p
                    style={{
                      color: "#6B7280",
                      margin: "10px 0",
                    }}
                  >
                    {career.category}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "20px",
                    }}
                  >
                    <button
                      onClick={() =>
                        navigate(`/admin/edit-career/${career._id}`)
                      }
                      style={{
                        padding: "10px 18px",
                        background: "#059669",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => handleDelete(career._id)}
                      style={{
                        padding: "10px 18px",
                        background: "#DC2626",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditCareersPage;