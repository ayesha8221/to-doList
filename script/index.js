function add(){
    let todo = document.getElementById("todo")
    let display = document.getElementById("display")
        if(todo.value=== ''){
            alert("Empty");
          }
          else if (todo.value.length < 3){
            alert("Type something else")
          }
          else if (todo.value.length > 3) {
            todo.value = todo.value.charAt(0).toUpperCase()
            + todo.value.slice(1);
          }
           else {
            let li = document.createElement("li")
            li.innerHTML = todo.value;
            display.appendChild(li);
          }
          display.value = "";
    }

    // function to delete
    function del(){
        display.value = display.value[0];
    }