import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getCareerById } from "../api/careerApi";

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
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareer();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{
          maxWidth: "900px",
          margin: "40px auto",
        }}
      >
        <h1>{career.title}</h1>

        <p>{career.description}</p>

        <hr />

        <h3>Category</h3>
        <p>{career.category}</p>

        <h3>Average Salary</h3>
        <p>{career.averageSalary}</p>

        <h3>Difficulty</h3>
        <p>{career.difficulty}</p>

        <h3>Required Skills</h3>

        <ul>
          {career.requiredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3>Future Scope</h3>

        <p>{career.futureScope}</p>
      </div>

      <Footer />
    </>
  );
};

export default CareerDetailsPage;