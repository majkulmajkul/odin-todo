import { handleEvents } from "./handleEvents";

export default function newToDoCard(project) {
  const newTodoContainer = document.createElement("div");
  newTodoContainer.id = "new-todo-form-container";

  const newTodoForm = document.createElement("form");
  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleEvents.submitNewTodo(project);
  });

  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.htmlFor = "todo-title-input";
  todoTitleLabel.textContent = "Title";
  const todoTitleInput = document.createElement("input");
  todoTitleInput.id = "todo-title-input";
  todoTitleInput.type = "text";

  const todoDescriptionLabel = document.createElement("label");
  todoDescriptionLabel.htmlFor = "todo-description-input";
  todoDescriptionLabel.textContent = "Description";
  const todoDescriptionInput = document.createElement("input");
  todoDescriptionInput.id = "todo-description-input";
  todoDescriptionInput.type = "text";

  const todoPriorityLabel = document.createElement("label");
  todoPriorityLabel.htmlFor = "todo-priority-input";
  todoPriorityLabel.textContent = "Priority";
  const todoPriorityInput = document.createElement("input");
  todoPriorityInput.id = "todo-priority-input";
  todoPriorityInput.type = "number";

  const todoDueDateLabel = document.createElement("label");
  todoDueDateLabel.htmlFor = "todo-duedate-input";
  todoDueDateLabel.textContent = "Due Date";
  const todoDueDateInput = document.createElement("input");
  todoDueDateInput.id = "todo-duedate-input";
  todoDueDateInput.type = "date";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  for (const element of [
    todoTitleLabel,
    todoTitleInput,
    todoDescriptionLabel,
    todoDescriptionInput,
    todoPriorityLabel,
    todoPriorityInput,
    todoDueDateLabel,
    todoDueDateInput,
    submitButton,
  ]) {
    newTodoForm.appendChild(element);
  }

  newTodoContainer.appendChild(newTodoForm);

  return newTodoContainer;
}
