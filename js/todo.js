let buttonDOM = document.querySelector('#liveToastBtn')
let listDOM = document.querySelector('#list')
let taskDOM = document.querySelector('#task')
let ullength = document.querySelector("li");


// X button to delete the list items
for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}


buttonDOM.addEventListener('click', newElement)

function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}

// adding new element

function newElement() {
    if (taskDOM.value.trim().length === 0) {
        $(".error").toast("show")
    } else {
        $(".success").toast("show");


        let liDOM = document.createElement("li");
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = taskDOM.value;
        taskDOM.value = "";

        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
        }
}

// Saving List on Local Storage

