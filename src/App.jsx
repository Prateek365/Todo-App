import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItemsContainer from "./components/TodoItemsContainer";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";
import Container from "./components/Container";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (IName) => {
    const filterTodoItems = todoItems.filter((i) => i.name !== IName);
    setTodoItems(filterTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addItem,
        deleteItem,
      }}
    >
      <Container>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItemsContainer />
      </Container>
    </TodoItemsContext.Provider>
  );
}

export default App;
