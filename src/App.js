import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import Background from "./components/Background";
import TodoTime from "./components/TodoTime";
import TodoWeather from "./components/TodoWeather";
import { IoAddCircle } from "react-icons/io5";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1611845208465, text: "Today's To Do", checked: false },
  ]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectTodo, setSelectTodo] = useState(null);
  const onInsertToggle = () => {
    if (selectTodo) {
      setSelectTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };
  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("Please write your to do");
    } else {
      const todoObj = {
        id: Date.now(),
        text,
        checked: false,
      };
      setTodos([...todos, todoObj]);
    }
  };
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const onChangeTodo = (todo) => {
    setSelectTodo(todo);
  };
  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
  return (
    <>
      <div className="App">
        <div className="App__info center">
          <TodoWeather />
          <TodoTime />
        </div>
        <div>
          <TodoList
            todos={todos}
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle}
            onChangeTodo={onChangeTodo}
          />
          {insertToggle && (
            <TodoInsert
              onInsertToggle={onInsertToggle}
              onInsertTodo={onInsertTodo}
              selectTodo={selectTodo}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          )}
        </div>
        <div className="App__button center" onClick={onInsertToggle}>
          <IoAddCircle />
        </div>
      </div>
      <Background />
    </>
  );
};

export default App;
