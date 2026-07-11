import "./CareerCard.css";
import { Link } from "react-router-dom";

const CareerCard = ({ career }) => {
  return (
    <div className="career-card">
      <div>
        <span
          style={{
            background: "#EEF2FF",
            color: "#4F46E5",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {career.category}
        </span>

        <h2
          style={{
            marginTop: "16px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          {career.title}
        </h2>

        <p
          style={{
            color: "#6B7280",
            lineHeight: "1.6",
          }}
        >
          {career.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {career.requiredSkills?.map((skill, index) => (
            <span
              key={index}
              style={{
                background: "#F3F4F6",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          borderTop: "1px solid #E5E7EB",
          paddingTop: "16px",
        }}
      >
        <p>
          💰 <strong>{career.averageSalary}</strong>
        </p>

        <p>
          📈 {career.difficulty}
        </p>

        <Link
          to={`/careers/${career._id}`}
          style={{ textDecoration: "none" }}
         >
          <button className="view-btn">
            View Details →
          </button>
        
        </Link>  
      </div>
    </div>
  );
};

export default CareerCard;