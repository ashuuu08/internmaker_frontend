// src/components/TaskSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function TaskSection() {
  const tasks = [
    { id: 1, title: "Weather App", description: "Build a responsive weather app using API calls and display real-time data.", enabled: true },
    { id: 2, title: "ToDo List", description: "Create a dynamic ToDo list with add, remove, edit functionality.", enabled: true },
    { id: 3, title: "University Website", description: "Design a university website with multiple pages and navigation.", enabled: true },
    { id: 4, title: "Library Management", description: "Develop a library management system with book check-in/out functionality.", enabled: false },
    { id: 5, title: "Blood Bank System", description: "Create a blood bank management system with donor and request tracking.", enabled: false },
  ];

  const [repoLinks, setRepoLinks] = useState({});
  const [videoLinks, setVideoLinks] = useState({});
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleRepoChange = (id, value) => setRepoLinks({ ...repoLinks, [id]: value });
  const handleVideoChange = (id, value) => setVideoLinks({ ...videoLinks, [id]: value });

  const handleSubmit = (id) => {
    if (!repoLinks[id] || !videoLinks[id]) {
      alert("Please provide both repository and video links.");
      return;
    }
    if (!completedTasks.includes(id)) setCompletedTasks([...completedTasks, id]);
    alert(`Task '${tasks.find(t => t.id === id).title}' submitted!`);
  };

  const completionPercentage = Math.round((completedTasks.length / tasks.length) * 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black p-6 rounded-2xl space-y-8"
    >
      {/* Tracking bar */}
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-2 text-center">
          Overall Progress: {completionPercentage}%
        </h3>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 1 }}
            className="h-4 bg-green-400 rounded-full"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">My Tasks</h2>

      <div className="grid md:grid-cols-1 gap-6">
        {tasks.map((task, idx) => (
          <motion.div
            key={task.id}
            whileHover={{ scale: task.enabled ? 1.03 : 1 }}
            className={`border border-gray-700 rounded-2xl p-6 shadow-lg transition 
              ${task.enabled ? "bg-gray-900 hover:shadow-2xl" : "bg-gray-800 opacity-60"}`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{task.title}</h3>
            <p className="text-gray-400 mb-4">{task.description}</p>

            {task.enabled ? (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Repository Link</label>
                  <input
                    type="text"
                    placeholder="GitHub repo URL"
                    value={repoLinks[task.id] || ""}
                    onChange={(e) => handleRepoChange(task.id, e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Video Link (Max 5 min)</label>
                  <input
                    type="text"
                    placeholder="Video URL"
                    value={videoLinks[task.id] || ""}
                    onChange={(e) => handleVideoChange(task.id, e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm mt-2">
                This task is locked. Complete previous tasks to unlock.
              </p>
            )}

            {task.enabled && (
              <button
                onClick={() => handleSubmit(task.id)}
                className="mt-4 px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                Submit Task
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <p className="text-gray-400 text-sm mt-4 text-center">
        Only 3 of 5 tasks are active. Video link should not exceed 5 minutes.
      </p>
    </motion.section>
  );
}
