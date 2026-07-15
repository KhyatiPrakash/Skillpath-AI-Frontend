import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  getCareerById,
  updateCareer,
} from "../api/careerApi";

const EditCareerPage = () => {
  const { id } = useParams();
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

  useEffect(() => {
    fetchCareer();
  }, []);

  const fetchCareer = async () => {
    try {
      const data = await getCareerById(id);

      setFormData({
        title: data.title,
        description: data.description,
        category: data.category,
        averageSalary: data.averageSalary,
        difficulty: data.difficulty,
        futureScope: data.futureScope,
        requiredSkills: data.requiredSkills.join(", "),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCareer(id, {
        ...formData,
        requiredSkills: formData.requiredSkills
          .split(",")
          .map((skill) => skill.trim()),
      });

      alert("Career updated successfully!");

      navigate("/admin/edit-careers");
    } catch (error) {
      console.error(error);
      alert("Failed to update career.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #D1D5DB",
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
          <h1>Edit Career</h1>

          <form onSubmit={handleSubmit}>
            <label>Title</label>
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
            <input
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              style={inputStyle}
            />

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

            <label>Required Skills</label>
            <input
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                background: "#059669",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Update Career
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditCareerPage;