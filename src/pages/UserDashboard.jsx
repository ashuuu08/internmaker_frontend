import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu, X, LayoutDashboard, CheckSquare, Award, BookOpen,
  User, Info, HelpCircle, Mail, Bell, LogOut, ChevronRight, Shield, Loader2
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { getUserDashboard, getUserEnrollments } from "../services/api";

// Components
import TaskSection from "../components/TaskSection.jsx";
import CertificationSection from "../components/CredentialSection.jsx";
import ProfileSection from "../components/ProfileSection.jsx";
import AboutSection from "../components/AboutInternMaker.jsx.jsx";
import HelpSection from "../components/HelpSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import StudyMaterialsSection from "../components/StudyMaterialsSection.jsx";

export default function UserDashboard() {
  const navigate = useNavigate();

  // --- State Management ---
  const [dashboardData, setDashboardData] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
  const TOTAL_SEATS = 50;
  const [seatsLeft, setSeatsLeft] = useState(() => {
    const saved = localStorage.getItem("internmaker-seats");
    return saved ? Number(saved) : 18;
  });

  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Fetch Dashboard Data ---
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [dashResponse, enrollResponse] = await Promise.all([
          getUserDashboard(),
          getUserEnrollments()
        ]);

        setDashboardData(dashResponse.data);
        setEnrollments(enrollResponse.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching dashboard:", err);
        setError(err.response?.data?.message || "Failed to load dashboard");

        // If unauthorized, redirect to login
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.clear();
          sessionStorage.clear();
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  // --- Effects (Timer & Seats) ---
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft(prev => {
        if (prev <= 3) return prev;
        const updated = prev - (Math.random() < 0.5 ? 1 : 0);
        localStorage.setItem("internmaker-seats", updated);
        return updated;
      });
    }, 1000 * 60 * 3);
    return () => clearInterval(interval);
  }, []);

  // --- Helpers ---
  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  // --- Navigation Items (Dynamic based on payment) ---
  const isEnrolled = dashboardData?.hasActiveEnrollment;

  const allNavItems = [
    { id: "dashboard", label: "Overview", icon: <LayoutDashboard size={20} />, locked: false },
    { id: "study_materials", label: "Study Materials", icon: <CheckSquare size={20} />, locked: !isEnrolled },
    { id: "tasks", label: "My Tasks", icon: <CheckSquare size={20} />, locked: !isEnrolled },
    { id: "certification", label: "Certification", icon: <Award size={20} />, locked: !isEnrolled },
    { id: "profile", label: "Profile Settings", icon: <User size={20} />, locked: !isEnrolled },
    { id: "about", label: "About Program", icon: <Info size={20} />, locked: false },
    { id: "help", label: "Help Center", icon: <HelpCircle size={20} />, locked: false },
    { id: "contact", label: "Contact Support", icon: <Mail size={20} />, locked: false },
  ];



  const navItems = allNavItems.filter(item => !item.locked);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-800 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Error Loading Dashboard</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">

      {/* ===== Mobile Overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Sidebar (Professional) ===== */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 flex flex-col shadow-xl md:shadow-none`}>

        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-800 text-white rounded flex items-center justify-center">
              IM
            </div>
            <span className="text-slate-900">InternMaker</span>
          </div>
          <button className="ml-auto md:hidden text-slate-500" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Academic Portal</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.id
                ? "bg-blue-50 text-blue-800 shadow-sm ring-1 ring-blue-100"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              {item.icon}
              {item.label}
              {activeSection === item.id && <ChevronRight size={16} className="ml-auto opacity-50" />}
            </button>
          ))}
        </nav>

        {/* Official Status Snippet */}
        <div className="mx-4 mb-4 p-3 bg-slate-50 border border-slate-100 rounded-lg">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-1">
            <Shield size={12} className="text-green-600" /> Verified Student
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            ID: IM-2026-{dashboardData?.userId || 'XXX'}
          </div>
        </div>

        {/* User Profile (Bottom) */}
        <div className="p-4 border-t border-slate-100">
          <div
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition"
            onClick={handleLogout}
          >
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 border border-slate-300">
              <User size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">
                {dashboardData?.fullName || "Student"}
              </p>
              <p className="text-xs text-slate-500 truncate">Click to logout</p>
            </div>
            <LogOut size={18} className="text-slate-400 hover:text-red-600 transition" />
          </div>
        </div>
      </aside>

      {/* ===== Main Content Wrapper ===== */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">

        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-1 -ml-2 text-slate-500" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-bold text-slate-800 capitalize">
              {activeSection === 'dashboard' ? 'Overview' : activeSection.replace('-', ' ')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Current Cohort</span>
              <span className="text-xs font-semibold text-blue-800">Winter 2026 Batch</span>
            </div>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition bg-slate-50 rounded-full hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto space-y-8">

            {/* --- VIEW: DASHBOARD --- */}
            {activeSection === "dashboard" ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">

                {/* 1. Urgency/Action Banner */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-bold text-red-200 mb-4 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        ADMISSION STATUS: {dashboardData?.hasActiveEnrollment ? 'CONFIRMED' : 'PENDING'}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                        {dashboardData?.hasActiveEnrollment ? 'Welcome to Your Program' : 'Your Learning Journey Starts Here'}
                      </h2>
                      <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl">
                        {dashboardData?.hasActiveEnrollment
                          ? 'Your enrollment is confirmed! Access all course materials and start learning.'
                          : 'Explore our study materials, roadmaps, and tasks to get started with your professional development.'
                        }
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 min-w-[240px] border border-white/10 shadow-xl">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Expiration</p>
                        <span className="text-[10px] bg-red-500/80 px-1.5 py-0.5 rounded text-white font-bold">URGENT</span>
                      </div>
                      <p className="text-3xl font-mono font-bold text-white mb-4 tracking-wider">{formatTime(timeLeft)}</p>

                      <div className="text-xs text-blue-200 mb-1 flex justify-between">
                        <span>Capacity Filled</span>
                        <span className="font-bold text-white">{Math.round(((TOTAL_SEATS - seatsLeft) / TOTAL_SEATS) * 100)}%</span>
                      </div>
                      <div className="w-full bg-slate-800/50 h-2 rounded-full mb-4 overflow-hidden border border-white/5">
                        <div className="bg-amber-400 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${((TOTAL_SEATS - seatsLeft) / TOTAL_SEATS) * 100}%` }}></div>
                      </div>

                      <button className="w-full py-2.5 bg-white text-blue-900 text-xs font-bold uppercase tracking-wide rounded hover:bg-blue-50 transition shadow-lg">
                        Secure Position Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Quick Stats Grid - DYNAMIC */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Assigned Tasks",
                      value: `${dashboardData?.completedTasks || 0}/${dashboardData?.totalTasks || 12}`,
                      sub: dashboardData?.completedTasks > 0 ? "In Progress" : "Pending Access",
                      icon: <CheckSquare size={20} className="text-blue-600" />,
                      color: "bg-blue-50 border-blue-100"
                    },
                    {
                      label: "Enrolled Courses",
                      value: `${dashboardData?.enrolledCourses || 0}/${dashboardData?.totalCourses || 0}`,
                      sub: dashboardData?.enrolledCourses > 0 ? "Active" : "No Enrollments",
                      icon: <Award size={20} className="text-green-600" />,
                      color: "bg-green-50 border-green-100"
                    },
                    {
                      label: "Certificate",
                      value: dashboardData?.certificateEligible ? "Eligible" : "Locked",
                      sub: dashboardData?.certificateEligible ? "Ready to Download" : "Complete Tasks",
                      icon: <Award size={20} className={dashboardData?.certificateEligible ? "text-amber-600" : "text-slate-500"} />,
                      color: dashboardData?.certificateEligible ? "bg-amber-50 border-amber-100" : "bg-slate-100 border-slate-200 grayscale"
                    },
                  ].map((stat, idx) => (
                    <div key={idx} className={`p-6 rounded-xl border shadow-sm flex items-center gap-5 ${stat.color} bg-white`}>
                      <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm`}>
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">{stat.label}</p>
                        <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-400">{stat.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Welcome / Info Area */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 mt-1">
                      <Info size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Welcome, {dashboardData?.fullName}!</h3>
                      <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
                        You are currently viewing the <span className="font-semibold text-slate-900">
                          {dashboardData?.hasActiveEnrollment ? 'Student LMS View' : 'Applicant View'}
                        </span>.
                        {!dashboardData?.hasActiveEnrollment && (
                          <> You can now access the <strong>Study Materials</strong> and <strong>Roadmaps</strong>. Once your profile is verified, you will be assigned tasks and receive your offer letter.</>
                        )}
                      </p>
                      <div className="flex gap-4">
                        <button onClick={() => setActiveSection('profile')} className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-900 transition shadow-sm">
                          View Profile
                        </button>
                        <button onClick={() => setActiveSection('help')} className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                          Download Syllabus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              /* --- VIEW: OTHER SECTIONS (Standard Container) --- */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[600px] p-6 md:p-8"
              >
                {activeSection === "study_materials" && <StudyMaterialsSection />}
                {activeSection === "tasks" && <TaskSection />}
                {activeSection === "certification" && <CertificationSection />}
                {activeSection === "profile" && <ProfileSection dashboardData={dashboardData} />}
                {activeSection === "about" && <AboutSection />}
                {activeSection === "help" && <HelpSection />}
                {activeSection === "contact" && <ContactSection />}
              </motion.div>
            )}

            {/* Footer */}
            <footer className="flex justify-between items-center text-xs text-slate-400 py-6 border-t border-slate-200 mt-auto">
              <span>© {new Date().getFullYear()} InternMaker Inc.</span>
              <div className="flex gap-4">
                <span className="hover:text-slate-600 cursor-pointer">Privacy</span>
                <span className="hover:text-slate-600 cursor-pointer">Terms</span>
                <span className="hover:text-slate-600 cursor-pointer">Support</span>
              </div>
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
}