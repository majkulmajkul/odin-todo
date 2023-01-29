export default function renderTodos(project) {
  const todosContainer = document.querySelector(".todos-container");
  todosContainer.innerHTML = "";
  for (const todo of project.toDos) {
    const thisToDo = document.createElement("p");
    thisToDo.textContent = todo.title;

    thisToDo.addEventListener("click", todo.testClick);

    todosContainer.appendChild(thisToDo);
  }
}
