import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container" style={{ maxWidth: "700px" }}>
          <h1 className="section-title">Contact Us</h1>

          <form className="card" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <br />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <br />
            <br />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <br />
            <br />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />

            <br />
            <br />

            <button className="btn btn--primary">
              Submit
            </button>

            {success && (
              <p
                style={{
                  color: "green",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Message submitted successfully!
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;