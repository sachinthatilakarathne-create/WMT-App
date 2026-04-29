import { useState } from "react";
import { createTask } from "../api/api";

function ItemForm({ onItemAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      await createTask({ title, description });
      setTitle("");
      setDescription("");
      onItemAdded();
    } catch (error) {
      console.error("Add Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}



export default ItemForm;