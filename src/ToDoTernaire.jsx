import React from "react";

function ToDoTernaire({ todo, date, checked }) {
  return (
    <li className={checked ? "green" : "orange"}>
      {checked ? <input type="checkbox" defaultChecked /> : null} {todo} - {date}
    </li>
  );
}

export default ToDoTernaire;