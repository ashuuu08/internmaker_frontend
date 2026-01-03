// src/components/PaymentSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function PaymentSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(499);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    setSuccess(true);
  };

  return (
    <motion.section
      id="payment"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-yellow-400 text-center">Payment</h2>
      <p className="text-gray-400 text-center">
        Complete your payment to secure your internship spot.
      </p>

      {success ? (
        <div className="text-center text-green-400 font-semibold">
          Payment Successful! 🎉
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Pay Now
          </button>
        </div>
      )}
    </motion.section>
  );
}
