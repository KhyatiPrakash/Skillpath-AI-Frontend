import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getAllCareers } from "../api/careerApi";
import CareerCard from "../components/careers/CareerCard";

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const data = await getAllCareers();
        console.log("Careers:", data);
        setCareers(data);
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container" style={{ padding: "40px 0" }}>
        <h1>Explore Careers</h1>

        <p>
          Discover career paths, skills, roadmaps and learning resources.
        </p>

        {loading ? (
          <h3>Loading careers...</h3>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
              marginTop: "30px",
            }}
          >
            {careers.map((career) => (
              <CareerCard key={career._id} career={career} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CareersPage;