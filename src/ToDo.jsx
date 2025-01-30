import './ToDoList.css'
import React from "react";

const TODOS = [
    {todo: "Rédiger les cours React", date: "2024-11-01", checked: true},
    {todo: "Faire les courses", date: "2025-01-27", checked: true},
    {todo: "Sortie entre potes", date: "2025-02-01", checked: false},
  ]
    
  function ToDoAnd({todo, date, checked}){
    function handleClick() {
      alert(todo);
    }
    return (
      // <li className={checked ? 'green' : 'orange'}>
      // {checked && <input type="checkbox" defaultChecked/>}
      // {todo} - {date}
      // </li>
      <li className={checked ? 'green' : 'orange'} onClick={handleClick}>
      {checked && <input type="checkbox" defaultChecked />} {/* Affichage conditionnel */}
      {todo} - {date}
    </li>
    );
  }
      
  function ToDo() {
    // if (checked){
    // return (
    //   <li className="green">
    //     <input type="checkbox" defaultChecked /> {todo} - {date}
    //   </li>
    // );
    // } 
    // // Si checked est false
    // return (<li className="orange">{todo} - {date}</li>
    // )
    // }
    // return (
    //   <ul>
    //   {TODOS.map((todo, index) => (
    //     <li key={index} className={todo.checked ? 'green' : 'orange'}>
    //       {/* <input type="checkbox" defaultChecked={todo.checked} /> {todo.todo} - {todo.date} */}
    //       <ToDoAnd key={index} todo={todo.todo} date={todo.date} checked={todo.checked} />
    //     </li>
    //   ))}
    // </ul>
    // );
    //return <li onClick={onClick}>{todo.todo}</li>;
  //   function handleClick(todo) {
  //     if(todo.todo){
  //       alert(todo.todo)
  //     }
  //   }
  //   return (
  //     <ul>
  //       {TODOS.map((todo, index) => (
  //       <ListToDo key={index} todo={todo} 
  //       onClick={()=>handleClick(todo)}/>
  //     ))}
  //     </ul>      
  //   );
  // }
  return (
    <ul>
      {TODOS.map((todo, index) => (
        <ToDoAnd key={index} todo={todo.todo} date={todo.date} checked={todo.checked} />
      ))}
    </ul>
  );
}

    export default ToDo;

//     Dans le composant ToDo(), créer une fonction handleClick() qui fera une alerte de l’attribut
// todo du Props todo 

