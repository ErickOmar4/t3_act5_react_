import { useState } from 'react';
import './App.css'
import TodoApp from './componentes/TodoApp';

// '<h1>${nombre}</h1>'
// <></> | Fragment

function App() {
  const notas = [
    {
      id: crypto.randomUUID(),//esto crea un hass lago 
      text: "soy la nota 1",

    },
    {
      id: crypto.randomUUID(),//esto crea un hass lago 
      text: "soy la nota 2",

    },
  ];

  //const titulosApp = {
   // tituloApp: "Soy Todo App",
  //  subtituloApp: "Soy subtitulo App"
  //};
  // {...titulosApp}

  return (
    <section className="containerTodoApp">
      <TodoApp notasApp={notas}></TodoApp>
    </section>
  );
}

export default App
