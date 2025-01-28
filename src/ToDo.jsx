//import './ToDo.css'
import React from "react";

function ToDo({ todo, date, checked }) {
  if (checked){
  return (
    <li className="green">
      <input type="checkbox" defaultChecked /> {todo} - {date}
    </li>
  );
  } else {
  // Si checked est false
  return <li className="orange">{todo} - {date}</li>;
  }
}
export default ToDo;