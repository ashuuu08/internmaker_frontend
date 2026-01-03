import { motion } from "framer-motion";
import {
  Award,
  Download,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";

export default function CredentialSection() {
  // mock backend data
  const records = [
    {
      id: 1,
      title: "Java Full Stack Internship",
      certificate: true,
      offerLetter: true,
      status: "Completed",
      date: "15 Jan 2026",
    },
    {
      id: 2,
      title: "Spring Boot Internship",
      certificate: false,
      offerLetter: false,
      status: "In Progress",
      date: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl space-y-8"
    >
      <h2 className="text-3xl font-semibold">
        Certifications & Offer Letters
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {records.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5"
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400">
                <Award size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>

                {item.status === "Completed" ? (
                  <div className="flex items-center gap-2 text-green-400 text-sm mt-1">
                    <CheckCircle size={16} /> Completed
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-yellow-400 text-sm mt-1">
                    <Clock size={16} /> In Progress
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {item.certificate ? (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition">
                  <Download size={16} /> Certificate
                </button>
              ) : (
                <span className="text-gray-500 text-sm">
                  Certificate locked
                </span>
              )}

              {item.offerLetter ? (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500 text-green-400 hover:bg-green-500/10 transition">
                  <FileText size={16} /> Offer Letter
                </button>
              ) : (
                <span className="text-gray-500 text-sm">
                  Offer letter not issued
                </span>
              )}
            </div>

            {/* Footer */}
            <p className="text-sm text-gray-400">
              {item.date
                ? `Issued on ${item.date}`
                : "Complete all tasks and reviews to unlock credentials"}
            </p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-sm text-gray-400 max-w-4xl">
        Certificates are guaranteed after task completion. Offer letters are
        performance-based and subject to availability. InternMaker reserves the
        right to approve or reject issuance.
      </div>
    </motion.div>
  );
}
