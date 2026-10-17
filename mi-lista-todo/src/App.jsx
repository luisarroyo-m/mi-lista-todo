
import { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import EliminarTarea from "./Components/EliminarTarea";

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para agregar tareas
  function agregarTarea(nuevaTarea) {
    setTasks([...tasks, nuevaTarea]);
  }

  // Función para eliminar tareas
  function eliminarTarea(indice) {
    setTasks(tasks.filter((tarea, i) => i !== indice));
  }

  return (
    <div className="app">
      <h1>Lista de tareas</h1>
      <p>Organiza mi día</p>

      <TaskForm onAddTask={agregarTarea} />

      <h2>Mis tareas</h2>

      <ul>
        {tasks.map((tarea, indice) => (
          <li key={indice}>
            {tarea}

            <EliminarTarea
              onEliminar={() => eliminarTarea(indice)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

