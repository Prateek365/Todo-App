import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todoItemsStore";

const WelcomeMessage = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const {todoItems} = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>No Task Reamining. Enjoy your day !!</p>
    )
  );
};
export default WelcomeMessage;
