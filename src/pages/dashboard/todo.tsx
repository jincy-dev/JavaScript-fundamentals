import TodoList from "@/components/TodoList";
import styles from "@/styles/todolist.module.scss";
import React, { useEffect, useState } from "react";

type TodoAPIType = Array<{ title: string; completed: boolean }>;

const Todo = () => {
  const [todos, setTodos] = useState<TodoAPIType>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div className={styles.todoBody}>
      {todos.map((item) => {
        return <TodoList title={item.title} completed={item.completed} />;
      })}
    </div>
  );
};

export default Todo;
