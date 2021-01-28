import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
