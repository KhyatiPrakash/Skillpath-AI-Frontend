import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="section-title">About SkillPath</h1>

          <p
            className="section-subtitle"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            SkillPath is an online learning platform designed to help students
            build strong technical skills through structured learning paths,
            practical projects, and continuous guidance.
          </p>

          <div className="grid-3" style={{ marginTop: "60px" }}>
            <div className="card">
              <h3>🎯 Our Mission</h3>
              <p>
                To make quality web development education accessible and easy
                for everyone.
              </p>
            </div>

            <div className="card">
              <h3>📚 What We Offer</h3>
              <p>
                Interactive learning resources, project-based practice, and
                career-focused guidance.
              </p>
            </div>

            <div className="card">
              <h3>🚀 Our Goal</h3>
              <p>
                Help learners become confident developers and prepare them for
                internships and jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;