import { newToDoCard, newProjectCard } from "./components";
import { render } from "./render";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils";

import { Todo, Project } from "./dataClasses";

const handleEvents = (function () {
  function selectProject(project, projectList) {
    projectList.setActiveProject(project.id);
    render.renderTodos(projectList);
  }

  function deleteTodoAndRerender(todo, projectList) {
    projectList.activeProject.deleteTodo(todo.id);
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  function showNewTodoForm(projectList) {
    const todosContainer = document.querySelector(".todos-container");
    todosContainer.appendChild(newToDoCard(projectList));
  }

  function submitNewTodo(projectList) {
    console.log(projectList);
    const title = document.querySelector("#todo-title-input").value;
    const description = document.querySelector("#todo-description-input").value;
    const priority = document.querySelector("#todo-priority-input").value;
    const dueDate = document.querySelector("#todo-duedate-input").value;
    const thisTodo = new Todo(title, dueDate, description, priority);
    projectList.activeProject.addTodo(thisTodo);
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  function showNewProjectForm(projectList) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.appendChild(newProjectCard(projectList));
    console.log("New Project initiated");
  }

  function submitNewProject(projectList) {
    const newProjectName = document.querySelector("#new-project-name").value;
    const thisProject = new Project(newProjectName);
    projectList.addProject(thisProject);
    render.renderProjects(projectList);
    saveToLocalStorage(projectList);
  }

  function markCompletedandRerender(todo, projectList) {
    console.log(projectList.activeProject.toDos);
    todo.toggleCompleted();
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  function toggleTodoEdit(todo, projectList) {
    console.log("edit initiated");
    const todoContainertoBeEdited = document.querySelector("#" + todo.id);
    todoContainertoBeEdited.innerHTML = "";
    todoContainertoBeEdited.appendChild(
      newToDoCard(
        projectList,
        todo.id,
        todo.title,
        todo.description,
        todo.priority,
        todo.dueDate,
        saveEditedTodo
      )
    );
  }

  function saveEditedTodo(projectList, todoid) {
    const title = document.querySelector("#todo-title-input").value;
    const description = document.querySelector("#todo-description-input").value;
    const priority = document.querySelector("#todo-priority-input").value;
    const dueDate = document.querySelector("#todo-duedate-input").value;
    console.log("Saving todo with id", todoid);
    for (const project of projectList.projects) {
      for (const todoItem of project.toDos) {
        if (todoItem.id === todoid) {
          todoItem.title = title;
          todoItem.description = description;
          todoItem.priority = priority;
          todoItem.dueDate = dueDate;
        }
      }
      saveToLocalStorage(projectList);
      render.renderTodos(projectList);
    }
  }

  function renderAreYouSure(projectList, project) {
    if (
      confirm("Are you sure? This will delete the project and all it's todos!")
    ) {
      deleteProjectAndRerender(projectList, project);
    } else {
      console.log("Nothing really...");
    }
  }

  function deleteProjectAndRerender(projectList, project) {
    projectList.deleteProject(project.id);
    console.log("Projectlist after delete:", projectList);
    projectList.setActiveProject(projectList.projects[0].id);
    render.renderProjects(projectList);
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  return {
    selectProject,
    deleteTodoAndRerender,
    showNewTodoForm,
    submitNewTodo,
    showNewProjectForm,
    submitNewProject,
    markCompletedandRerender,
    toggleTodoEdit,
    renderAreYouSure,
  };
})();

export { handleEvents };
