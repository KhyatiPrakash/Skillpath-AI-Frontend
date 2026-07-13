import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F8FAFC",
          padding: "40px 20px",
        }}
      >
        <AuthForm type="register" />
      </div>

      <Footer />
    </>
  );
};

export default RegisterPage;