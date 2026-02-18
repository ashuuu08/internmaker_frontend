import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BookOpen, Code, Database, Globe, Cloud, Settings } from "lucide-react";

function SyllabusPage() {
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState(0);

  const modules = [
    {
      id: 1,
      title: "Foundation & Tools",
      duration: "Week 1-2",
      topics: ["Git & Version Control", "IDE Setup (IntelliJ/VSCode)", "Environment Configuration", "CLI Basics"],
      icon: Settings
    },
    {
      id: 2,
      title: "Core Programming",
      duration: "Week 3-4",
      topics: ["Java Fundamentals", "OOP Concepts", "Collections Framework", "Exception Handling"],
      icon: Code
    },
    {
      id: 3,
      title: "Database Design",
      duration: "Week 5-6",
      topics: ["SQL & Queries", "Database Normalization", "JPA & Hibernate", "Transaction Management"],
      icon: Database
    },
    {
      id: 4,
      title: "Backend Development",
      duration: "Week 7-8",
      topics: ["Spring Framework", "RESTful APIs", "Security & JWT", "Microservices Architecture"],
      icon: Globe
    },
    {
      id: 5,
      title: "Frontend Integration",
      duration: "Week 9",
      topics: ["React Fundamentals", "Component Design", "State Management", "API Integration"],
      icon: Code
    },
    {
      id: 6,
      title: "DevOps & Deployment",
      duration: "Week 10",
      topics: ["Docker & Containerization", "CI/CD Pipelines", "AWS Deployment", "Monitoring & Logging"],
      icon: Cloud
    },
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack project: product catalog, cart, payment integration, order management.",
      tech: "Java, Spring Boot, React, PostgreSQL, Stripe API"
    },
    {
      name: "Task Management System",
      description: "Real-time collaboration tool with role-based access, notifications, and reporting.",
      tech: "Java, Spring, React, WebSockets, MongoDB"
    },
    {
      name: "Analytics Dashboard",
      description: "Data visualization platform with real-time analytics, user segmentation, and reports.",
      tech: "Java, Kafka, React, Elasticsearch, AWS"
    },
    {
      name: "Social Networking App",
      description: "Multi-user platform with messaging, notifications, and feed algorithms.",
      tech: "Java, Spring, React, Redis, PostgreSQL"
    },
    {
      name: "Inventory Management",
      description: "Enterprise system for stock tracking, supply chain, and vendor management.",
      tech: "Java, Spring Boot, Oracle DB, Angular"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Complete Learning Roadmap</h1>
          <p className="text-xl text-slate-300 mb-6">Master modern software development with our 10-week structured curriculum designed for industry-ready skills.</p>
          <div className="flex justify-center gap-4">
            <span className="inline-block bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-full text-sm">📚 10 Weeks</span>
            <span className="inline-block bg-blue-400 text-white font-bold px-4 py-2 rounded-full text-sm">🚀 5+ Projects</span>
            <span className="inline-block bg-green-400 text-slate-900 font-bold px-4 py-2 rounded-full text-sm">✅ Job-Ready</span>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition"
                >
                  <button
                    onClick={() => setExpandedModule(expandedModule === idx ? -1 : idx)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                        <p className="text-sm text-slate-500">{module.duration}</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className={`text-slate-400 transition-transform ${expandedModule === idx ? "rotate-90" : ""}`} />
                  </button>
                  {expandedModule === idx && (
                    <div className="px-6 pb-6 border-t border-slate-100 bg-slate-50">
                      <ul className="grid md:grid-cols-2 gap-3">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle size={16} className="text-green-600 shrink-0" /> {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capstone Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Capstone Projects</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Build production-grade applications with real-world requirements. Each project involves backend API development, database design, frontend integration, and deployment.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((tech, j) => (
                    <span key={j} className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Design scalable systems using microservices architecture",
              "Build RESTful APIs with security best practices",
              "Master database optimization and query performance",
              "Implement CI/CD pipelines and containerization",
              "Create responsive frontends with modern frameworks",
              "Deploy applications to cloud platforms (AWS, GCP)",
              "Write maintainable code with design patterns",
              "Collaborate in agile teams effectively"
            ].map((outcome, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle size={20} className="text-green-600 shrink-0 mt-1" />
                <span className="text-slate-700">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-lg text-blue-100 mb-8">Join hundreds of students who've landed top internships and jobs after completing InternMaker.</p>
          <button onClick={() => navigate("/register")} className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-lg shadow-lg transition flex items-center justify-center gap-2 mx-auto">
            Enroll Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-sm">
          &copy; 2026 InternMaker. All Rights Reserved. | <a href="/privacy" className="hover:text-white">Privacy</a> | <a href="/terms" className="hover:text-white">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default SyllabusPage;
