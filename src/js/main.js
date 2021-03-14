
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');
const btnAddTodo = document.getElementsByClassName('btn-add-todo')[0];
const todoList = document.querySelector('.todolist');
var todo = document.getElementsByClassName('todo');
const todoLine = document.getElementsByClassName('line');
const closed = document.getElementsByClassName('close');
let task = '';

// functions

// Bootsrap Event
inputAddTodo.addEventListener('focus', () => {
        inputAddTodo.classList.add('border-dark');
        inputAddTodo.classList.add('shadow-sm');

}, false)

inputAddTodo.addEventListener('blur', () => {
        inputAddTodo.classList.remove('border-dark');
        inputAddTodo.classList.remove('shadow-sm');
}, false);

//Add todo
btnAddTodo.onclick = function () {
        if (!inputAddTodo.value) {
                alert("Veuillez inserer une tache");
        } else {
                addTask()
                inputAddTodo.value = '';
        }
        deleteItems();
        itemChecked();
}


// ajouter une nouvelle todo
function addTask() {
        todoList.innerHTML +=
                `<div class="line col-12 m-0 mb-2 border border-dark p-0 d-flex justify-content-between align-items-center">
                <span class="todo-items w-100 h-100 d-flex align-items-center">
                   <p class="m-0 "> ${inputAddTodo.value}</p>
                </span>
                <button type="button" class="closef btn btn-danger px-3 shadow-none"><i class="fas fa-times"></i></button>
            </div>`
}

// supprimer un items
function deleteItems() {
        let i;
        for (i = 0; i < close.length; i++) {
                closed[i].onclick = function() {
                        console.log('ok');
                        const parent = this.parentElement;
                        parent.style.opacity = 0;
                        setTimeout(() => {
                                parent.style.display = "none";
                        }, 300);
                }
        }
}

// supprimer tout les items
function deleteAll() {
        todoList.innerHTML = "";
}

// items completé
function itemChecked() {
        for (const col of todoLine) {
                col.onclick = () => {
                        const span = col.getElementsByTagName('span')[0];
                        span.classList.toggle("taskChecked");
                }
        }
}