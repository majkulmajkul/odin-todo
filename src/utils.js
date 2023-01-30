import { ProjectList, Project, Todo } from "./dataClasses";

function saveToLocalStorage(object) {
  localStorage.setItem("todo-app-data", JSON.stringify(object));
}

function loadFromLocalStorage() {
  const localStorageItem = JSON.parse(localStorage.getItem("todo-app-data"));

  const parsedItem = false;

  return parsedItem;
}

export { saveToLocalStorage, loadFromLocalStorage };
