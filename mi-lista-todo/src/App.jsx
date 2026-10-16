
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1>
      <p>Organiza tus actividades del día</p>
    </div>
  );
}

export default App;
