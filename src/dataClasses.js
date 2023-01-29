import uniqid from "uniqid";

class Todo {
  constructor(title, dueDate, description, priority) {
    this.id = uniqid();
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.done = false;
  }

  markAsCompleted = () => {
    this.done = true;
  };

  testClick = () => {
    console.log(this.title, "clicked");
  };
}
class Project {
  constructor(name) {
    (this.id = uniqid()), (this.name = name);
    this.toDos = [];
  }

  addTodo = (todo) => {
    this.toDos.push(todo);
  };

  deleteTodo = (todoId) => {
    this.toDos = this.toDos.filter((item) => item.id !== todoId);
  };
}

class ProjectList {
  constructor(projects) {
    this.projects = projects;
    this.activeProject = this.projects[0];
  }

  setActiveProject = (projectId) => {
    this.activeProject = this.projects.filter(
      (project) => project.id === projectId
    )[0];
    console.log("New Active Project:", this.activeProject);
  };

  addProject = (project) => {
    this.projects.push(project);
  };
}

export { Todo, Project, ProjectList };
