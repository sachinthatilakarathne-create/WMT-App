import express from 'express'; 
import { createTask,getTasks,updateTask,deleteTask } from '../controllers/taskController.js';

const Router = express.Router();

// Create a new task
Router.post("/tasks", createTask);
Router.get("/tasks", getTasks);
Router.patch('/tasks/:id', updateTask);     
Router.delete('/tasks/:id', deleteTask);

export default Router;