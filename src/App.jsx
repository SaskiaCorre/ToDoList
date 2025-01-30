import { useState } from "react"; 
import React from "react";
import ToDo from "./ToDo";
import "./App.css";
import Form from "./Form";
import ToDoTernaire from "./ToDoTernaire";
  // function ToDoTernaire({todo, date, checked}){
  //   return checked ? <li className='green'><input type="checkbox" defaultChecked />{todo} - {date}</li> : <li className='orange'>{todo} - {date}</li>
  // }

function App() {
  const DATE = new Date();
  // const TAB_TODOS = TODOS.map((todo, index)=>{
  //   return <ToDoAnd key={index} todo={todo.todo} date={todo.date} checked={todo.checked}/>
  // }) 
  // return (
  //   <article className="todolist">
  //     <h1>Ma ToDo List</h1>
  //     <h2>{DATE.toLocaleString()}</h2>
  //     <ul>
  //     {TODOS.map((TODOS, index) => (
  //         <ToDo key={index} todo={TODOS.todo} date={TODOS.date} checked={TODOS.checked}/>
  //         <ToDoTernaire key={index} todo={TODOS.todo} date={TODOS.date} checked={TODOS.checked}/>
  //       ))} 
  //        <ToDo todo="Rédiger les cours React" date="2024-11-01" />
  //       <ToDo todo="Faire les courses" date="2025-01-27" />
  //       <ToDo todo="Sortie entre potes" date="2025-02-01" /> 
  function handleSubmit(event) {
    event.preventDefault(); 
    //console.log("Formulaire soumis !");

  const INPUTS = document.querySelectorAll("input[type='text']");

  INPUTS.forEach(input => {
    console.log(input.value);
  });
}

  return (
    <article className='todolist'>
      <h1>Ma ToDo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
        {/* {TODOS.map((todo, index)=>(
          <ToDo key={index} todo={todo.todo} date={todo.date} checked={todo.checked} />
        ))} */}
        <ToDo />
        <Form onSubmit={(event)=>handleSubmit(event)} />
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