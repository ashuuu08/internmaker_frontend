import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

function SupportPage() {
  const navigate = useNavigate();

  const faqs = [
    {
      q: "What are the course prerequisites?",
      a: "Basic programming knowledge is helpful but not required. We cover fundamentals. You should be comfortable with logic and problem-solving."
    },
    {
      q: "How long does the course take to complete?",
      a: "The structured program is 10 weeks. However, you have access to all materials for 3 months after enrollment."
    },
    {
      q: "Is the certificate recognized by employers?",
      a: "Yes! Our certificates are digitally signed, verified, and recognized by top tech companies. They're also valid for college credits."
    },
    {
      q: "Can I get a refund?",
      a: "We offer a 7-day money-back guarantee if you're not satisfied. After that, no refunds, but lifetime access is included."
    },
    {
      q: "What if I need help during the course?",
      a: "24/7 mentor support via chat, email, and weekly Q&A sessions. We're here to help you succeed."
    },
    {
      q: "Do I get job assistance?",
      a: "Yes! We provide resume review, interview prep, and connect top performers with hiring partners."
    },
  ];

  const contactMethods = [
    { icon: Mail, title: "Email", text: "support@internmaker.com", action: "mailto:support@internmaker.com" },
    { icon: Phone, title: "Phone", text: "+1 (555) 123-4567", action: "tel:+15551234567" },
    { icon: MapPin, title: "Address", text: "123 Tech Street, San Francisco, CA", action: null },
    { icon: MessageSquare, title: "Live Chat", text: "Available 9 AM - 9 PM EST", action: null },
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">We're Here to Help</h1>
          <p className="text-xl text-slate-300">Have questions? Contact us or check our FAQ below.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-blue-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{method.title}</h3>
                  {method.action ? (
                    <a href={method.action} className="text-blue-600 hover:underline text-sm font-medium">
                      {method.text}
                    </a>
                  ) : (
                    <p className="text-slate-600 text-sm">{method.text}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition"
              >
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
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

export default SupportPage;
