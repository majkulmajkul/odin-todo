import { handleEvents } from "./handleEvents";

export default function toDoCard(todo, project) {
  const toDoCardContent = document.createElement("div");
  const toDoCardTitle = document.createElement("h3");
  toDoCardTitle.textContent = todo.title;

  const toDoCardDueDate = document.createElement("p");
  toDoCardDueDate.textContent = `Due on ${todo.dueDate}`;

  const toDoCardPriority = document.createElement("p");
  toDoCardPriority.textContent = `Priority ${todo.priority}`;

  const toToCardDescription = document.createElement("p");
  toToCardDescription.textContent = todo.description;

  const deleteText = document.createElement("p");
  deleteText.textContent = "Delete";
  deleteText.addEventListener("click", () =>
    handleEvents.deleteTodoAndRerender(project, todo)
  );

  toDoCardContent.appendChild(toDoCardTitle);
  toDoCardContent.appendChild(toDoCardDueDate);
  toDoCardContent.appendChild(toDoCardPriority);
  toDoCardContent.appendChild(toToCardDescription);
  toDoCardContent.appendChild(deleteText);

  return toDoCardContent;
}
