import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Search, AlertCircle, Loader2 } from "lucide-react";
import { getAllInternships } from "../services/api"; // Your API Helper

const TaskSection = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      // Calls http://localhost:8080/internships via your API service
      const response = await getAllInternships();
      setTasks(response.data || []);
    } catch (err) {
      console.error("Failed to load tasks", err);
      setError("Could not load available internships. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Filter logic (Client-side)
  const filteredTasks = tasks.filter(task => 
    task.title?.toLowerCase().includes(filter.toLowerCase()) ||
    task.description?.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin mb-2 text-blue-600" />
        <p>Loading opportunities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-3 p-4 text-red-700 bg-red-50 rounded-lg border border-red-100">
        <AlertCircle size={20} />
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Available Internships</h2>
          <p className="text-slate-500 text-sm">Select a domain to start your journey</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search domains..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Grid of Tasks */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-10 text-slate-400">
          <Briefcase size={48} className="mx-auto mb-3 opacity-20" />
          <p>No internships found matching your search.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Briefcase size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  Open
                </span>
              </div>
              
              <h3 className="font-bold text-slate-800 mb-2 line-clamp-1">{task.title}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-1">
                {task.description || "No description provided."}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar size={14} />
                  <span>4 Weeks</span>
                </div>
                <button className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Apply Now <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskSection;