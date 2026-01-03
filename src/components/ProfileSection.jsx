import { motion } from "framer-motion";
import { Mail, Phone, Award, User } from "lucide-react";

export default function ProfileSection() {
  // mock user data (later replace with API)
  const user = {
    name: "Ashish Kumar",
    email: "ashish@example.com",
    phone: "+91 9XXXXXXXXX",
    role: "Intern",
    internship: "Java Full Stack Development",
    status: "Active",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl space-y-8"
    >
      <h2 className="text-3xl font-semibold">My Profile</h2>

      {/* Profile Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-yellow-400 text-gray-900 text-3xl font-bold">
          A
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold">{user.name}</h3>

          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Mail size={16} /> {user.email}
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Phone size={16} /> {user.phone}
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <User size={16} /> Role: {user.role}
          </div>
        </div>
      </div>

      {/* Internship Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Award size={18} /> Internship Program
          </h4>
          <p className="text-gray-400 text-sm">{user.internship}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h4 className="font-semibold mb-2">Current Status</h4>
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
            {user.status}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition">
          Edit Profile
        </button>

        <button className="px-6 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-gray-500 transition">
          Change Password
        </button>
      </div>
    </motion.div>
  );
}
