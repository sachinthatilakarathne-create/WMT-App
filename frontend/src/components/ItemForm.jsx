import { useState } from "react";
import { createTask, updateTask } from "../api/api";

function ItemForm({ onItemAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lastTaskId, setLastTaskId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }

    try {
      const response = await createTask({ title });
      console.log("Task created:", response.data);
      setTitle("");
      setLastTaskId(response.data._id);
      setSuccess("Task added! Now add a description.");
      onItemAdded();
    } catch (error) {
      console.error("Add Error:", error);
      setError(error.response?.data?.message || error.message || "Error creating task");
    }
  };

  const handleAddDescription = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!lastTaskId) {
      setError("Please add a task first");
      return;
    }

    if (!description.trim()) {
      setError("Please enter a description");
      return;
    }

    try {
      await updateTask(lastTaskId, { description });
      setDescription("");
      setLastTaskId(null);
      setSuccess("Description added!");
      onItemAdded();
    } catch (error) {
      console.error("Update Error:", error);
      setError(error.response?.data?.message || error.message || "Error adding description");
    }
  };

  return (
    <div>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}
      
      {!lastTaskId ? (
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Enter task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      ) : (
        <form onSubmit={handleAddDescription}>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Description</button>
        </form>
      )}
    </div>
  );
}

export default ItemForm;