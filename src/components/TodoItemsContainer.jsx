import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";
import styles from "./TodoItemsContainer.module.css";

const TodoItemsContainer = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((i) => (
        <TodoItem key={i.name} todoName={i.name} todoDate={i.dueDate} />
      ))}
    </div>
  );
};
export default TodoItemsContainer;
