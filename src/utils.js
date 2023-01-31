import { ProjectList, Project, Todo } from "./dataClasses";

function saveToLocalStorage(object) {
  localStorage.setItem("todo-app-data", JSON.stringify(object));
}

function loadFromLocalStorage() {
  const localStorageItem = JSON.parse(localStorage.getItem("todo-app-data"));

  const interimProjectList = [];

  for (const item of localStorageItem.projects) {
    const thisProject = new Project(item.name);

    for (const todo of item.toDos) {
      thisProject.addTodo(
        new Todo(
          todo.title,
          todo.dueDate,
          todo.description,
          todo.priority,
          todo.done
        )
      );
    }

    interimProjectList.push(thisProject);
  }

  const parsedProjectList = new ProjectList(interimProjectList);

  return parsedProjectList;
}

export { saveToLocalStorage, loadFromLocalStorage };
