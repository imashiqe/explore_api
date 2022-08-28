function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))

}

function displayTodos(todos){
    //get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        //create the child elememt
        const todoDiv = document.createElement('div');
        // set innertext or innerHTML
        todoDiv.innerHTML = `
        
         <h1>Title : ${todo.title} </h1>
         <h4>User : ${todo.userId} </h4>
         <h5>Status : ${todo.completed == true ? 'complete' : 'not complete'} </h5>
         
        
        `;

        //appendChild
        todoContainer.appendChild(todoDiv);
    }
}


loadTodos();