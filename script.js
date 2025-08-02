console.log("Bismillah");
console.log("By Fery Gunawan Sugiarto, 01/08/2025");

let todoList = JSON.parse(localStorage.getItem("todoListSave")) || [];

renderTodoList();

function clickAdd() {
  const inputElement = document.querySelector(".js-todo-input");
  const dateInputElement = document.querySelector(".js-date-input");
  const todoName = inputElement.value;
  const todoDate = dateInputElement.value;

  if (inputElement.value && dateInputElement.value) {
    todoList.push({ todoName, todoDate });

    inputElement.value = "";
    dateInputElement.value = "";
  }
  console.log(todoList);

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //console.log(todoObject);

    const { todoName, todoDate } = todoObject;
    //console.log(todoName);
    //console.log(todoDate);

    let html = `
      <div>${todoName}</div>
      <div>${todoDate}</div>
      <button onclick="todoList.splice(${i}, 1); renderTodoList()" class="delete-button">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector(".js-output-html").innerHTML = todoListHTML;

  localStorage.setItem("todoListSave", JSON.stringify(todoList));
}

function pressEnter() {
  if (event.key === "Enter") {
    clickAdd();
  }
}

