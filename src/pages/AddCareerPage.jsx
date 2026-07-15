import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import { createCareer } from "../api/careerApi";
import { useNavigate } from "react-router-dom";

const AddCareerPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    averageSalary: "",
    difficulty: "",
    futureScope: "",
    requiredSkills: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const careerData = {
      ...formData,
      requiredSkills: formData.requiredSkills
        .split(",")
        .map((skill) => skill.trim()),
      roadmap: [],
      learningResources: [],
    };

    await createCareer(careerData);

    alert("Career added successfully! 🎉");

    navigate("/careers");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to add career."
    );
  }
};

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #D1D5DB",
    fontSize: "15px",
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
            maxWidth: "700px",
            margin: "0 auto",
            background: "#fff",
            padding: "40px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          }}
        >
          <h1>Add New Career</h1>

          <form onSubmit={handleSubmit}>
            <label>Career Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{
                ...inputStyle,
                minHeight: "120px",
              }}
            />

            <label>Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Average Salary</label>
            <input
              name="averageSalary"
              value={formData.averageSalary}
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Difficulty</label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <label>Future Scope</label>
            <textarea
              name="futureScope"
              value={formData.futureScope}
              onChange={handleChange}
              style={{
                ...inputStyle,
                minHeight: "100px",
              }}
            />

            <label>Required Skills (comma separated)</label>
            <input
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                background: "#4F46E5",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Add Career
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddCareerPage;