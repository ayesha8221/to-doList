function add(){
    let todo = document.getElementById("todo")
    let display = document.getElementById("display")
        if(todo.value=== ''){
            alert("You must write something!");
          }
          else if (todo.value.length < 3){
            alert("Too Short")
          }
        //   else if (todo.value) {
        //   }
           else {
            let li = document.createElement("li")
            // let checkbox = todo.value;
            // checkbox.type = 'checkbox'
            // checkbox.setAttribute('id', 'check')
            li.innerHTML = todo.value;
            display.appendChild(li);
          }
        //   display.value = "";
    }