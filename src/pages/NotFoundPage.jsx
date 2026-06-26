import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "5rem" }}>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link to="/">
          <button
            className="btn btn--primary"
            style={{ marginTop: "20px" }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;