import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, AlertTriangle } from "lucide-react";

export default function LogoutButton() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_avatar");
    navigate("/login");
  };

  return (
    <>
      {/* --- TRIGGER BUTTON --- */}
      {/* This matches the style you asked for */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-slate-50 group"
      >
        <LogOut 
          size={18} 
          className="text-slate-400 group-hover:text-red-600 transition-colors duration-200" 
        />
        <span className="text-sm font-medium text-slate-600 group-hover:text-red-700 transition-colors duration-200">
          Sign Out
        </span>
      </button>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full max-w-xs rounded-xl shadow-2xl overflow-hidden z-10 p-6 text-center"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Sign Out?</h3>
              <p className="text-xs text-slate-500 mb-6">You will be returned to the login screen.</p>
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="flex-1 py-2 bg-slate-100 text-slate-600 font-bold rounded text-xs hover:bg-slate-200">Cancel</button>
                <button onClick={handleLogout} className="flex-1 py-2 bg-red-600 text-white font-bold rounded text-xs hover:bg-red-700">Logout</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}