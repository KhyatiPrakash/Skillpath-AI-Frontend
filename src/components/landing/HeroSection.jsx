import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="container" style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div className="animate-fade-up">
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginBottom: "var(--space-6)",
              lineHeight: 1.1,
            }}
          >
            Learn Smarter with{" "}
            <span className="gradient-text">SkillPath</span>
          </h1>

          <p
            style={{
              fontSize: "var(--text-lg)",
              marginBottom: "var(--space-8)",
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            SkillPath is your one-stop learning platform to master web
            development through structured roadmaps, real-world projects,
            interactive lessons, and continuous progress tracking.
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              flexWrap: "wrap",
            }}
          >
            <Link to="/contact">
              <button
                className="btn btn--primary btn--lg"
                style={{ fontSize: "var(--text-base)" }}
              >
                Get Started <FiArrowRight />
              </button>
            </Link>

            <Link to="/about">
              <button className="btn btn--secondary btn--lg">
                Learn More
              </button>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-8)",
              marginTop: "var(--space-10)",
              flexWrap: "wrap",
            }}
          >
            {[
              ["10K+", "Students"],
              ["500+", "Courses"],
              ["98%", "Success Rate"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: 800,
                    color: "var(--color-accent)",
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 380,
              height: 380,
              background:
                "radial-gradient(circle at 50% 50%, rgba(108,99,255,0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <div
              style={{
                background: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border-strong)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-6)",
                width: 300,
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 40px var(--color-primary-glow)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: "var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#EF4444",
                  }}
                />

                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#F59E0B",
                  }}
                />

                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#10B981",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: 8,
                }}
              >
                Learning Roadmap 🚀
              </div>

              {[
                "HTML & CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "MongoDB",
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 0",
                    borderBottom:
                      i < 4 ? "1px solid var(--color-border)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background:
                        i < 2
                          ? "rgba(16,185,129,0.2)"
                          : "var(--color-bg-elevated)",
                      border: `1px solid ${
                        i < 2 ? "#10B981" : "var(--color-border)"
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      flexShrink: 0,
                    }}
                  >
                    {i < 2 ? "✓" : i + 1}
                  </div>

                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color:
                        i < 2
                          ? "var(--color-text-secondary)"
                          : "var(--color-text)",
                      textDecoration: i < 2 ? "line-through" : "none",
                    }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;