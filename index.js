const currentTodos = [];
const doneTodos = [];

function todos(){
    currentTodos.push("Get Dry cleaning", "Review functions", "Review arrays");
    doneTodos.push("Finish all coded tasks", "Sent important email");
    console.log("Current todos: ");
    console.log(currentTodos);
    console.log("Done todos: ")
    console.log(doneTodos);
}
todos();

console.log("*************************");

function completedTodo(todo){
    for (let i = 0; i < currentTodos.length; i++){
        if(todo.includes(currentTodos[i])){
            currentTodos.splice(i, 1);
            doneTodos.push(todo);
        }
    }
    return doneTodos, currentTodos;

}
console.log(completedTodo("Get Dry cleaning"));

console.log("*************************");

function validateTodo(todo){
    if (todo.length > 2){
        return true;
    }
    return false;
}
console.log(validateTodo("Clean"));

console.log("*************************");

function addNewTodo(todo){
    if (validateTodo(todo) === true){
        currentTodos.push(todo);
    }
}
addNewTodo("Study");
console.log(currentTodos);

console.log("*************************");

function uncheckTodo(undo){
    undo = doneTodos[undo];
    for (let i = 0; i < doneTodos.length; i++){
        if(undo.includes(doneTodos[i])){
            doneTodos.splice(i, 1);
            currentTodos.push(undo);
        }
    }
    return doneTodos, currentTodos;

}
console.log(uncheckTodo(1));

console.log("*************************");

function editTodo(index, todoList, updatedTodo){
    if (todoList === currentTodos || doneTodos){
        todoList[index] = updatedTodo;
    }
    return todoList;
}
console.log(editTodo(1, doneTodos, "Break the law"));