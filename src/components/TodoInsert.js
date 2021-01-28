import React, { useEffect, useState } from "react";
import "../styles/TodoInsert.css";
import { MdAddCircle, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

const ToDoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };
  useEffect(() => {
    if (selectTodo) {
      setValue(selectTodo.text);
    }
  }, [selectTodo]);
  return (
    <div className="ToDoInsert center">
      <div onClick={onInsertToggle} />
      <form
        className="center"
        onSubmit={
          selectTodo
            ? () => {
                onUpdate(selectTodo.id, value);
              }
            : onSubmit
        }
      >
        <div className="center">
          <MdCheckBoxOutlineBlank />
          <input
            placeholder="Write your to do"
            value={value}
            onChange={onChange}
          />
        </div>
        {selectTodo ? (
          <button type="submit" className="center">
            <FiTrash2 onClick={() => onRemove(selectTodo.id)} />
          </button>
        ) : (
          <button type="submit" className="center">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default ToDoInsert;
