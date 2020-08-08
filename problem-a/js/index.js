'use strict';

/* your code goes here! */
class Task {
  constructor(newDescription, isComplete) {
    this.description = newDescription;
    this.complete = isComplete;
  }

  render() {
    const listElement = document.createElement("li");
    listElement.textContent = this.description;
    if (this.complete) {
      listElement.classList.add("font-strike");
    }
    listElement.addEventListener("click", () => {
      this.toggleFinished();
      listElement.classList.toggle("font-strike");
    });
    return listElement;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }
}

class TaskList {
  constructor(taskArray) {
    this.tasks = taskArray;
  }

  addTask(descrString) {
    const newTask = new Task(descrString, false);
    this.tasks.push(newTask);
  }

  render() {
    const orderedListElement = document.createElement("ol");
    this.tasks.forEach((task) => {
      const listElement = task.render();
      orderedListElement.appendChild(listElement);
    })
    return orderedListElement;
  }
}

class NewTaskForm {
  constructor(whatFunctionToCallWhenSubmitted) {
    this.submitCallback = whatFunctionToCallWhenSubmitted;
  }

  render() {
    const formElement = document.createElement("form");
    const inputElement = document.createElement("input");
    inputElement.classList.add("form-control", "mb-3");
    inputElement.setAttribute("placeholder", "What else do you have to do?");
    formElement.appendChild(inputElement);
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn", "btn-primary");
    buttonElement.textContent = "Add task to list";
    formElement.appendChild(buttonElement);

    buttonElement.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = inputElement.value;
      const toDo = this.submitCallback;
      toDo(inputValue);
    })
    return formElement;
  }
}

class App {
  constructor(newParentElement, newTaskList) {
    this.parentElement = newParentElement;
    this.taskList = newTaskList;
  }

  render() {
    const listElement = this.taskList.render();
    this.parentElement.appendChild(listElement);
    const functionCalled = (argument) => this.addTaskToList(argument);
    const formObject = new NewTaskForm(functionCalled);
    this.parentElement.appendChild(formObject.render());
  }

  addTaskToList(descriptionString) {
    this.taskList.addTask(descriptionString);
    this.parentElement.innerHTML = "";
    this.render();
  }
}

const taskListObject = new TaskList([
  new Task("be a great coder", true),
  new Task("get a job", false)
]);
const appElement = document.querySelector("#app");
const appObject = new App(appElement, taskListObject);
appObject.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
