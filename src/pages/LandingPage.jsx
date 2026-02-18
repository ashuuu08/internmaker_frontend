import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle, Code, Users, ArrowRight,
  ShieldCheck, Lock, CreditCard, Award, Clock,
  Layers, Database, Cloud, Globe, Star, TrendingUp, Briefcase, Target
} from "lucide-react";

const Icon = ({ name, className }) => {
  const icons = {
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    badge: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />,
    scale: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
    lock: <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V9a4 4 0 10-8 0v2M6 11a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H6z" />,
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      {icons[name]}
    </svg>
  );
};

function LandingPage() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(14400);


  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return { h, m, sec };
  };


  const time = formatTime(timeLeft);

  const stats = [
    { number: "5000+", label: "Interns Placed" },
    { number: "87%", label: "Job Conversion" },
    { number: "10", label: "Week Program" },
    { number: "₹49", label: "Enrollment Fee" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer @ Google",
      image: "👩‍💻",
      text: "My paid internship at InternMaker gave me real-world experience and confidence. I got hired 2 weeks after completing it."
    },
    {
      name: "Arjun Patel",
      role: "Full Stack Developer @ Microsoft",
      image: "👨‍💼",
      text: "Working on a live product during my paid internship was incredible. The real experience and certification landed me my dream job."
    },
    {
      name: "Neha Gupta",
      role: "Tech Lead @ Flipkart",
      image: "👩‍💻",
      text: "Best 10 weeks of my career! A paid internship that teaches real skills. My offer letter made the difference."
    }
  ];

  const features = [
    { icon: Code, title: "5+ Real Projects", desc: "Work on live projects used by actual companies", id: "real-projects" },
    { icon: TrendingUp, title: "87% Placement Rate", desc: "Paid internship leads to job offers", id: "placement-rate" },
    { icon: ShieldCheck, title: "Verified Certificate", desc: "Certification from your internship experience", id: "verified-certificate" },
    { icon: Briefcase, title: "Internship Guarantee", desc: "Real work guaranteed or full refund", id: "job-guarantee" },
    { icon: Users, title: "Industry Mentors", desc: "Guidance from tech professionals", id: "live-mentorship" },
    { icon: Award, title: "Career Boost", desc: "Recognized internship on your resume", id: "career-advancement" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200">



      {/* ===== HERO SECTION ===== */}
      <section className="pt-20 pb-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-xs sm:text-sm font-bold mb-4 group hover:bg-blue-200 hover:scale-105 transition cursor-pointer">
              <Icon name="badge" className="w-4 h-4" />
              ISO 9001:2015 Certified
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Gain Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">Work Experience</span>
            </h1>

            <p className="text-xl text-slate-600 mb-4 leading-relaxed">
              Get paid to work on real projects. Complete a 10-week <strong>paid internship</strong> and launch your career with certified experience.
            </p>

            <ul className="space-y-3 mb-8 text-slate-700">
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-600 shrink-0" /> <strong>Paid Internship</strong> - earn while you learn</li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-600 shrink-0" /> <strong>Real Projects</strong> - build live products used by companies</li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-green-600 shrink-0" /> <strong>Verified Certification</strong> - recognized internship experience</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/register")} className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition flex items-center justify-center gap-2 group">
                <span>Apply for Internship</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button onClick={() => navigate("/syllabus")} className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
                View Internship Details
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-slate-600">
              <div className="flex -space-x-2">
                {["👩", "👨", "👩", "👨"].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-lg border-2 border-white shadow-md">
                    {emoji}
                  </div>
                ))}
              </div>
              <span>5000+ interns placed | <span className="text-green-600 font-bold">⭐ 4.9/5</span></span>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl rotate-3 opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-1 overflow-hidden border border-slate-700 hover:shadow-2xl hover:border-blue-400 transition">
              <div className="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-400 font-mono">internship.java</span>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed text-slate-300 bg-slate-900/50">
                <p><span className="text-purple-400">public class</span> <span className="text-yellow-400">Intern</span> {"{}"}</p>
                <p className="ml-4 mt-1"><span className="text-purple-400">private</span> <span className="text-cyan-400">String</span> name;</p>
                <p className="ml-4"><span className="text-purple-400">private</span> <span className="text-cyan-400">Status</span> hired;</p>
                <p className="ml-4 mt-1"><span className="text-purple-400">public</span> <span className="text-cyan-400">void</span> <span className="text-green-400">work</span>() {"{}"}</p>
                <p className="ml-8"><span className="text-green-400">System.out.println</span>(<span className="text-orange-400">"Hired!"</span>);</p>
                <p className="ml-4">{"}"}</p>

                <div className="mt-4 p-2 bg-green-900/30 text-green-400 border border-green-700 rounded text-xs flex items-center gap-2">
                  <CheckCircle size={12} /> Offer Generated
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-bold text-yellow-400 mb-3">{stat.number}</div>
                <p className="text-lg text-blue-100 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED SECTION: Why InternMaker is Different ===== */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">Why We're Different</div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Not Training. Real Internships.</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Most platforms teach. We let you work on real projects, earn real money, and build real credentials.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-300 hover:bg-blue-100 transition">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-lg">💼</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Real Projects from Real Companies</h3>
                    <p className="text-slate-600 text-sm">You'll work on live projects used by actual companies, not dummy assignments.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-300 hover:bg-green-100 transition">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-lg">💰</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Get Paid for Your Work</h3>
                    <p className="text-slate-600 text-sm">Just ₹49 to start. Then you earn based on your project contributions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-300 hover:bg-purple-100 transition">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-lg">📜</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Verified Certificate</h3>
                    <p className="text-slate-600 text-sm">Blockchain-verified proof of internship. Employers trust this more than training certificates.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-300 hover:bg-orange-100 transition">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 text-lg">🎯</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">87% Job Conversion</h3>
                    <p className="text-slate-600 text-sm">Real internships lead to real job offers. Average: ₹6.5 LPA.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-semibold text-slate-900">Real Project: E-Commerce Platform</span>
                    </div>
                    <span className="text-xs font-bold text-green-600">Live</span>
                  </div>

                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-semibold">📊 Tasks Completed</span>
                      <span className="font-bold text-blue-600">12/20</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-semibold">💵 Earnings This Month</span>
                      <span className="font-bold text-green-600">₹4,500</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-semibold">⭐ Performance Rating</span>
                      <span className="font-bold text-yellow-600">4.8/5</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-300">
                    <p className="text-sm font-bold text-green-900">✓ On Track for Job Offer</p>
                    <p className="text-xs text-green-800 mt-1">Top 10% performers get hired directly</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-4">How InternMaker Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Simple steps to launch your career with real experience</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "1", title: "Apply", desc: "Fill out your application and join our community" },
              { num: "2", title: "Get Assigned", desc: "Matched with real internship projects" },
              { num: "3", title: "Work & Earn", desc: "Complete projects, get paid, build portfolio" },
              { num: "4", title: "Get Hired", desc: "Land a job with verified experience" }
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border-2 border-blue-200 text-center shadow-md hover:shadow-lg hover:border-blue-400 transition">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/3 -right-3 items-center text-blue-400 text-2xl">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition shadow-lg inline-flex items-center gap-2"
            >
              Apply for Internship Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-slate-900 mb-4">Why Choose InternMaker?</h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">Real paid internship with real projects, industry mentors, and verified certification</p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;

              return (
                <motion.button
                  key={i}
                  onClick={() => navigate(`/feature/${feature.id}`)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-blue-400 border border-slate-200 transition group text-left cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-md">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition">
                    Learn More →
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-blue-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold mb-4 border border-blue-400/30">Success Stories</div>
            <h2 className="text-5xl font-bold mb-4">From Internship to Dream Job</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Real stories from real interns who got hired after their paid internship</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-800 to-slate-800 rounded-2xl p-8 border border-blue-600 hover:border-blue-400 transition group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-blue-100 mb-6 leading-relaxed italic text-lg">"{testimonial.text}"</p>

                <div className="border-t border-slate-600 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-sm text-blue-300 font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">Limited Time Offer</div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Early Bird Pricing</h2>
            <p className="text-xl text-slate-600">₹49 for your entire paid internship (98% off regular price)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-12 text-white">
                <h3 className="text-2xl font-bold mb-8">What You Get</h3>
                <div className="space-y-4">
                  {[
                    { icon: "✓", title: "5+ Real Projects", desc: "Work on live products used by companies" },
                    { icon: "✓", title: "Get Paid", desc: "Earn while you work on internship tasks" },
                    { icon: "✓", title: "Verified Certificate", desc: "Blockchain-verified internship proof" },
                    { icon: "✓", title: "Job Guarantee", desc: "87% job offer rate within 30 days" },
                    { icon: "✓", title: "Industry Mentors", desc: "1:1 guidance from tech professionals" },
                    { icon: "✓", title: "Alumni Network", desc: "Lifetime access to 5000+ intern community" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">{item.icon}</div>
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-blue-200 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA */}
              <div className="p-12 bg-gradient-to-br from-yellow-400 to-orange-400 text-slate-900 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-widest font-bold mb-4 opacity-80">One-time enrollment fee</p>
                  <div className="mb-2 flex items-start justify-center gap-3">
                    <span className="text-3xl text-slate-700 line-through opacity-60">₹1,999</span>
                    <div>
                      <p className="text-6xl font-black text-slate-900">₹49</p>
                      <p className="text-xs font-bold text-slate-800 mt-1">Save ₹1,950 (98% OFF)</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-slate-800 mb-8 mt-4">Offer expires in {time.h}:{time.m}:{time.sec}</p>
                  <button
                    onClick={() => navigate("/register")}
                    className="w-full py-4 px-6 bg-slate-900 text-yellow-300 font-black text-lg rounded-xl shadow-2xl hover:scale-105 transition transform flex items-center justify-center gap-2 group mb-6"
                  >
                    <span>Claim Your Seat Now</span>
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition" />
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800">
                    <Icon name="lock" className="w-4 h-4" /> 100% Secure Payment
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-slate-600 text-sm">
              Not sure? 📧 <a href="mailto:support@internmaker.com" className="font-bold text-blue-600 hover:underline">Email us your questions</a> or
              <a href="https://wa.me/919691207533" target="_blank" rel="noreferrer" className="font-bold text-green-600 hover:underline"> WhatsApp us</a> - we respond in 2 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Paid Internship?</h2>
          <p className="text-xl text-blue-100 mb-10">Join 5000+ interns who've gained real experience and landed jobs. Apply today and start earning while you learn.</p>
          <button onClick={() => navigate("/register")} className="px-10 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg text-lg shadow-xl hover:scale-105 transition inline-flex items-center gap-2 group">
            Apply For Internship <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">IM</div>
                <span className="font-bold text-white">InternMaker</span>
              </div>
              <p className="text-sm text-slate-500">Real paid internships with real experience and certification.</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate("/syllabus")} className="hover:text-white transition">Internship Details</button></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><button onClick={() => navigate("/support")} className="hover:text-white transition">Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate("/terms")} className="hover:text-white transition">Terms</button></li>
                <li><button onClick={() => navigate("/privacy")} className="hover:text-white transition">Privacy</button></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@internmaker.com" className="hover:text-white transition">Email</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              <p>© 2026 InternMaker. All Rights Reserved.</p>
              <p className="text-slate-600 mt-1">Registered Entity: Ashish Kumar Rathour | Reg No: IM-2024-X89</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => navigate("/privacy")} className="hover:text-white transition">Privacy Policy</button>
              <button onClick={() => navigate("/terms")} className="hover:text-white transition">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
