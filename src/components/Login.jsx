// src/components/Login.jsx
import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });
      const token = res.data.token;

      if (!token) throw new Error("No token");
      localStorage.setItem("token", token);
      navigate("/user_dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-gray-800 overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-700 rounded-full opacity-40 animate-blob"></div>
      <div className="absolute top-[50%] left-[70%] w-[300px] h-[300px] bg-pink-600 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-blue-600 rounded-full opacity-40 animate-blob animation-delay-4000"></div>

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md rounded-3xl bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-gray-700 p-8 z-10"
      >
        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            InternMaker
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Welcome back. Sign in to continue.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-600 bg-red-900/30 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-gray-700 bg-gray-900/80 px-4 py-3 text-sm text-white
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition backdrop-blur-sm"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-2xl border border-gray-700 bg-gray-900/80 px-4 py-3 text-sm text-white
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition pr-12 backdrop-blur-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-200 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-pink-400 hover:text-pink-300 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !email || !password}
            className={`w-full rounded-2xl py-3 text-sm font-semibold text-white transition-all duration-200
              ${loading || !email || !password
                ? "bg-pink-900 cursor-not-allowed"
                : "bg-pink-700 hover:bg-pink-600 hover:shadow-lg active:scale-[0.98]"
              }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-pink-400 hover:underline cursor-pointer"
          >
            Create one
          </span>
        </p>
      </motion.div>

      {/* Blob animations */}
      <style>
        {`
          .animate-blob {
            animation: blob 20s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }

          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
