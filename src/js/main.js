
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');
const btnAddTodo = document.getElementsByClassName('btn-add-todo')[0];
const todoList = document.querySelector('.todolist');
var todo = document.getElementsByClassName('todo');
const closed = document.getElementsByClassName('close');

let task = '';
// insert in Document
inputAddTodo.addEventListener('focus', () => {
        inputAddTodo.classList.add('border-dark');
        inputAddTodo.classList.add('shadow-sm');

}, false)

inputAddTodo.addEventListener('blur', () => {
        inputAddTodo.classList.remove('border-dark');
        inputAddTodo.classList.remove('shadow-sm');
}, false);

// functions

//Add todo
btnAddTodo.onclick = function () {
        if (!inputAddTodo.value) {
                alert("Veuillez inserer une tache");
        } else {
                todoList.innerHTML +=
                        ` <p class="col-12 m-0 py-2 mb-2 border border-dark position-relative">
        <span class="todo-items">${inputAddTodo.value}</span>
        <button type="button" class="close btn btn-danger position-absolute end-0 bottom-0 h-100 px-3 shadow-none"><i class="fas fa-times"></i></button>
        </p>`
                inputAddTodo.value = '';
        }
        deleteItems()
}

function deleteItems() {
        let i;
        for (i = 0; i < closed.length ; i++) {
                closed[i].onclick = function() {   
                        const parent = this.parentElement;
                        parent.style.opacity = 0;
                        setTimeout(() => {
                                parent.style.display = "none";
                        }, 300);
                }
        }
}

function deleteAll() {
        todoList.innerHTML = "";
}