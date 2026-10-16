
import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1>
      <p>Organiza tus actividades del día</p>

      <TaskForm />
    </div>
  );
}

export default App;

