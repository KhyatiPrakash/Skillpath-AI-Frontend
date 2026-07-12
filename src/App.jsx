import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import CareersPage from "./pages/CareersPage";
import CareerDetailsPage from "./pages/CareerDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<NotFoundPage />} />

      <Route path="/careers" element={<CareersPage />} />

      <Route path="/careers/:id" element={<CareerDetailsPage />} />
    </Routes>
  );
}

export default App;