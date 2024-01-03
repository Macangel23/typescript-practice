interface Todo {
   text: string,
   completed: boolean
}

// function getAll<T>(){
//    console.log("test");
// }
type TestMe<T,U> = {
   (a: T, b: U): [T, U]
}

// function swap<T,U>(a: T, b: U): [U, T] {
//    return [b, a];
// }

const swap: TestMe<string, number> = (a, b) => {
   return [a, b];
}

// const all = getAll<string>();
const swappable = swap("6",3);
const btn = document.getElementById("todo-btn");
const input = document.getElementById("todo-input") as HTMLInputElement;
const form = document.querySelector("form")!;
const todoList = document.getElementById("todo-list")!;

const todoListItems: Todo[] = readTodoList();
todoListItems.forEach(createTodoListElement)

function readTodoList(): Todo[] {
   const todos = localStorage.getItem("todos");
   if(todos === null) return [];
   return JSON.parse(todos);
}

function saveTodos() {
   localStorage.setItem("todos", JSON.stringify(todoListItems))
}

function handleSubmitForm (e: SubmitEvent) {
   e.preventDefault();
   const newTodoInput: Todo = {
      text: input ? input.value : "",
      completed: false
   } 
   if(newTodoInput.text === "") return alert("Please input value");

   createTodoListElement(newTodoInput);
   todoListItems.push(newTodoInput);
   saveTodos();
   
   input.value = "";
}

function createTodoListElement(todo: Todo): void {
   const newList = document.createElement("li");
   const todoCheckBox = document.createElement("input");
   todoCheckBox.type = "checkbox";
   todoCheckBox.checked = todo.completed;

   todoCheckBox.addEventListener("change", function() {
      todo.completed = todoCheckBox.checked
      saveTodos();
   })

   newList.append(todo.text);
   newList.append(todoCheckBox);
   todoList.append(newList);
}

form.addEventListener("submit", handleSubmitForm)