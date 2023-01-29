import renderTodos from "./renderTodos";
import newToDoCard from "./newToDoCard";
import { Todo } from "./dataClasses";

const handleEvents = (function () {
  function selectProject(project, projectList) {
    renderTodos(project);
    projectList.setActiveProject(project.id);
  }

  function deleteTodoAndRerender(project, todo) {
    project.deleteTodo(todo.id);
    renderTodos(project);
  }

  function showNewTodoForm(project) {
    const todosContainer = document.querySelector(".todos-container");
    todosContainer.appendChild(newToDoCard(project));
  }

  function submitNewTodo(project) {
    console.log("Submitted");
    const title = document.querySelector("#todo-title-input").value;
    const description = document.querySelector("#todo-description-input").value;
    const priority = document.querySelector("#todo-priority-input").value;
    const dueDate = document.querySelector("#todo-duedate-input").value;
    const thisTodo = new Todo(title, dueDate, description, priority);
    project.addTodo(thisTodo);
    renderTodos(project);
  }

  return {
    selectProject,
    deleteTodoAndRerender,
    showNewTodoForm,
    submitNewTodo,
  };
})();

export { handleEvents };
