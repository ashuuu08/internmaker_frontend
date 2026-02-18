import axios from "axios";

// 1. Create the Axios Instance
const API = axios.create({
  // ⚠️ ADJUST THIS: If your backend has "server.servlet.context-path=/api" in application.properties, keep "/api".
  // If not, use just "http://localhost:8080" and add paths manually.
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Request Interceptor (Adds the JWT Token to every request)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Response Interceptor (Optional: Handle Token Expiration globally)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // If 401 Unauthorized, token might be expired. Redirect to login.
    if (error.response && error.response.status === 401) {
      // localStorage.removeItem("token");
      // window.location.href = "/login"; // Optional auto-logout
    }
    return Promise.reject(error);
  }
);

// --- AUTH API ---
// ✅ FIX: Use /api/auth to match backend @RequestMapping("/api/auth")
export const loginUser = (data) => API.post("/api/auth/login", data);
export const registerUser = (data) => API.post("/api/auth/register", data);

// --- INTERNSHIP API CALLS ---

// Get all internships (Public or Authenticated)
// Matches Backend: @GetMapping("/internships")
export const getAllInternships = async () => {
  return await API.get("/internships");
};

// Create a new internship (Admin Only)
// Matches Backend: @PostMapping("/internships")
export const createInternship = async (internshipData) => {
  return await API.post("/internships", internshipData);
};

// --- COURSE API CALLS ---

// Get all courses
// Matches Backend: @GetMapping("/courses")
export const getAllCourses = async () => {
  return await API.get("/courses");
};

// Create a new course (Admin/Instructor Only)
// Matches Backend: @PostMapping("/courses")
export const createCourse = async (courseData) => {
  return await API.post("/courses", courseData);
};

// --- STUDENT API CALLS ---

// Get all students (Admin Only)
export const getAllStudents = async () => {
  return await API.get("/api/students");
};

// Get student by ID
export const getStudentById = async (studentId) => {
  return await API.get(`/api/students/${studentId}`);
};

// Create a new student (Admin Only)
export const createStudent = async (studentData) => {
  return await API.post("/api/students", studentData);
};

// Update a student (Admin Only)
export const updateStudent = async (studentId, studentData) => {
  return await API.put(`/api/students/${studentId}`, studentData);
};

// Delete a student (Admin Only)
export const deleteStudent = async (studentId) => {
  return await API.delete(`/api/students/${studentId}`);
};

// --- DASHBOARD API CALLS ---

// Get current user's dashboard data
export const getUserDashboard = async () => {
  return await API.get("/api/dashboard/me");
};

// Get current user's enrollments
export const getUserEnrollments = async () => {
  return await API.get("/api/dashboard/enrollments");
};

// Get admin statistics (Admin only)
export const getAdminStats = async () => {
  return await API.get("/api/dashboard/admin/stats");
};

export default API;