import renderTodos from "./renderTodos";

const handleEvents = (function () {
  function selectProject(project, projectList) {
    renderTodos(project);
    projectList.setActiveProject(project.id);
  }

  function deleteTodoAndRerender(project, todo) {
    project.deleteTodo(todo.id);
    renderTodos(project);
  }

  return { selectProject, deleteTodoAndRerender };
})();

export { handleEvents };
