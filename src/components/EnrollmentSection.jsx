// src/components/EnrollmentSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function EnrollmentSection() {
  const [enrolled, setEnrolled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEnroll = () => {
    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    setEnrolled(true);
  };

  const goToPayment = () => {
    const paymentEl = document.getElementById("payment");
    if (paymentEl) paymentEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="enrollment"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6 max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-yellow-400 text-center">
        Enrollment
      </h2>

      {!enrolled ? (
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />
          <button
            onClick={handleEnroll}
            className="w-full px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Enroll Now
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-green-400 font-semibold">
            Enrollment Completed! 🎉
          </p>
          <button
            onClick={goToPayment}
            className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
          >
            Make Payment
          </button>
        </div>
      )}
    </motion.section>
  );
}
