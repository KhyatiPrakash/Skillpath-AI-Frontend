import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import CareersPage from "./pages/CareersPage";
import CareerDetailsPage from "./pages/CareerDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import AdminDashboard from "./pages/AdminDashboard";
import AddCareerPage from "./pages/AddCareerPage";
import EditCareersPage from "./pages/EditCareersPage";
import EditCareerPage from "./pages/EditCareerPage";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/careers" element={<CareersPage />} />

      <Route path="/careers/:id" element={<CareerDetailsPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      {/* Protected User Route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/add-career"
        element={
          <AdminRoute>
            <AddCareerPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/edit-careers"
        element={
          <AdminRoute>
            <EditCareersPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/edit-career/:id"
        element={
          <AdminRoute>
            <EditCareerPage />
          </AdminRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;