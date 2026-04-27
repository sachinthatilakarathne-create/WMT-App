import { useEffect, useState } from "react";
import { getTasks } from "./api/api";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <ItemForm onItemAdded={fetchTasks} />
      <ItemList items={tasks} onRefresh={fetchTasks} />
    </div>
  );
}

export default App;