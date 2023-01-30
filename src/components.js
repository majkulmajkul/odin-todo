import { handleEvents } from "./handleEvents";

function newProjectCard(projectList) {
  const projectFormContainer = document.createElement("div");

  const projectForm = document.createElement("form");

  const projectNameLabel = document.createElement("label");
  projectNameLabel.textContent = "Name for new Project";
  projectNameLabel.htmlFor = "new-project-name";
  const projectNameInput = document.createElement("input");
  projectNameInput.id = "new-project-name";

  const projectSubmitButton = document.createElement("button");
  projectSubmitButton.textContent = "Create";
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleEvents.submitNewProject(projectList);
  });

  projectForm.appendChild(projectNameLabel);
  projectForm.appendChild(projectNameInput);
  projectForm.appendChild(projectSubmitButton);
  projectFormContainer.appendChild(projectForm);

  return projectFormContainer;
}

function newToDoCard(project) {
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

function toDoCard(todo, project) {
  const toDoCardContent = document.createElement("div");

  todo.done && toDoCardContent.classList.add("completed");

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

  const markCompletedText = document.createElement("p");
  markCompletedText.textContent = "Mark completed";
  markCompletedText.addEventListener("click", () =>
    handleEvents.markCompletedandRerender(project, todo)
  );

  toDoCardContent.appendChild(toDoCardTitle);
  toDoCardContent.appendChild(toDoCardDueDate);
  toDoCardContent.appendChild(toDoCardPriority);
  toDoCardContent.appendChild(toToCardDescription);
  toDoCardContent.appendChild(markCompletedText);
  toDoCardContent.appendChild(deleteText);

  return toDoCardContent;
}

export { newProjectCard, newToDoCard, toDoCard };
