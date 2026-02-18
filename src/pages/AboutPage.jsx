import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award, Users, Globe, Target, CheckCircle,
  TrendingUp, Heart, Zap, ArrowRight, Briefcase
} from "lucide-react";

function AboutPage() {
  const navigate = useNavigate();

  const values = [
    { icon: Target, title: "Mission", desc: "Provide real-world internship experience that directly leads to employment" },
    { icon: Users, title: "Community", desc: "Build a supportive network of interns, mentors, and industry professionals" },
    { icon: Zap, title: "Innovation", desc: "Continuously improve and evolve our program to match industry demands" },
    { icon: Heart, title: "Integrity", desc: "Maintain transparency and ethical standards in all our operations" }
  ];

  const stats = [
    { number: "5000+", label: "Interns Placed" },
    { number: "87%", label: "Job Conversion Rate" },
    { number: "50+", label: "Partner Companies" },
    { number: "10", label: "Week Program" }
  ];

  const team = [
    { name: "Ashish Kumar Rathour", role: "Founder & CEO", emoji: "👨‍💼" },
    { name: "Expert Mentors", role: "From Top Tech Companies", emoji: "👨‍🏫" },
    { name: "Industry Professionals", role: "Real Project Leads", emoji: "👩‍💻" },
    { name: "Success Team", role: "Your Career Support", emoji: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">


      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-bold mb-6">
              <Award size={16} /> About InternMaker
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Real Internships for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">Real Impact</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              We believe internships should be more than training. They should be a gateway to meaningful employment with real work, real mentorship, and real compensation.
            </p>
            <button onClick={() => navigate("/register")} className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition inline-flex items-center gap-2 group">
              Start Your Internship <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white border-y border-blue-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              InternMaker was founded with a simple observation: traditional internships don't prepare students for the real world. Most are unpaid, theoretical, or both.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              We decided to change that. We built a platform where students work on real projects for real companies, get paid for their contributions, and earn verified credentials that employers actually value.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, over 5000 interns have gone through our program, with an 87% job conversion rate. We're proud of that impact, and we're just getting started.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 shadow-lg">
              <div className="text-center">
                <p className="text-6xl mb-4">🚀</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Built for Change</h3>
                <p className="text-slate-600">We're on a mission to bridge the gap between education and employment through real, paid internship experience.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">What guides every decision we make</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg border border-blue-100 hover:border-blue-400 transition group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <IconComponent size={28} className="text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Experienced professionals committed to your success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-md text-center border border-blue-100 hover:border-purple-400 hover:shadow-lg transition group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{member.emoji}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 border-y border-blue-200">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Why Choose InternMaker?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">What sets us apart from other internship programs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💰", title: "Get Paid", desc: "Unlike traditional internships, you earn money for your work. Start with just ₹49 and grow your income." },
              { icon: "🎯", title: "Real Projects", desc: "Work on live projects used by actual companies, not dummy assignments. Build a real portfolio." },
              { icon: "📜", title: "Verified Certificate", desc: "Blockchain-verified credentials that employers trust. More valuable than traditional certificates." },
              { icon: "👔", title: "Job Guarantee", desc: "87% of our interns receive job offers. Top performers get hired directly by companies." },
              { icon: "👨‍🏫", title: "Expert Mentorship", desc: "Learn from industry professionals with years of real-world experience. Get personalized guidance." },
              { icon: "🌐", title: "Global Community", desc: "Join 5000+ interns from around the world. Network and grow with peers in your field." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md border border-blue-100 hover:border-blue-400 hover:shadow-lg transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-10">Join thousands of interns earning real money and gaining real experience. Apply today.</p>
          <button onClick={() => navigate("/register")} className="px-10 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg text-lg shadow-xl hover:scale-105 transition inline-flex items-center gap-2 group">
            Apply For Internship <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
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

export default AboutPage;
