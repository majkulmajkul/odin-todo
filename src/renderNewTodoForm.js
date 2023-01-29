import { Todo } from "./dataClasses";
import renderTodos from "./renderTodos";

export default function renderNewToDoForm(project) {
  console.log("Render new todo form called");

  const newTodoContainer = document.querySelector("#new-todo-form-container");
  newTodoContainer.style.visibility = "visible";

  const newTodoForm = document.querySelector("#new-todo-form");
  newTodoForm.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const title = document.querySelector("#new-todo-title").value;
    const description = document.querySelector("#new-todo-description").value;
    const priority = document.querySelector("#new-todo-priority").value;
    const dueDate = document.querySelector("#new-todo-due-date").value;
    const thisTodo = new Todo(title, dueDate, description, priority);
    project.addTodo(thisTodo);
    renderTodos(project);
    newTodoContainer.style.visibility = "hidden";
    newTodoForm.removeEventListener("submit", handleSubmit);
  }
}
