# WMT Web App - Task Manager

A full-stack web application for managing tasks with a React frontend and Node.js/Express backend, using MongoDB for data persistence.

## Project Structure

```
WMT web app/
├── Backend/
│   ├── server.js              # Express server entry point
│   ├── package.json
│   ├── controllers/
│   │   └── taskController.js  # Task CRUD operations
│   ├── models/
│   │   └── task.js            # MongoDB Task schema
│   └── routes/
│       └── taskRoutes.js      # API routes
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .env.local             # Environment variables
    └── src/
        ├── main.jsx           # React entry point
        ├── App.jsx            # Main App component
        ├── api/
        │   └── api.js         # Axios API client
        ├── components/
        │   ├── ItemForm.jsx   # Add task form
        │   └── ItemList.jsx   # Display and manage tasks
        ├── pages/
        │   └── Home.jsx       # Home page
        └── styles/
            └── styles.css     # Styles
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd WMT\ web\ app
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

**Backend Dependencies:**

- express - Web framework
- mongoose - MongoDB ODM
- cors - Cross-Origin Resource Sharing

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

**Frontend Dependencies:**

- react - UI library
- react-dom - React DOM rendering
- vite - Build tool
- axios - HTTP client

### 4. Configure Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```
VITE_API_URL=http://localhost:5000/api
```

The backend server uses MongoDB Atlas connection string (hardcoded in `server.js`).

## Running the Application

### Start Backend Server

```bash
cd Backend
npm start
# or
node server.js
```

The server will run on `http://localhost:5000`

Expected output:

```
Connected to MongoDB
Server is running on port: 5000
```

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## Features

### ✅ Create Tasks

- Add new tasks using the input form
- Tasks are saved to MongoDB

### ✅ View Tasks

- Display all tasks from the database
- Shows task title and completion status

### ✅ Complete Tasks

- Mark tasks as complete with the "Complete" button
- Completed tasks show with a line-through style
- Click "Undo" to mark as incomplete

### ✅ Delete Tasks

- Remove tasks from the database with the "Delete" button
- List updates automatically after deletion

## API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| POST   | `/tasks`     | Create a new task |
| PATCH  | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

### Request/Response Examples

**Create Task:**

```json
POST /tasks
{
  "title": "Buy groceries"
}

Response:
{
  "_id": "64a1b2c3d4e5f6g7h8i9j0k1",
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

**Update Task:**

```json
PATCH /tasks/64a1b2c3d4e5f6g7h8i9j0k1
{
  "completed": true
}
```

## Troubleshooting

### Issue: "Cannot connect to MongoDB"

- Verify MongoDB Atlas connection string in `Backend/server.js`
- Check internet connection
- Ensure IP address is whitelisted in MongoDB Atlas

### Issue: Frontend cannot reach backend

- Ensure `.env.local` has correct `VITE_API_URL`
- Check CORS is enabled in `server.js`
- Verify backend is running on port 5000
- Restart frontend dev server

### Issue: Tasks not appearing

- Check browser console for errors
- Verify backend is connected to MongoDB
- Try refreshing the page

## Development Notes

- Frontend uses Vite for fast development
- Backend uses CommonJS/ES Modules
- All tasks are stored in MongoDB with timestamps
- CORS is enabled for cross-origin requests

## File Descriptions

| File                | Purpose                                                    |
| ------------------- | ---------------------------------------------------------- |
| `server.js`         | Main Express server, MongoDB connection, middleware setup  |
| `taskController.js` | Logic for creating, reading, updating, deleting tasks      |
| `task.js`           | MongoDB schema definition for tasks                        |
| `taskRoutes.js`     | API route definitions                                      |
| `api.js`            | Axios configuration and API calls                          |
| `App.jsx`           | Main React component managing state and task lifecycle     |
| `ItemForm.jsx`      | Form component for adding tasks                            |
| `ItemList.jsx`      | Component for displaying tasks and delete/complete actions |

## License

This project is provided as-is for educational purposes.
