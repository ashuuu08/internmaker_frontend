import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, Mail, BookOpen, Calendar, CheckCircle, 
  ArrowRight, Loader2, ShieldCheck, Phone 
} from "lucide-react";


export default function EnrollmentSection() {
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Java Full Stack", // Default
    batch: "Morning (10 AM - 12 PM)" // Default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      // Basic validation visual cue could go here
      return;
    }
    
    setLoading(true);
    
    // Simulate API processing
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const goToPayment = () => {
    const paymentEl = document.getElementById("payment");
    if (paymentEl) {
      paymentEl.scrollIntoView({ behavior: "smooth" });
    } else {
        // Fallback if component is on a different page
        window.location.href = "/payment"; 
    }
  };

  return (
    <section id="enrollment" className="py-12 px-4 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            Step 1 of 2
          </span>
          <h2 className="text-3xl font-bold text-slate-900">Secure Your Internship Seat</h2>
          <p className="text-slate-500 mt-2 max-w-lg mx-auto">
            Fill in your details to generate your provisional offer letter. 
            Payment is required in the next step to confirm your batch.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* --- LEFT SIDE: THE FORM --- */}
          <div className="p-8 md:w-2/3">
            {step === 1 ? (
              <form onSubmit={handleEnroll} className="space-y-6">
                
                {/* Personal Info Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 text-slate-400" size={18} />
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Ashish Kumar"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 text-slate-400" size={18} />
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        placeholder="student@college.edu"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 text-slate-400" size={18} />
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition"
                      />
                    </div>
                </div>

                {/* Track Selection */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Select Internship Track</label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-2.5 text-slate-400" size={18} />
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option>Java Full Stack Development</option>
                      <option>MERN Stack Development</option>
                      <option>Frontend Engineering (React)</option>
                      <option>Data Structures & Algorithms</option>
                    </select>
                  </div>
                </div>

                {/* Batch Selection */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Preferred Batch Timing</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 text-slate-400" size={18} />
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option>Morning Batch (10:00 AM - 12:00 PM)</option>
                      <option>Evening Batch (06:00 PM - 08:00 PM)</option>
                      <option>Weekend Batch (Sat-Sun Intensive)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition disabled:opacity-70 shadow-lg shadow-blue-700/20"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : "Proceed to Selection"}
                  {!loading && <ArrowRight size={20} />}
                </button>
              
              </form>
            ) : (
              // --- SUCCESS STATE ---
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
                  <p className="text-slate-500 mt-2">
                    Your provisional enrollment for <span className="font-semibold text-slate-800">{formData.track}</span> is successful.
                  </p>
                </div>
                
                <div className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-sm space-y-2">
                   <div className="flex justify-between">
                      <span className="text-slate-500">Applicant:</span>
                      <span className="font-semibold text-slate-900">{formData.name}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-500">Batch:</span>
                      <span className="font-semibold text-slate-900">{formData.batch}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-500">Reg Fee:</span>
                      <span className="font-bold text-green-600">₹49.00</span>
                   </div>
                </div>

                <button
                  onClick={goToPayment}
                  className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                >
                  Pay Registration Fee <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* --- RIGHT SIDE: SUMMARY/INFO --- */}
          <div className="bg-slate-900 p-8 md:w-1/3 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Why Enroll Now?</h3>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    <span>Instant access to LMS Dashboard after payment.</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    <span>Generated Offer Letter valid for college submission.</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    <span>Limited seats available in the upcoming batch.</span>
                 </li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                   <ShieldCheck size={14} /> Official Partner
                </div>
                <p className="text-sm font-semibold text-slate-200">Ashish Kumar Rathour EduTech Pvt. Ltd.</p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}