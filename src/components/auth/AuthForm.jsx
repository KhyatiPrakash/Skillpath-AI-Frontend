import { useState } from "react";
import { registerUser, loginUser } from "../../api/authApi";

const AuthForm = ({ type }) => {
  const isRegister = type === "register";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("✅ Button Clicked");


    if (
      (isRegister && !formData.name) ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");

    try {
    if (isRegister) {
    const data = await registerUser(formData);
    console.log("Registered:", data);
    alert("Registration Successful!");
    } else {
    const data = await loginUser(formData);
    console.log("Logged In:", data);
    alert("Login Successful!");
    }
    } catch (err) {
     setError(
     err.response?.data?.message || "Something went wrong."
     );
    } 
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "450px",
        background: "#fff",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {isRegister ? "Create Account" : "Welcome Back"}
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        {isRegister
          ? "Create your SkillPath AI account."
          : "Login to continue your learning journey."}
      </p>

      {error && (
        <div
          style={{
            background: "#FEE2E2",
            color: "#DC2626",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </>
        )}

        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Password</label>

        <div
          style={{
            position: "relative",
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={{
              ...inputStyle,
              marginBottom: "0px",
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontWeight: "600",
              color: "#4F46E5",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#4F46E5",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {isRegister ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "8px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #D1D5DB",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default AuthForm;