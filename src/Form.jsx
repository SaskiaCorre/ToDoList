import React from "react";
import './Form.css'

function Form({ onSubmit }) {
  return (
    <form>
      <input className="formInput" type="text" placeholder="La ToDo" /*onChange={(event) => handleChange(event)}*/ />
      <input className="formInput" type="text" placeholder="La Date" /*onChange={(event) => handleChange(event)}*/ />
      <input className="submitInput" type="submit" value="Ajouter" />
    </form>
  );
}

export default Form;