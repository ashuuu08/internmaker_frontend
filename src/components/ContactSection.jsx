import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, MessageCircle, MapPin, Clock, Send, 
  Loader2, CheckCircle, AlertCircle, HeadphonesIcon, ArrowRight, Zap
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    subject: "General Inquiry",
    message: "" 
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- HERO HEADER --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
              🎯 WE'RE HERE TO HELP
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent mb-4">
            Get Support Instantly
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about your internship, projects, or certification? Our dedicated support team responds within 
            <span className="font-bold text-blue-600"> 2-4 hours</span>. We're committed to your success.
          </p>
        </motion.div>

        {/* --- QUICK CONTACT CARDS --- */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Support</h3>
              <p className="text-sm text-slate-600 mb-6">Detailed queries about internship tasks, projects & certifications</p>
              <a href="mailto:support@internmaker.com" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                support@internmaker.com <ArrowRight size={16}/>
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Priority</h3>
              <p className="text-sm text-slate-600 mb-6">Fastest response for urgent technical issues & blockers</p>
              <a href="https://wa.me/919691207533" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all">
                +91 96912 07533 <ArrowRight size={16}/>
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HeadphonesIcon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Support</h3>
              <p className="text-sm text-slate-600 mb-6">Speak directly with our success team during business hours</p>
              <a href="tel:+919691207533" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all">
                +91 9691 207 533 <ArrowRight size={16}/>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* --- MAIN SECTION: FORM + INFO --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Office Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Office Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-md border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6">Office Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Corporate Office</p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      InternMaker HQ, Tech Park,<br/>
                      Barauda, Chhattisgarh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Operating Hours</p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      Mon - Fri: 09:00 AM - 06:00 PM IST<br/>
                      Sat - Sun: Support available
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Quick Links */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap size={20} className="text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Quick Help</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    <ArrowRight size={16} /> Certificate Issues?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    <ArrowRight size={16} /> Task Not Clear?
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    <ArrowRight size={16} /> Payment Help
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">Send us a Message</h3>
                  <p className="text-slate-600 text-sm mt-2">We'll get back to you within 2-4 hours</p>
                </div>
                {status === "error" && (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg border border-red-200"
                  >
                    <AlertCircle size={18} className="text-red-600" />
                    <span className="text-sm font-bold text-red-700">Please fill all fields</span>
                  </motion.div>
                )}
              </div>

              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[450px] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl border-2 border-green-200"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Received! ✨</h3>
                  <p className="text-slate-600 mt-3 max-w-md leading-relaxed">
                    Your support request has been recorded. <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">#IM-{Math.floor(Math.random()*10000)}</span>
                    <br/>
                    <span className="text-sm">We'll contact you at <span className="font-semibold text-blue-600">{formData.email}</span> shortly.</span>
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ashish Kumar"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ashish@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Department / Issue Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition text-sm text-slate-700"
                    >
                      <option>General Inquiry</option>
                      <option>Technical Support (Code/GitHub)</option>
                      <option>Offer Letter / Certificate Issue</option>
                      <option>Billing & Enrollment</option>
                      <option>Internship Assignment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us what's on your mind. The more details, the faster we can help..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition text-sm resize-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                      We respect your privacy. <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 disabled:shadow-none"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
