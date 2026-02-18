import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3, Users, FileText, Settings, LogOut, Menu, X, Plus,
  Edit2, Trash2, Eye, Search, Filter, Download, TrendingUp,
  AlertCircle, CheckCircle, Clock, MoreVertical, Home
} from "lucide-react";
import { motion } from "framer-motion";
import API from "../services/api";

function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [studentSearchQuery, setStudentSearchQuery] = useState("");
  const [courseSearchQuery, setCourseSearchQuery] = useState("");
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  // State for dynamic data
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState([
    { label: "Total Students", value: "0", change: "+0%", icon: Users, color: "blue" },
    { label: "Active Courses", value: "0", change: "+0", icon: FileText, color: "green" },
    { label: "Completion Rate", value: "0%", change: "+0%", icon: TrendingUp, color: "purple" },
    { label: "Avg. Rating", value: "0/5", change: "+0", icon: CheckCircle, color: "yellow" },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form data
  const [studentForm, setStudentForm] = useState({ name: "", email: "", course: "", status: "Pending" });
  const [courseForm, setCourseForm] = useState({ name: "", instructor: "", duration: "", status: "Active" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError("");
    try {
      // Fetch stats, students, and courses from backend
      const [statsRes, studentsRes, coursesRes] = await Promise.all([
        API.get("/api/dashboard/admin/stats").catch(() => ({ data: null })),
        API.get("/api/students").catch(() => ({ data: [] })),
        API.get("/courses").catch(() => ({ data: [] })),
      ]);

      // Update stats if available
      if (statsRes.data) {
        const statsData = statsRes.data;
        setStats([
          { label: "Total Students", value: statsData.totalStudents || "0", change: "+12%", icon: Users, color: "blue" },
          { label: "Active Courses", value: statsData.activeCourses || "0", change: "+2", icon: FileText, color: "green" },
          { label: "Completion Rate", value: (statsData.completionRate || 0) + "%", change: "+5%", icon: TrendingUp, color: "purple" },
          { label: "Avg. Rating", value: (statsData.avgRating || 0) + "/5", change: "+0.2", icon: CheckCircle, color: "yellow" },
        ]);
      }

      // Update students
      if (studentsRes.data && Array.isArray(studentsRes.data)) {
        setStudents(studentsRes.data);
      }

      // Update courses
      if (coursesRes.data && Array.isArray(coursesRes.data)) {
        setCourses(coursesRes.data);
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError("Failed to load dashboard data. Using default view.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await API.post("/api/students", studentForm);
      setStudents([...students, response.data]);
      setStudentForm({ name: "", email: "", course: "", status: "Pending" });
      setShowAddStudentModal(false);
      alert("Student added successfully!");
    } catch (err) {
      alert("Failed to add student: " + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await API.post("/courses", courseForm);
      setCourses([...courses, response.data]);
      setCourseForm({ name: "", instructor: "", duration: "", status: "Active" });
      setShowAddCourseModal(false);
      alert("Course added successfully!");
    } catch (err) {
      alert("Failed to add course: " + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await API.delete(`/api/students/${id}`);
      setStudents(students.filter(s => s.id !== id));
      alert("Student deleted successfully!");
    } catch (err) {
      alert("Failed to delete student: " + (err.response?.data?.message || err.message));
    }
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await API.delete(`/courses/${id}`);
      setCourses(courses.filter(c => c.id !== id));
      alert("Course deleted successfully!");
    } catch (err) {
      alert("Failed to delete course: " + (err.response?.data?.message || err.message));
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/login");
  };

  // Filter students based on search query
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(studentSearchQuery.toLowerCase())
  );

  // Filter courses based on search query
  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(courseSearchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(courseSearchQuery.toLowerCase())
  );

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    const colorClasses = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
      yellow: "bg-yellow-50 text-yellow-600",
    };

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</h3>
            <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
          </div>
          <div className={`${colorClasses[stat.color]} p-4 rounded-lg`}>
            <Icon size={24} />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* --- SIDEBAR --- */}
      <motion.div
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 80 }}
        className="bg-slate-900 text-white transition-all duration-300 flex flex-col shadow-lg"
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!sidebarOpen && "justify-center w-full"}`}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
              IM
            </div>
            {sidebarOpen && <span className="font-bold text-lg">InternMaker</span>}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-6 space-y-2">
          {[
            { id: "overview", label: "Overview", icon: Home },
            { id: "students", label: "Students", icon: Users },
            { id: "courses", label: "Courses", icon: FileText },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 5 }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800"
              }`}
            >
              <item.icon size={18} />
              {sidebarOpen && <span>{item.label}</span>}
            </motion.button>
          ))}
        </nav>

        {/* Logout & Toggle */}
        <div className="p-3 border-t border-slate-700 space-y-2">
          <motion.button
            whileHover={{ x: 5 }}
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium"
          >
            <LogOut size={18} />
            {sidebarOpen && <span>Logout</span>}
          </motion.button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center p-2 hover:bg-slate-800 rounded-lg transition"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "students" && "Student Management"}
              {activeTab === "courses" && "Course Management"}
              {activeTab === "settings" && "Settings"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {activeTab === "overview" && "Welcome back, Admin. Here's your dashboard summary."}
              {activeTab === "students" && "Manage all enrolled students and their progress."}
              {activeTab === "courses" && "Create, edit, and manage courses."}
              {activeTab === "settings" && "Configure system settings and preferences."}
            </p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8">
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Loading dashboard data...</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
              <AlertCircle size={20} className="text-yellow-600" />
              <p className="text-yellow-800">{error}</p>
              <button onClick={fetchDashboardData} className="ml-auto text-yellow-600 underline">Retry</button>
            </motion.div>
          )}
          {/* ========== OVERVIEW TAB ========== */}
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: "New student enrollment", time: "2 hours ago", icon: CheckCircle, color: "green" },
                      { action: "Course completion: Node.js", time: "5 hours ago", icon: CheckCircle, color: "blue" },
                      { action: "Certificate issued to Ashish K.", time: "1 day ago", icon: FileText, color: "purple" },
                      { action: "New course published: AI/ML", time: "2 days ago", icon: Plus, color: "yellow" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                        <div className={`p-2 rounded-lg ${item.color === "green" ? "bg-green-100 text-green-600" : item.color === "blue" ? "bg-blue-100 text-blue-600" : item.color === "purple" ? "bg-purple-100 text-purple-600" : "bg-yellow-100 text-yellow-600"}`}>
                          <item.icon size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.action}</p>
                          <p className="text-xs text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Course Progress</span>
                        <span className="text-sm font-bold text-gray-900">68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Student Satisfaction</span>
                        <span className="text-sm font-bold text-gray-900">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Placement Rate</span>
                        <span className="text-sm font-bold text-gray-900">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========== STUDENTS TAB ========== */}
          {activeTab === "students" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Header with Search and Add Button */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search students by name or email..."
                    value={studentSearchQuery}
                    onChange={(e) => setStudentSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => setShowAddStudentModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  <Plus size={18} /> Add Student
                </button>
              </div>

              {/* Students Table */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Enroll Date</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                            No students found. {students.length === 0 && "Add your first student!"}
                          </td>
                        </tr>
                      ) : (
                        filteredStudents.map((student) => (
                          <motion.tr
                            key={student.id}
                            whileHover={{ backgroundColor: "#f9fafb" }}
                            className="border-b border-gray-200 hover:bg-gray-50 transition"
                          >
                            <td className="px-6 py-3 text-sm font-medium text-gray-900">{student.name}</td>
                            <td className="px-6 py-3 text-sm text-gray-600">{student.email}</td>
                            <td className="px-6 py-3 text-sm text-gray-600">{student.course}</td>
                            <td className="px-6 py-3">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(student.status)}`}>
                                {student.status}
                              </span>
                            </td>
                            <td className="px-6 py-3 text-sm text-gray-600">{student.enrollDate || new Date().toLocaleDateString()}</td>
                            <td className="px-6 py-3 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <button className="p-1 hover:bg-blue-50 rounded transition text-blue-600" title="View">
                                  <Eye size={16} />
                                </button>
                                <button className="p-1 hover:bg-yellow-50 rounded transition text-yellow-600" title="Edit">
                                  <Edit2 size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteStudent(student.id)}
                                  className="p-1 hover:bg-red-50 rounded transition text-red-600" 
                                  title="Delete"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add Student Modal */}
              {showAddStudentModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Student</h2>
                    <form onSubmit={handleAddStudent} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input
                          type="text"
                          required
                          value={studentForm.name}
                          onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={studentForm.email}
                          onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                        <select
                          value={studentForm.course}
                          onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a course</option>
                          {courses.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={studentForm.status}
                          onChange={(e) => setStudentForm({ ...studentForm, status: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Active">Active</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setShowAddStudentModal(false)}
                          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                        >
                          {isSubmitting ? "Adding..." : "Add Student"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}

          {/* ========== COURSES TAB ========== */}
          {activeTab === "courses" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Header with Search and Add Button */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={courseSearchQuery}
                    onChange={(e) => setCourseSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => setShowAddCourseModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  <Plus size={18} /> Add Course
                </button>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredCourses.length === 0 ? (
                  <div className="col-span-full text-center py-12 text-gray-500">
                    No courses found. {courses.length === 0 && "Create your first course!"}
                  </div>
                ) : (
                  filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{course.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">Instructor: {course.instructor || "N/A"}</p>
                        </div>
                        <button className="p-1 hover:bg-gray-100 rounded transition">
                          <MoreVertical size={18} className="text-gray-400" />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-gray-200">
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold">Students</p>
                          <p className="text-xl font-bold text-gray-900">{course.enrolledStudents || 0}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold">Duration</p>
                          <p className="text-lg font-bold text-gray-900">{course.duration || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold">Status</p>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mt-1 ${getStatusColor(course.status)}`}>
                            {course.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition">
                          <Eye size={16} /> View
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-yellow-50 text-yellow-600 font-medium rounded-lg hover:bg-yellow-100 transition">
                          <Edit2 size={16} /> Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteCourse(course.id)}
                          className="flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Add Course Modal */}
              {showAddCourseModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Course</h2>
                    <form onSubmit={handleAddCourse} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                        <input
                          type="text"
                          required
                          value={courseForm.name}
                          onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Java Full Stack"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Instructor Name</label>
                        <input
                          type="text"
                          required
                          value={courseForm.instructor}
                          onChange={(e) => setCourseForm({ ...courseForm, instructor: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Dr. Sharma"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                        <input
                          type="text"
                          required
                          value={courseForm.duration}
                          onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 12 weeks"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={courseForm.status}
                          onChange={(e) => setCourseForm({ ...courseForm, status: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Active">Active</option>
                          <option value="Completed">Completed</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setShowAddCourseModal(false)}
                          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                        >
                          {isSubmitting ? "Creating..." : "Add Course"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}

          {/* ========== SETTINGS TAB ========== */}
          {activeTab === "settings" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">System Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                      <input type="text" defaultValue="InternMaker" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                      <input type="email" defaultValue="support@internmaker.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Students Per Course</label>
                      <input type="number" defaultValue="150" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    {["Email notifications", "SMS alerts", "Dashboard alerts"].map((notif) => (
                      <label key={notif} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300" />
                        <span className="text-sm text-gray-700">{notif}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex gap-3">
                  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                    Save Changes
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;