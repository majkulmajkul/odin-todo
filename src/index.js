import { Project, Todo } from "./dataClasses";
import renderProjects from "./renderProjects";
import renderTodos from "./renderTodos";
import uniqid from "uniqid";

import "./style.css";

const firstTodo = new Todo("kukát kivinni", "2023-01-29");
const secondTodo = new Todo("kaját eltenni", "2023-01-29");

const firstProject = new Project("elso");
firstProject.addTodo(firstTodo);
firstProject.addTodo(secondTodo);

const allProjects = [firstProject, new Project("masodik")];

renderProjects(allProjects);
renderTodos(firstProject);
