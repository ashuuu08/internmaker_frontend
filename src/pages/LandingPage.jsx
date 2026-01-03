// src/components/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const roadmapFeatures = [
  { title: "Verified Internships", desc: "Only authentic companies. Apply with confidence.", color: "from-purple-700 to-pink-600", icon: "💼" },
  { title: "Smart Matching", desc: "Get personalized internship suggestions based on your skills.", color: "from-green-700 to-teal-600", icon: "🧠" },
  { title: "Career Growth", desc: "Access mentorship, resources, and guidance to accelerate your career.", color: "from-yellow-700 to-orange-500", icon: "🚀" },
];

const howItWorks = [
  { step: 1, title: "Sign Up", desc: "Create your profile and showcase your skills to companies.", icon: "📝" },
  { step: 2, title: "Browse & Apply", desc: "Find internships that fit your interests and apply instantly.", icon: "🔍" },
  { step: 3, title: "Get Selected", desc: "Track your applications and land your dream internship.", icon: "🎯" },
];




function LandingPage() {
  const navigate = useNavigate();

  const [time, setTime] = useState(6 * 60 * 60); // 6 hours countdown

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">

<section className="relative min-h-screen flex items-center justify-center px-6 bg-[#0b0f14] overflow-hidden">

  {/* Animated background glow */}
<motion.div
  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_45%)]"
  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>

<div className="relative z-10 max-w-4xl text-center">
{/* Title */}
<motion.h1
  className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Launch Your Career With <br />
  <span className="text-yellow-400">Industry-Ready Internships</span> <br />
  <span className="text-yellow-400">powered by </span>
  
  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
   InternMaker
  </span>
