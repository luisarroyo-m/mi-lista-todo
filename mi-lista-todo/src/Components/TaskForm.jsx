import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [texto, setTexto ] = useState ("");

  function agregarTarea() {
    if (texto.trim()===""){
      return;
    }
    
    onAddTask(texto);
    setTexto("");

  }

  return (
    <div>
      <input
      type="text"
      placeholder="Escribe una tarea"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}

 />

      <button onClick={agregarTarea}>
        Agregar tarea
      </button>
    </div>
  );
}

export default TaskForm;      



