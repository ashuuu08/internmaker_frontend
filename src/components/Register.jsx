import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User, Mail, Lock, Eye, EyeOff, ArrowRight,
  Loader2, Phone, ShieldCheck, Briefcase, CheckCircle, XCircle
} from "lucide-react";

import API from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "STUDENT" // Changed referralCode to role (default: student)
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [trId, setTrId] = useState("");

  const navigate = useNavigate();

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      role: "STUDENT"
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* --- PAYMENT LOGIC --- */
  const handlePayAndRegister = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Basic Validation
    if (!formData.email || !formData.password || !formData.fullName) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      // 2. Open Razorpay Payment Link in New Tab
      const RAZORPAY_LINK = "https://rzp.io/rzp/FgHhtt2B";
      window.open(RAZORPAY_LINK, "_blank");

      // 3. Show Confirmation Modal
      setShowConfirmation(true);
      setLoading(false);
    } catch (err) {
      console.error("Payment Link Error:", err);
      setError("Failed to open payment page. Please try again.");
      setLoading(false);
    }
  };

  const confirmPaymentAndRegister = async (paymentDetails) => {
    setError("");
    setLoading(true);

    if (!trId || trId.length < 5) {
      setError("Please enter a valid Transaction ID.");
      setLoading(false);
      return;
    }

    try {
      console.log("Confirming payment and registering user...");

      // 5. Verification with Transaction ID
      const registrationData = {
        ...formData,
        orderId: "LINK_PAYMENT",
        paymentId: trId,
        signature: "MANUAL_VERIFICATION"
      };

      const response = await API.post("/api/auth/register", registrationData);

      // 6. Success -> Redirect
      localStorage.setItem('paymentStatus', 'completed');
      alert("Payment Successful & Registration Complete! Please login.");
      navigate("/login");
      setTrId("");
      resetForm();
      setShowConfirmation(false);
    } catch (err) {
      console.error("Registration Failed:", err);
      setError(err.response?.data?.message || "Registration failed after payment. Please contact support.");
      resetForm(); // Clear inputs on failed registration
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="min-h-screen bg-white flex font-sans relative">

      {/* --- PAYMENT CONFIRMATION MODAL --- */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-blue-900 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={24} />
                <span className="font-bold text-lg">Confirm Your Payment</span>
              </div>
              <button
                onClick={() => setShowConfirmation(false)}
                className="hover:bg-white/10 p-1 rounded transition"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-blue-100 animate-pulse">
                <CheckCircle size={40} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">Enter Transaction ID</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Have you paid <span className="font-bold text-slate-900">₹1</span>?<br />
                Check your email/SMS from Razorpay for the ID starting with <span className="font-bold text-blue-600">pay_...</span>
              </p>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="pay_xxxxxxxxxxxxxx"
                  value={trId}
                  onChange={(e) => setTrId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-center font-mono"
                />
                {error && <p className="text-xs text-red-500 mt-2 font-medium">{error}</p>}
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => confirmPaymentAndRegister()}
                  disabled={loading || !trId}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
                  I've Completed the Payment
                </button>

                <button
                  onClick={() => setShowConfirmation(false)}
                  className="w-full text-slate-500 text-sm font-semibold hover:text-slate-700 transition"
                >
                  I'm still paying...
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- LEFT SIDE: ADMISSION FORM --- */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-[480px] xl:w-[550px] bg-white border-r border-slate-100 z-10">
        <div className="mx-auto w-full max-w-sm lg:w-96">

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-lg text-white font-bold text-lg flex items-center justify-center shadow-sm">IM</div>
              <span className="font-bold text-xl text-slate-900">InternMaker</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Winter Batch 2026
            </div>

            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Create Account</h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and pay <span className="font-bold text-slate-900">₹1</span> to secure your spot.
            </p>
          </div>

          <form onSubmit={handlePayAndRegister} className="space-y-4">

            {error && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600 flex items-center gap-2">
                <ShieldCheck size={16} /> {error}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User size={18} />
                </div>
                <input name="fullName" type="text" required placeholder="Ashish Kumar" value={formData.fullName} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input name="email" type="email" required placeholder="student@college.edu" value={formData.email} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">WhatsApp Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone size={18} />
                </div>
                <input name="phone" type="tel" placeholder="+91 XXXXX-XXXXX" value={formData.phone} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Set Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input name="password" type={showPassword ? "text" : "password"} required placeholder="Minimum 8 characters" value={formData.password} onChange={handleChange} className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* NEW SECTION: Role Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Select Role</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Briefcase size={18} />
                </div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none"
                >
                  <option value="STUDENT">Student</option>
                </select>
                {/* Custom arrow for select */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg shadow-blue-800/20 text-sm font-bold text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6">
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Pay ₹1 & Register
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-400 mt-4">
              By clicking Apply, you agree to the <a href="#" className="underline">Terms of Service</a>.
            </p>
          </form>

          <div className="mt-8 text-center text-sm border-t border-slate-100 pt-6">
            <span className="text-slate-500">Already have an account? </span>
            <button onClick={() => navigate("/login")} className="font-semibold text-blue-700 hover:underline">Login Here</button>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: TRAINING PREVIEW --- */}
      <div className="hidden lg:block relative flex-1 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]"></div>

        <div className="relative h-full flex flex-col justify-center p-16 text-white z-10">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="max-w-lg">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Build your future with <span className="text-blue-400">Real Experience.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><ShieldCheck size={24} className="text-blue-400" /></div>
                <div>
                  <h3 className="font-bold text-lg">Verified Certification</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Get a certificate that is recognized by colleges and companies. Valid for industrial training credits.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Briefcase size={24} className="text-green-400" /></div>
                <div>
                  <h3 className="font-bold text-lg">100% Project Based</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">No boring lectures. You will build 5+ live projects including E-commerce, Chat Apps, and Banking Systems.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=2" alt="" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-white">42 Students</p>
                <p className="text-slate-400 text-xs">Joined in the last 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Register;