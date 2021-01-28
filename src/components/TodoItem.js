import React from "react";

import { FiSquare, FiXSquare, FiEdit3 } from "react-icons/fi";

const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeTodo }) => {
  const { id, text, checked } = todo;
  return (
    <li className="TodoItem">
      <div className={`TodoItem__content ${checked ? "checked" : ""} center`}>
        <span className="TodoItem__icon">
          {checked ? (
            <FiXSquare onClick={() => onCheckToggle(id)} />
          ) : (
            <FiSquare onClick={() => onCheckToggle(id)} />
          )}
        </span>
        <span
          className="TodoItem__text"
          onClick={() => {
            onChangeTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
