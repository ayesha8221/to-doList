
// let toDoList = []

function add(){
    let toDo = document.getElementById("todo")
    let display = document.getElementById("display")
        if(toDo.value === ''){
            alert("Enter something");
          }
           else if (toDo.value.length < 3){
            alert("Type something else");
          }
          // else if (toDo.value.length >= 3) {
          //   toDo.value = display.value.charAt(0).toUpperCase()
          //   + display.value.slice(1);
          // }
           else {
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.setAttribute('id', 'check')
            display.append(checkbox); 
            let li = document.createElement("li")
            li.innerHTML = toDo.value;
            display.appendChild(li);
            let button = document.createElement("button");
            button.innerHTML = "❌";
            display.appendChild(button);
          } 
          display.value = "";
    }


    
    // let todoArray = [];

    // addTaskButton.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   let todo = localStorage.getItem("todo");
    //   if (todo === null) {
    //     todoArray = [];
    //   } else {
    //     todoArray = JSON.parse(todo);
    //   }
    //   todoArray.push(text.value);
    //   text.value = "";
    //   localStorage.setItem("todo", JSON.stringify(todoArray));
    //   displayTodo();
    //  });
    // saveTasks();

    // function to sort into alphabetical order
    function sort() {

        toDoList.sort();
        display.value = toDoList;

    }
  


    // save task hoisting

    // clear input
    // todo.value=""

    // function save tasks to local sotrage

    // function saveTasks(){
    // //   // get all tasks from list using built-ins   map=loop arrays
    //   const tasks = Array.from(display.value).map(item => item.textContent);
    //   localStorage.setItem('tasks', JSON.stringify(tasks))
    // }

    // loadTasks()
    // function loadTasks() {
    //   // get tasks from local storage
    //   const savedTasks = localStorage.getItem('tasks')
    //   return if nothing saved
    //   if (!saveTasks) {
    //     return
    //   }

    //   // parse the JSON string and create list items for each task
    //   const tasks = JSON.parse(saveTasks)
    //   tasks.forEach((task) => {
    //     const listItem = document.createElement("li");
    //     listITEM.TEXTcONTENT = TASK;
    //     TASKlIST.appendChild('li')
    //   })
    // }
 