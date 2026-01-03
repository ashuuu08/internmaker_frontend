// src/components/TaskList.jsx
import React, { useEffect, useState } from "react";
import API from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await API.get("/tasks"); // backend endpoint
        setTasks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completionStatus ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
