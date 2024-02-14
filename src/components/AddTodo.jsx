import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const AddTodo = () => {
  const { addItem } = useContext(TodoItemsContext);

  const todoNameEle = useRef();
  const dueDateEle = useRef();

  const handleAddBtnClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameEle.current.value;
    const dueDate = dueDateEle.current.value;
    todoNameEle.current.value = "";
    dueDateEle.current.value = "";
    addItem(todoName, dueDate);
  };

  return (
    <div className="container text-center ">
      <form  className="row kg-row" onSubmit={handleAddBtnClicked}>
        <div className="col-5">
          <input
            type="text"
            ref={todoNameEle}
            placeholder="Enter Todo Here"
            className="form-control border-dark"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateEle}
            className="form-control border-dark"
            // value={dueDate}
            // onChange={handledateChange}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn">Add</button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;

// const [todoName, setTodoName] = useState();
// const [dueDate, setDueDate] = useState();

// const handleNameChange = (e) => {
//   setTodoName(e.target.value);
// };
// const handledateChange = (e) => {
//   setDueDate(e.target.value);
// };

// const handleAddBtnClicked = (e) => {
//   onNewItem(todoName, dueDate);
//   setDueDate("");
//   setTodoName("");
//   e.preventDefault();
// };
