import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { getCareerById } from "../api/careerApi";
import { saveCareer } from "../api/authApi";

const CareerDetailsPage = () => {
  const { id } = useParams();

  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const data = await getCareerById(id);
        setCareer(data);
      } catch (error) {
        console.error("Error fetching career:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareer();
  }, [id]);

  const handleSaveCareer = async () => {
    try {
      await saveCareer(career._id);
      alert("Career saved successfully ⭐");
    } catch (error) {
      console.error(error);
      alert("Please login first.");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div
          className="container"
          style={{
            padding: "60px 0",
            minHeight: "70vh",
          }}
        >
          <h2>Loading...</h2>
        </div>

        <Footer />
      </>
    );
  }

  if (!career) {
    return (
      <>
        <Navbar />

        <div
          className="container"
          style={{
            padding: "60px 0",
            minHeight: "70vh",
          }}
        >
          <h2>Career not found.</h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{
          padding: "60px 0",
        }}
      >
        {/* Back Button */}

        <Link
          to="/careers"
          style={{
            display: "inline-block",
            marginBottom: "25px",
            color: "#4F46E5",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          ← Back to Careers
        </Link>

        {/* Header */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            marginBottom: "35px",
          }}
        >
          <span
            style={{
              background: "#EEF2FF",
              color: "#4338CA",
              padding: "8px 18px",
              borderRadius: "20px",
              fontWeight: "600",
            }}
          >
            {career.category}
          </span>

          <h1
            style={{
              marginTop: "20px",
              marginBottom: "15px",
            }}
          >
            {career.title}
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            {career.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "25px",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            <span>💰 {career.averageSalary}</span>

            <span>📈 {career.difficulty}</span>
          </div>

          <button
            onClick={handleSaveCareer}
            style={{
              marginTop: "25px",
              padding: "12px 22px",
              background: "#4F46E5",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            ⭐ Save Career
          </button>
        </div>

        {/* Required Skills */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            marginBottom: "30px",
          }}
        >
          <h2>Required Skills</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {career.requiredSkills?.map((skill, index) => (
              <span
                key={index}
                style={{
                  background: "#EEF2FF",
                  color: "#4338CA",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontWeight: "600",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Roadmap */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            marginBottom: "30px",
          }}
        >
          <h2>Learning Roadmap</h2>

          {career.roadmap?.length ? (
            <ol
              style={{
                marginTop: "20px",
                paddingLeft: "20px",
                lineHeight: "2",
                fontSize: "17px",
              }}
            >
              {career.roadmap.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>No roadmap available.</p>
          )}
        </div>

        {/* Learning Resources */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            marginBottom: "30px",
          }}
        >
          <h2>Learning Resources</h2>

          {career.learningResources?.length > 0 ? (
            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "18px",
              }}
            >
              {career.learningResources.map((resource, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "18px",
                  }}
                >
                  <h3>{resource.title}</h3>

                  <p
                    style={{
                      color: "#6B7280",
                      margin: "8px 0",
                    }}
                  >
                    {resource.type}
                  </p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#4F46E5",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Open Resource →
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>No learning resources available.</p>
          )}
        </div>

        {/* Future Scope */}

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2>Future Scope</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              color: "#555",
              fontSize: "17px",
            }}
          >
            {career.futureScope}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CareerDetailsPage;