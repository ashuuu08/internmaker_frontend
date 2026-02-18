import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, ChevronDown, ChevronUp, Download, 
  Code, Server, Database, Cloud, FileText, Star, Loader2 
} from "lucide-react";

// --- Syllabus Data Structure ---
const tracks = {
  java: {
    title: "Java Full Stack Engineering",
    description: "Master the enterprise standard. From Core Java to Microservices and React.",
    modules: [
      {
        id: 1,
        title: "Foundation & Core Java",
        duration: "Weeks 1-3",
        topics: ["OOPs Principles (Polymorphism, Inheritance)", "Collection Framework & Generics", "Multithreading & Concurrency", "Exception Handling & File I/O"],
        project: "Console-based Banking System"
      },
      {
        id: 2,
        title: "Advanced Database Engineering",
        duration: "Weeks 4-5",
        topics: ["SQL Mastery (Joins, Indexing, Normalization)", "JDBC Architecture", "Hibernate ORM & JPA", "Transaction Management"],
        project: "Employee Management System (CRUD)"
      },
      {
        id: 3,
        title: "Spring Boot & Microservices",
        duration: "Weeks 6-9",
        topics: ["Spring IoC & Dependency Injection", "RESTful API Development", "Spring Security (JWT/OAuth2)", "Microservices Architecture (Eureka, Zuul)"],
        project: "E-Commerce Backend API"
      },
      {
        id: 4,
        title: "Frontend Integration (React)",
        duration: "Weeks 10-12",
        topics: ["React Components & Hooks", "State Management (Redux Toolkit)", "Axios API Integration", "Responsive UI with Tailwind"],
        project: "Full Stack Social Media Dashboard"
      }
    ]
  },
  mern: {
    title: "MERN Stack Development",
    description: "Build modern, scalable web applications using JavaScript end-to-end.",
    modules: [
      {
        id: 1,
        title: "Modern JavaScript (ES6+) & DOM",
        duration: "Weeks 1-3",
        topics: ["Closures, Promises, Async/Await", "Event Loop & Callbacks", "DOM Manipulation", "Functional Programming"],
        project: "Interactive Task Manager"
      },
      {
        id: 2,
        title: "Backend with Node.js & Express",
        duration: "Weeks 4-6",
        topics: ["Node Runtime Architecture", "Express Middleware", "REST API Design", "Authentication (Passport.js/JWT)"],
        project: "Real-time Chat Server"
      },
      {
        id: 3,
        title: "Database Design (MongoDB)",
        duration: "Weeks 7-8",
        topics: ["NoSQL Concepts", "Mongoose ODM & Schemas", "Aggregation Pipelines", "Data Indexing strategies"],
        project: "Content Management System (CMS)"
      },
      {
        id: 4,
        title: "React.js & State Architecture",
        duration: "Weeks 9-12",
        topics: ["Virtual DOM & Lifecycle", "Context API vs Redux", "React Router", "Performance Optimization"],
        project: "Netflix Clone with TMDB API"
      }
    ]
  }
};

export default function SyllabusSection() {
  const [activeTrack, setActiveTrack] = useState("java");
  const [expandedModule, setExpandedModule] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  // --- DOWNLOAD LOGIC ---
  const handleDownload = () => {
    setDownloading(true);
    
    // Simulate processing delay for better UX
    setTimeout(() => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = "/brochure.pdf"; // <--- Make sure 'brochure.pdf' is in your 'public' folder
        link.download = "InternMaker_Curriculum_2026.pdf"; // The name the user will see
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloading(false);
    }, 1500);
  };

  return (
    <section id="syllabus" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">
            Detailed Curriculum
          </span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            What You Will Learn
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            A structured, week-by-week breakdown of the concepts you will master. 
            Select your preferred track below.
          </p>
        </div>

        {/* --- Track Switcher --- */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-lg inline-flex shadow-inner">
            <button
              onClick={() => setActiveTrack("java")}
              className={`px-6 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTrack === "java" 
                  ? "bg-white text-blue-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Server size={16} /> Java Full Stack
            </button>
            <button
              onClick={() => setActiveTrack("mern")}
              className={`px-6 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTrack === "mern" 
                  ? "bg-white text-blue-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Code size={16} /> MERN Stack
            </button>
          </div>
        </div>

        {/* --- Content Area --- */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Left: Syllabus List */}
          <div className="md:col-span-2 space-y-4">
            {tracks[activeTrack].modules.map((mod) => (
              <div 
                key={mod.id} 
                className={`border rounded-xl transition-all duration-300 ${
                  expandedModule === mod.id 
                    ? "border-blue-200 bg-blue-50/30 shadow-md" 
                    : "border-slate-200 bg-white hover:border-blue-200"
                }`}
              >
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors ${
                        expandedModule === mod.id 
                        ? "bg-blue-600 text-white border-blue-600" 
                        : "bg-slate-50 text-slate-500 border-slate-200"
                    }`}>
                      {mod.id}
                    </div>
                    <div>
                      <h4 className={`font-bold text-base ${expandedModule === mod.id ? "text-blue-900" : "text-slate-800"}`}>
                        {mod.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium uppercase tracking-wide">
                        {mod.duration}
                      </p>
                    </div>
                  </div>
                  {expandedModule === mod.id ? (
                    <ChevronUp className="text-blue-600" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400" size={20} />
                  )}
                </button>

                <AnimatePresence>
                  {expandedModule === mod.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-[4.5rem]">
                        <ul className="space-y-2 mb-4">
                          {mod.topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle size={14} className="mt-1 text-blue-400 shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-white border border-blue-100 rounded-lg p-3 flex items-center gap-3 shadow-sm">
                           <div className="bg-yellow-100 p-2 rounded text-yellow-700">
                              <Star size={16} fill="currentColor" />
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Capstone Project</p>
                              <p className="text-sm font-bold text-slate-800">{mod.project}</p>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Summary Card */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl sticky top-24 shadow-2xl">
            <h3 className="text-xl font-bold mb-2">{tracks[activeTrack].title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {tracks[activeTrack].description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Code size={18} className="text-blue-400"/> 4 Major Projects
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Database size={18} className="text-green-400"/> Database Architecture
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Cloud size={18} className="text-purple-400"/> Cloud Deployment
              </div>
            </div>

            <button 
              onClick={handleDownload}
              disabled={downloading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {downloading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Downloading...
                </>
              ) : (
                <>
                  <Download size={18} /> Download Brochure
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 mt-4 text-center flex items-center justify-center gap-1">
              <FileText size={12} /> Detailed PDF • 4.2 MB
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}