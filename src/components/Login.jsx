import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ArrowRight, Loader2, AlertCircle, CheckSquare, Square } from "lucide-react";

// --- IMPORT YOUR API SERVICE ---
import API from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Helper: Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Client-Side Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      // ✅ HARDCODED ADMIN LOGIN
      // Check if credentials match admin
      if (formData.email === "admin@internmaker.com" && formData.password === "admin123") {
        const storage = rememberMe ? localStorage : sessionStorage;

        // Create a fake token for admin (or you can generate a real one)
        const adminToken = "ADMIN_TOKEN_" + Date.now();
        storage.setItem("token", adminToken);
        storage.setItem("userName", "Admin");
        storage.setItem("role", "admin");

        console.log("Admin login successful");
        navigate("/admin/dashboard");
        return;
      }

      // ✅ NORMAL STUDENT LOGIN
      // Backend expects { "email": "...", "password": "..." }
      const loginPayload = {
        email: formData.email,
        password: formData.password
      };

      console.log("Sending Login Request:", loginPayload); // Debug log
      const response = await API.post("/api/auth/login", loginPayload);

      console.log("Login Success:", response.data); // Debug log
      const data = response.data;

      // 3. Handle Success & Storage Strategy
      if (data && data.token) {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("token", data.token);

        // Save user details if available
        if (data.name) storage.setItem("userName", data.name);
        // Normalize role key to `role` and store as lowercase for consistent checks
        if (data.role) storage.setItem("role", String(data.role).toLowerCase());

        // 4. Role-Based Redirect (Only STUDENT now, INSTRUCTOR removed)
        // All non-admin users go to user_dashboard
        navigate("/user_dashboard");
      } else {
        throw new Error("Token missing in server response");
      }

    } catch (err) {
      console.error("Login Error:", err);

      // 5. Robust Error Handling
      if (!err?.response) {
        setError("Cannot connect to server. Is the backend running?");
      } else if (err.response.status === 401 || err.response.status === 403) {
        setError("Invalid email or password.");
      } else if (err.response.status === 404) {
        setError("Endpoint not found. Check API path.");
      } else {
        setError(err.response?.data?.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ... (Rest of your UI JSX remains exactly the same) ...
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-800 rounded-xl text-white font-bold text-xl shadow-sm mb-4">IM</div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome Back</h2>
        <p className="mt-2 text-slate-500 text-sm">Sign in to access your dashboard</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-xl sm:px-10 border border-slate-100"
        >

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-4 border border-red-100 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="student@university.edu"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-bold text-slate-700">Password</label>
                <a href="/forgot-password" className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center text-sm text-slate-600 hover:text-slate-900 gap-2 focus:outline-none"
              >
                {rememberMe
                  ? <CheckSquare size={18} className="text-blue-700" />
                  : <Square size={18} className="text-slate-400" />
                }
                Remember me for 30 days
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg shadow-blue-800/20 text-sm font-bold text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : "Sign In"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Not a member yet? <button onClick={() => navigate("/register")} className="font-bold text-blue-700 hover:text-blue-800 hover:underline transition">Apply for Internship</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;