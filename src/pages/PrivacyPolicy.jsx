import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "1. Introduction",
      content: "InternMaker ('we' or 'us' or 'our') operates the InternMaker website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data."
    },
    {
      title: "2. Information Collection and Use",
      content: "We collect several different types of information for various purposes to provide and improve our Service to you. This may include information like your name, email address, phone number, and educational background. We use this information to create your account, process your enrollment, send you service updates, and improve our platform."
    },
    {
      title: "3. Security of Data",
      content: "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
    },
    {
      title: "4. Changes to This Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy."
    },
    {
      title: "5. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@internmaker.com or by mail at our registered office address."
    },
    {
      title: "6. Data Retention",
      content: "We retain your personal data for as long as necessary to provide our services. If you request deletion of your account, we will remove your personal information within 30 days, except where we are required to retain it by law."
    },
    {
      title: "7. Cookies",
      content: "We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "8. Third-Party Services",
      content: "Our Service may contain links to third-party services that are not operated by us. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing your information."
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded shadow-sm font-bold">IM</div>
            <span className="text-lg font-bold text-slate-900">InternMaker</span>
          </button>
          <button onClick={() => navigate("/")} className="text-slate-600 hover:text-blue-900 font-semibold transition">← Back</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-300">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm">
          &copy; 2026 InternMaker. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
