import renderTodos from "./renderTodos";

const handleEvents = (function () {
  function selectProject(project, projectList) {
    renderTodos(project);
    projectList.setActiveProject(project.id);
  }

  return { selectProject };
})();

export { handleEvents };
