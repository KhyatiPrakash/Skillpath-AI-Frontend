import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getAllCareers, searchCareers } from "../api/careerApi";
import CareerCard from "../components/careers/CareerCard";

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

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

  const handleSearch = async () => {
    try {
      setLoading(true);

      if (keyword.trim() === "") {
        await fetchCareers();
        return;
      }

      const data = await searchCareers(keyword);
      setCareers(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container" style={{ padding: "40px 0" }}>
        <h1>Explore Careers</h1>

        <p>
          Discover career paths, skills, roadmaps and learning resources.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Search careers..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              padding: "14px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#4F46E5",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Search
          </button>
        </div>

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