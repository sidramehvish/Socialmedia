import { useState } from "react";
const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    // onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
    onNewItem(todoName, dueDate);
  };
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              onChange={handleNameChange}
            ></input>
          </div>
          <div class="col-4">
            <input type="date" onChange={handleDateChange}></input>
          </div>
          <div class="col-2">
            <button class="btn btn-success" onClick={handleAddButtonClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTodo;
