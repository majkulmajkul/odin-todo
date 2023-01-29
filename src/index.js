import { Project, Todo } from "./dataClasses";
import renderProjects from "./renderProjects";
import renderTodos from "./renderTodos";

import "./style.css";

const firstTodo = new Todo(
  "kukát kivinni",
  "2023-01-29",
  "A kukát ki kell vinni",
  1
);
const secondTodo = new Todo(
  "kaját eltenni",
  "2023-01-29",
  "A kaját el kell tenni, hogy ne kelljen venni",
  2
);

const firstProject = new Project("elso");
firstProject.addTodo(firstTodo);
firstProject.addTodo(secondTodo);

const secondProject = new Project("masodik");
const thirdTodo = new Todo(
  "Finish assignment",
  "2023-02-03",
  "With all classes and nice things",
  3
);
secondProject.addTodo(thirdTodo);

const allProjects = [firstProject, secondProject];

renderProjects(allProjects);
renderTodos(firstProject);
