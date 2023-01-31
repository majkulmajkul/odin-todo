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

function newToDoCard(
  projectList,
  id = "",
  title = "",
  description = "",
  priority = 1,
  dueDate = "",
  handlerFunction = handleEvents.submitNewTodo
) {
  const newTodoContainer = document.createElement("div");
  newTodoContainer.id = "new-todo-form-container";

  const newTodoForm = document.createElement("form");
  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handlerFunction(projectList, id);
  });

  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.htmlFor = "todo-title-input";
  todoTitleLabel.textContent = "Title";
  const todoTitleInput = document.createElement("input");
  todoTitleInput.id = "todo-title-input";
  todoTitleInput.type = "text";
  todoTitleInput.value = title;

  const todoDescriptionLabel = document.createElement("label");
  todoDescriptionLabel.htmlFor = "todo-description-input";
  todoDescriptionLabel.textContent = "Description";
  const todoDescriptionInput = document.createElement("input");
  todoDescriptionInput.id = "todo-description-input";
  todoDescriptionInput.type = "text";
  todoDescriptionInput.value = description;

  const todoPriorityLabel = document.createElement("label");
  todoPriorityLabel.htmlFor = "todo-priority-input";
  todoPriorityLabel.textContent = "Priority";
  const todoPriorityInput = document.createElement("input");
  todoPriorityInput.id = "todo-priority-input";
  todoPriorityInput.type = "number";
  todoPriorityInput.value = priority;

  const todoDueDateLabel = document.createElement("label");
  todoDueDateLabel.htmlFor = "todo-duedate-input";
  todoDueDateLabel.textContent = "Due Date";
  const todoDueDateInput = document.createElement("input");
  todoDueDateInput.required = true;
  todoDueDateInput.id = "todo-duedate-input";
  todoDueDateInput.type = "date";
  todoDueDateInput.value = dueDate;

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

function toDoCard(todo, projectList) {
  const toDoCardContent = document.createElement("div");
  toDoCardContent.classList.add("todo-card");
  toDoCardContent.id = todo.id;

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
    handleEvents.deleteTodoAndRerender(todo, projectList)
  );

  const markCompletedText = document.createElement("p");
  markCompletedText.textContent = "Mark completed";
  markCompletedText.addEventListener("click", () =>
    handleEvents.markCompletedandRerender(todo, projectList)
  );

  const editTodoText = document.createElement("p");
  editTodoText.textContent = "Edit";
  editTodoText.addEventListener("click", () =>
    handleEvents.toggleTodoEdit(todo, projectList)
  );

  toDoCardContent.appendChild(toDoCardTitle);
  toDoCardContent.appendChild(toDoCardDueDate);
  toDoCardContent.appendChild(toDoCardPriority);
  toDoCardContent.appendChild(toToCardDescription);
  toDoCardContent.appendChild(markCompletedText);
  toDoCardContent.appendChild(deleteText);
  toDoCardContent.appendChild(editTodoText);

  return toDoCardContent;
}

export { newProjectCard, newToDoCard, toDoCard };
