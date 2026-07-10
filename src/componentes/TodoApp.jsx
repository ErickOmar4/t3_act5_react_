import { useState } from "react";


function Encabezado() {
  return (
    <header style={{ marginBottom: "20px" }}>
      <h1>Mi Mini Aplicación de Tareas</h1>
      <p>Organiza tu día de forma sencilla</p>
    </header>
  );
}

function ItemTarea(props) {
  return (
    <li style={{ padding: "8px 0", fontSize: "18px" }}>
       {props.texto}
    </li>
  );
}

function TodoApp() {
    
  const tareasIniciales = ["Aprender React", "Configurar Vite", "Practicar useState"];

  
  const [mostrarLista, setMostrarLista] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {}
      <Encabezado />

      {}
      <button 
        onClick={() => setMostrarLista(!mostrarLista)}
        style={{ padding: "10px 15px", cursor: "pointer", marginBottom: "20px" }}
      >
        {mostrarLista ? "Ocultar Tareas" : "Mostrar Tareas"}
      </button>

      {}
      {mostrarLista && (
        <ul>
          {}
          {tareasIniciales.map((tarea, index) => (
            <ItemTarea key={index} texto={tarea} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;