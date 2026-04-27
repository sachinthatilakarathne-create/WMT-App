import { deleteTask, updateTask } from "../api/api";

function ItemList({ items, onRefresh }) {
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      onRefresh();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const handleToggleComplete = async (id, currentStatus) => {
    try {
      await updateTask(id, { completed: !currentStatus });
      onRefresh();
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
          {item.title}
          <button onClick={() => handleToggleComplete(item._id, item.completed)}>
            {item.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;