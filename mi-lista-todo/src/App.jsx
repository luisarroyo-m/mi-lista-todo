
import { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  function agregarTarea(nuevaTarea) {
  setTasks([...tasks, nuevaTarea]);
}
  return (
    <div className="app">
      <h1>Lista de tareas</h1>
      <p>Organiza mi día</p>

      <TaskForm onAddTask={agregarTarea} />

      <h2>Mis tareas</h2>

      <ul>
        {tasks.map((tarea, indice) => (
          <li key={indice}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
