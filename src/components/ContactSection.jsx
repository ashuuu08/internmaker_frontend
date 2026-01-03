// src/components/ContactSection.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-8"
    >
      <h2 className="text-2xl font-bold text-yellow-400 text-center">Contact Us</h2>
      <p className="text-gray-400 text-center max-w-xl mx-auto">
        Have questions or need support? Reach out via email, WhatsApp, or send us a message below.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-around text-center gap-6">
        <div>
          <p className="text-gray-300 font-semibold">Email</p>
          <a href="mailto:support@internmaker.com" className="text-yellow-400 hover:underline">
            support@internmaker.com
          </a>
        </div>
        <div>
          <p className="text-gray-300 font-semibold">WhatsApp</p>
          <a href="https://wa.me/919691207533" target="_blank" className="text-yellow-400 hover:underline" rel="noreferrer">
            +91 96912 07533
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
