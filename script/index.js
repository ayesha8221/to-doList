let toDoList =[]

function add(){
    let todo = document.getElementById("todo")
    let display = document.getElementById("display")
        if(todo.value === ''){
            alert("Enter something");
          }
           else if (todo.value.length < 3){
            alert("Type something else");
          }
          else if (todo.value.length >= 3) {
            todo.value = todo.value.charAt(0).toUpperCase()
            + todo.value.slice(1);
          }
           else {
            let li = document.createElement("li")
            li.innerHTML = todo.value;
            display.appendChild(li);
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.setAttribute('id', 'check')
            display.append(checkbox); 
            let button = document.createElement("button");
            button.innerHTML = "❌",
            display.appendChild(button);
          } 
          display.value = "";
            console.log("hello"); 
    }
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
    //   // get all tasks from list using built-ins   map=loop arrays
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
 