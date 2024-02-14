import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container input" >
      <div className="row kg-row">
        <div className="col-5">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => deleteItem(todoName)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
