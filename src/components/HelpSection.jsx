import { motion } from "framer-motion";

export default function HelpSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-semibold">Help & Support</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {/* Card 1 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Complete your profile, enroll in an internship program, and start
            submitting assigned tasks to progress.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Tasks & Deadlines</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tasks are time-bound. Late submissions may affect certification and
            offer letter eligibility.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">
            Certificates & Offer Letters
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Certificates are auto-generated after successful task completion.
            Offer letters depend on performance and available positions.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Need Support?</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Visit the Contact section to reach our support team. Average response
            time is under 24 hours.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
