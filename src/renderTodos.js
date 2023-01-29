import toDoCard from "./todoCard";
import renderNewToDoForm from "./renderNewTodoForm";

export default function renderTodos(project) {
  const todosContainer = document.querySelector(".todos-container");
  todosContainer.innerHTML = "";
  for (const todo of project.toDos) {
    const thisToDoCard = toDoCard(todo, project);

    thisToDoCard.addEventListener("click", todo.testClick);

    todosContainer.appendChild(thisToDoCard);
  }

  const newTodo = document.createElement("button");
  newTodo.textContent = "Add new";
  newTodo.addEventListener("click", () => renderNewToDoForm(project));
  todosContainer.appendChild(newTodo);
}
