import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// --- Import Your Components ---
import Login from "./components/Login";
import Register from "./components/Register";
import PublicNavbar from "./components/PublicNavbar";
import AnnouncementBanner from "./components/AnnouncementBanner";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SyllabusPage from "./pages/SyllabusPage";
import ForgotPassword from "./pages/ForgotPassword";
import SupportPage from "./pages/SupportPage";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FeatureDetailPage from "./pages/FeatureDetailPage";

// --- Placeholder Dashboards ---
const Unauthorized = () => <div className="p-10 text-2xl font-bold text-orange-600">⛔ Access Denied</div>;

// --- Enhanced Protected Route ---
const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  // Accept token from either storage so session-only logins still work
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  // In this demo we store the role under `role` (lowercase). Check both storages.
  const userRole = (localStorage.getItem("role") || sessionStorage.getItem("role") || "").toLowerCase(); // e.g., 'admin', 'student'

  // 1. Check if user is logged in
  if (!token) {
    // Redirect to login, but save the current location they tried to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Check if user has permission (if roles are defined)
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// --- Public Layout (Shared Navbar/Banner) ---
const PublicLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(14400);
  const location = useLocation();

  const hideNavbarOn = ["/login", "/register", "/forgot-password"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {!shouldHideNavbar && (
        <>
          <AnnouncementBanner timeLeft={timeLeft} isScrolled={isScrolled} />
          <PublicNavbar isScrolled={isScrolled} />
        </>
      )}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
        <Route path="/syllabus" element={<PublicLayout><SyllabusPage /></PublicLayout>} />
        <Route path="/forgot-password" element={<PublicLayout><ForgotPassword /></PublicLayout>} />
        <Route path="/support" element={<PublicLayout><SupportPage /></PublicLayout>} />
        <Route path="/terms" element={<PublicLayout><TermsOfService /></PublicLayout>} />
        <Route path="/privacy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
        <Route path="/feature/:featureId" element={<PublicLayout><FeatureDetailPage /></PublicLayout>} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* --- Protected Routes --- */}

        {/* User Dashboard - All authenticated users (except admin) */}
        <Route
          path="/user_dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Route - Only Admins allowed */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 Fallback */}
        <Route path="*" element={<div className="p-10">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;