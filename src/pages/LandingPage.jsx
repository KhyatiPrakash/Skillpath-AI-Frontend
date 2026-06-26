import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/landing/HeroSection";
import FeatureCard from "../components/landing/FeatureCard";
import TestimonialSection from "../components/landing/TestimonialSection";
import CTABanner from "../components/landing/CTABanner";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <HeroSection />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Features</h2>

          <p className="section-subtitle">
            Everything you need to become a successful web developer.
          </p>

          <div className="grid-3">
            <FeatureCard
              icon="💻"
              title="Web Development"
              description="Learn HTML, CSS, JavaScript, React and more through structured lessons."
              color="#3B82F6"
            />

            <FeatureCard
              icon="📚"
              title="Structured Learning"
              description="Follow step-by-step roadmaps designed to help you learn efficiently."
              color="#8B5CF6"
            />

            <FeatureCard
              icon="🚀"
              title="Career Growth"
              description="Build real-world projects, strengthen your portfolio, and prepare for interviews."
              color="#10B981"
            />
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CTABanner />

      <Footer />
    </>
  );
};

export default LandingPage;