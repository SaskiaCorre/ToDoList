import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import ToDo from "./ToDo";
import ToDoTernaire from "./ToDoTernaire";

const TODOS = [
  {todo: "Rédiger les cours React", date: "2024-11-01", checked: true},
  {todo: "Faire les courses", date: "2025-01-27", checked: true},
  {todo: "Sortie entre potes", date: "2025-02-01", checked: false},
]

function App() {
  const DATE = new Date();
  return (
    <article className="todolist">
      <h1>Ma ToDo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
      {TODOS.map((TODOS, index) => (
          <ToDo key={index} todo={TODOS.todo} date={TODOS.date} checked={TODOS.checked}/>
          // <ToDoTernaire key={index} todo={TODOS.todo} date={TODOS.date} checked={TODOS.checked}/>
        ))} 
         {/* <ToDo todo="Rédiger les cours React" date="2024-11-01" />
        <ToDo todo="Faire les courses" date="2025-01-27" />
        <ToDo todo="Sortie entre potes" date="2025-02-01" /> 
         */}
      </ul>   
      </article>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <App>
//       <ul>
//         {TODOS.map((TODOS, index) => (
//           <ToDoTernaire
//             key={index}
//             todo={TODOS.todo}
//             date={TODOS.date}
//             checked={TODOS.checked}
//           />
//         ))}
//       </ul>
//     </App>
//   );


export default App;