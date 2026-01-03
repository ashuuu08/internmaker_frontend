// src/pages/UserDashboard.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Components
import TaskSection from "../components/TaskSection.jsx";
import CertificationSection from "../components/CredentialSection.jsx";
import ProfileSection from "../components/ProfileSection.jsx";
import AboutSection from "../components/AboutInternMaker.jsx";
import HelpSection from "../components/HelpSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function UserDashboard() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours countdown
  const TOTAL_SEATS = 50;
  const [seatsLeft, setSeatsLeft] = useState(() => {
    const saved = localStorage.getItem("internmaker-seats");
    return saved ? Number(saved) : 18;
  });

  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* ===================== Countdown Timer ===================== */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  /* ===================== Dynamic Seats ===================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft(prev => {
        if (prev <= 3) return prev;
        const drop = Math.random() < 0.5 ? 1 : 0;
        const updated = prev - drop;
        localStorage.setItem("internmaker-seats", updated);
        return updated;
      });
    }, 1000 * 60 * 3);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    "dashboard",
    "tasks",
    "certification",
    "profile",
    "about",
    "help",
    "contact"
  ];

  const handleSectionChange = section => {
    setActiveSection(section);
    setSidebarOpen(false); // hide sidebar on mobile
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* ===== Mobile Menu Icon ===== */}
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* ===== Sidebar ===== */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-full bg-black border-r border-gray-800 transform md:translate-x-0 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 text-xl font-extrabold flex justify-between items-center">
          <span>
            <span className="text-yellow-400">Intern</span>
            <span className="text-cyan-400">Maker</span>
          </span>
          {/* Close button mobile */}
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 space-y-2 text-sm text-gray-400">
          {sections.map(item => (
            <button
              key={item}
              onClick={() => handleSectionChange(item)}
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition ${
                activeSection === item ? "bg-gray-800 text-white" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 ml-0 md:ml-64 px-6 md:px-10 py-8 space-y-10 overflow-y-auto">
        {/* ===== Dashboard ===== */}
        {activeSection === "dashboard" && (
          <motion.div
            id="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 border border-yellow-400/30 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div>
              <h2 className="text-2xl font-bold">Limited Internship Offer 🚀</h2>
              <p className="text-sm text-gray-300">Offer Letter + Certificate + Dashboard Access</p>
              <p className="mt-2 text-sm text-red-400">
                🔥 Only <span className="text-white font-bold">{seatsLeft}</span> seats left
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div
                  className="h-full bg-yellow-400 transition-all duration-700"
                  style={{ width: `${(seatsLeft / TOTAL_SEATS) * 100}%` }}
                />
              </div>
              <p className="mt-4 text-gray-400 max-w-lg">
                Welcome to your internship dashboard! Here you can track your progress, submit tasks, and access all learning materials. Use the sidebar to navigate through tasks, certifications, your profile, and other helpful sections.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs text-red-400">Offer ends in</p>
              <p className="font-mono text-lg">{h}h {m}m {s}s</p>
              <button className="mt-3 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300">
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}

        {/* ===== Tasks ===== */}
        {activeSection === "tasks" && <TaskSection />}

        {/* ===== Certification ===== */}
        {activeSection === "certification" && <CertificationSection />}

        {/* ===== Profile ===== */}
        {activeSection === "profile" && <ProfileSection />}

        {/* ===== About ===== */}
        {activeSection === "about" && <AboutSection />}

        {/* ===== Help ===== */}
        {activeSection === "help" && <HelpSection />}

        {/* ===== Contact ===== */}
        {activeSection === "contact" && <ContactSection />}

        {/* ===== Footer ===== */}
        <footer className="pt-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Ashish Kumar Rathour · InternMaker</span>
          <span>All rights reserved</span>
        </footer>
      </main>
    </div>
  );
}
