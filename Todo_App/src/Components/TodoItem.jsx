const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button
              class="btn btn-danger"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
