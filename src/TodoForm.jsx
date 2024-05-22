import React, { useState } from "react";
//import React from "react";
import "./TodoForm.css";

function TodoForm({ setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = useState("");
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    // Lógica para agregar la tarea
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <label for="task">Escribe tu nueva tarea</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          id="task"
          placeholder="Terminar el curso"
          required
        />
        <div className="botones">
          <button type="button" class="onCancel" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" class="agregar">
            Agregar Tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
