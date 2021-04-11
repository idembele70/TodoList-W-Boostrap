// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');
const btnAddTodo = document.getElementsByClassName('btn-add-todo')[0];
const todoList = document.querySelector('.todolist');
var todo = document.getElementsByClassName('todo');

// Compteur Variable
const compteur = 0;
let todoCompteur = todoList.childElementCount;
const TodoCompteurContainer = createElems('span');
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
                todoList.innerHTML +=
                        `<div class="todo-line position-relative col-12 m-0 mb-2 d-flex align-items-center p-0">
                <span onclick="itemChecked(this)" class="taskNotChecked col todo-items p-0 d-table h-100">
                   <p class="col m-0 ms-1 d-table-cell align-middle ">${inputAddTodo.value}</p>
                   </span>
                   <button type="button" onclick="closeTodo(this.parentElement)" class="close btn btn-danger px-1 shadow-none rounded-0 col-1"><i class="fas fa-times"></i></button>
                </div>`
                inputAddTodo.value = '';
                todoCompteur++
                todoCompteurInit();
        }
}
// supprimer un items
function closeTodo(todo) {
        todo.style.opacity = 0;
        setTimeout(() => {
                todoList.removeChild(todo)
        }, 200);
        todoCompteur--;
        todoCompteurInit()
}

// supprimer tout les items
function deleteAll() {
        todoList.innerHTML = "";
        todoCompteur = 0
        todoCompteurInit()
}

// items completé
function itemChecked(e) {
        return e.classList.toggle('taskChecked'), e.classList.toggle('taskNotChecked');
}

(function todoCompteurFunc() {
        TodoCompteurContainer.style.opacity = .4;
        TodoCompteurContainer.appendChild(document.createTextNode(`(${todoCompteur})`));
        todoTitle.appendChild(TodoCompteurContainer);
})()

// TodoCompteur 
function todoCompteurInit() {
       TodoCompteurContainer.replaceChild(document.createTextNode(`(${todoCompteur})`),TodoCompteurContainer.childNodes[0]);
}

function createElems(elems) {
        return document.createElement(`${elems}`);
}
