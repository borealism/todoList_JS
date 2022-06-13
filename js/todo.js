let buttonDOM = document.querySelector('#liveToastBtn');
let listDOM = document.querySelector('#list');
let taskDOM = document.querySelector('#task');


buttonDOM.addEventListener('click', newElement);
document.addEventListener("DomContentLoaded", displayLocalStorage());

function newElement() {
    if (taskDOM.value) {
        createList(taskDOM.value);
        setLocalStorage(taskDOM.value);
        taskDOM.value = "";
    } else {
        console.log("HATA YABDIN");
    }
}

function createList(todo) {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = todo;
    listDOM.appendChild(liDOM);

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.textContent = "\u00D7";
    liDOM.append(closeBtn);
    
    closeBtn.onclick = removeList;
    liDOM.onclick = finishToDo;
}

function removeList(){
    this.parentElement.remove()
    deleteLocalStorage(this.previousSibling.textContent)
}

function finishToDo(){
    this.classList.toggle("checked")
}

function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo;
}

function displayLocalStorage(){
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
}

function setLocalStorage(todo){
    let todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}