</motion.h1>


  {/* Short Description */}
  <motion.p
    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <span className="text-yellow-400 font-semibold">InternMaker</span> connects you with structured internship programs in
    <span className="text-white font-medium"> Java Development, MERN Stack, Frontend, </span>
    and other in-demand technologies — built for real-world experience, not certificates.
  </motion.p>

  {/* Actions */}
  <motion.div
    className="flex flex-col sm:flex-row justify-center gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <motion.button
      onClick={() => navigate("/register")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
    >
      Get Started
    </motion.button>

    <motion.button
      onClick={() => navigate("/login")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-white transition"
    >
      Login
    </motion.button>
  </motion.div>

</div>

</section>

<section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 overflow-hidden">

       <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="relative z-10 max-w-5xl w-full bg-gray-900/80 backdrop-blur border border-gray-800 rounded-3xl p-10 md:p-14"
    >
      {/* Brand */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Intern
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Maker
        </span>
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        Real internship. Real tasks. Real offer letter.
        Not fake certificates — only industry-ready experience.
      </p>

      {/* Content grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Left – What you get */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            What You Get
          </h2>

          <ul className="text-gray-300 space-y-2 text-sm">
            <li>✔ Verified Internship Offer Letter</li>
            <li>✔ Task-based Internship Program</li>
            <li>✔ Completion Certificate</li>
            <li>✔ Personal Dashboard for Progress</li>
            <li>✔ Suitable for College & Freshers</li>
          </ul>

          <div className="mt-6 text-sm text-red-400">
            ⏳ Offer Ends In:{" "}
            <span className="text-white font-semibold">
              {h}h {m}m {s}s
            </span>
          </div>
        </div>

        {/* Right – Pricing */}
        <div className="flex flex-col justify-center items-center text-center bg-gray-800/70 border border-gray-700 rounded-2xl p-8">
          <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full mb-4">
            Limited Time · 80% OFF
          </span>

          <p className="text-sm text-gray-400 line-through">
            ₹499
          </p>
          <p className="text-5xl font-extrabold text-yellow-400 mb-2">
            ₹49
          </p>
          <p className="text-xs text-gray-400 mb-6">
            One-time payment · Instant access
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/enrollment")} // <-- redirect
            className="px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition"
          >
            Enroll Now & Get Offer Letter
          </motion.button>

          <p className="text-xs text-gray-500 mt-4">
            Offer letter generated after enrollment
          </p>
        </div>
      </div>
    </motion.div>
    </section>
 
{/* Roadmap Section */}
<section className="py-28 px-6 bg-gray-900 text-center">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-white mb-4"> Internship Roadmap </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A structured, outcome-driven journey designed to make you job-ready — not just course-complete.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Animated connecting line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-0 w-full h-px bg-yellow-400 origin-left hidden md:block"
      />

      {[
        { phase: "Phase 1", title: "Foundation", desc: "Core concepts, tools, and development mindset." },
        { phase: "Phase 2", title: "Hands-On Development", desc: "Real features, real code, real reviews." },
        { phase: "Phase 3", title: "Production Projects", desc: "Build scalable applications following industry practices." },
        { phase: "Phase 4", title: "Career Launch", desc: "Certification, resume support, and interview readiness." },
      ].map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 z-10"
        >
          {/* Phase badge */}
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-yellow-400 border border-yellow-400/30 rounded-full">
            {step.phase}
          </span>
          <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



{/* Programs We Offer */}
<section className="py-24 px-6 bg-gray-900 border-t border-gray-800">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Internship Programs We Offer
      </h2>
      <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Carefully designed internship tracks focused on practical skills,
        real-world development workflows, and industry-aligned technologies.
      </p>
    </motion.div>

    {/* Programs Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Java Developer Internship",
          desc:
            "Backend-focused program covering enterprise Java development with real project exposure.",
          points: [
            "Spring Boot & REST APIs",
            "JPA & Database Design",
            "Authentication & Security",
          ],
        },
        {
          title: "MERN Stack Developer Internship",
          desc:
            "End-to-end full-stack development using modern JavaScript technologies.",
          points: [
            "MongoDB & Express",
            "React Architecture",
            "API Integration",
          ],
        },
        {
          title: "Frontend Developer Internship",
          desc:
            "UI-focused internship for building scalable, responsive web applications.",
          points: [
            "React & Component Design",
            "Responsive Layouts",
            "Performance Optimization",
          ],
        },
        {
          title: "Backend Developer Internship",
          desc:
            "Server-side development with emphasis on scalability and system reliability.",
          points: [
            "REST API Architecture",
            "Authentication Systems",
            "Database Optimization",
          ],
        },
        {
          title: "Full Stack Developer Internship",
          desc:
            "Comprehensive program covering frontend, backend, and deployment basics.",
          points: [
            "End-to-End Application Flow",
            "Basic System Design",
            "Production Readiness",
          ],
        },
        {
          title: "Additional Tracks",
          desc:
            "Upcoming programs based on market demand and partner requirements.",
          points: [
            "Cloud & DevOps (Upcoming)",
            "Data Engineering (Upcoming)",
            "Advanced Backend Systems",
          ],
        },
      ].map((program, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ y: -6 }}
          className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 transition-shadow hover:shadow-xl"
        >
          <h3 className="text-lg font-medium text-white mb-2">
            {program.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {program.desc}
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            {program.points.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* Call To Action + Footer */}
<section className="relative py-24 px-6 bg-gray-950 border-t border-gray-800 overflow-hidden">
  
  {/* Soft background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.06),transparent_60%)]" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative z-10 max-w-4xl mx-auto text-center"
  >
    {/* CTA Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
      Start Your Internship Journey Today
    </h2>

    <p className="text-sm md:text-base text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
      Gain real-world development experience, work on industry-aligned projects,
      and build a profile that companies actually care about.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
      <button
        onClick={() => navigate("/register")}
        className="px-10 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
      >
        Create Free Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="px-10 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition"
      >
        Login
      </button>
    </div>

    {/* Footer strip */}
    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
      
      {/* Copyright */}
      <div>
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-400 font-medium">
          Ashish Kumar Rathour
        </span>{" "}
        · InternMaker. All rights reserved.
      </div>

      {/* Help & Contact */}
      <div className="flex gap-6">
        <button className="hover:text-yellow-400 transition">
          Help
        </button>
        <button className="hover:text-yellow-400 transition">
          Contact
        </button>
      </div>
    </div>

  </motion.div>
</section>



    </div>
  );
}

export default LandingPage;
