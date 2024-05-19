import React from "react";
import styles from "@/styles/todolist.module.scss";
import { IoCheckmark, IoClose } from "react-icons/io5";

type Props = {
  title: string;
  completed: boolean;
};

const TodoList = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.todoMain}>
        <div>
          <div className={styles.todoName}>{props.title}</div>
        </div>
        <div>
          <div className={styles.todoStatus}>
            {props.completed ? (
              <IoCheckmark color={"#16a34a"} />
            ) : (
              <IoClose color={"#ef4444"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
