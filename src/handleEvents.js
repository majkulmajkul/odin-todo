import renderTodos from "./renderTodos";
import renderProjects from "./renderProjects";
import { newToDoCard, newProjectCard } from "./components";

import { Todo, Project } from "./dataClasses";

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

  function showProjectForm(projectList) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.appendChild(newProjectCard(projectList));
    console.log("New Project initiated");
  }

  function submitNewProject(projectList) {
    const newProjectName = document.querySelector("#new-project-name").value;
    const thisProject = new Project(newProjectName);
    projectList.addProject(thisProject);
    renderProjects(projectList);
  }

  return {
    selectProject,
    deleteTodoAndRerender,
    showNewTodoForm,
    submitNewTodo,
    showProjectForm,
    submitNewProject,
  };
})();

export { handleEvents };
