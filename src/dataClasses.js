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

export { Todo, Project };
