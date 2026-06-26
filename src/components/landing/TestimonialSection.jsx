const testimonials = [
  {
    name: "Priya Sharma",
    role: "Web Developer",
    text: "SkillPath gave me a clear learning roadmap when I was completely lost. The structured courses and projects helped me improve my skills quickly.",
    avatar: "PS",
  },
  {
    name: "Arjun Mehta",
    role: "Computer Science Student",
    text: "I followed the SkillPath learning roadmap and completed several real-world projects. It helped me secure my first internship.",
    avatar: "AM",
  },
  {
    name: "Fatima Khan",
    role: "Career Switcher",
    text: "SkillPath made my transition into web development much easier. The step-by-step guidance kept me motivated throughout my journey.",
    avatar: "FK",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="section"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>

        <p className="section-subtitle">
          Hear from learners who successfully built their skills using
          SkillPath.
        </p>

        <div className="grid-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: "var(--color-primary)",
                  marginBottom: "var(--space-4)",
                  opacity: 0.5,
                }}
              >
                "
              </div>

              <p
                style={{
                  fontSize: "var(--text-sm)",
                  lineHeight: 1.8,
                  marginBottom: "var(--space-6)",
                  fontStyle: "italic",
                }}
              >
                {t.text}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--color-primary-glow)",
                    border: "2px solid var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "var(--text-sm)",
                    color: "var(--color-primary-light)",
                  }}
                >
                  {t.avatar}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    {t.name}
                  </div>

                  <div
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;