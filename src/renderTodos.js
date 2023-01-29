import toDoCard from "./todoCard";

export default function renderTodos(project) {
  const todosContainer = document.querySelector(".todos-container");
  todosContainer.innerHTML = "";
  for (const todo of project.toDos) {
    const thisToDoCard = toDoCard(todo, project);

    thisToDoCard.addEventListener("click", todo.testClick);

    todosContainer.appendChild(thisToDoCard);
  }
}
