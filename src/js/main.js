
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');
const btnAddTodo = document.getElementsByClassName('btn-add-todo')[0];
const todoList = document.querySelector('.todolist');
var todo = document.getElementsByClassName('todo');
const todoLine = document.getElementsByClassName('line');
const closed = document.getElementsByTagName('p');
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
                console.log(closed);
        }
        itemChecked();
}


// ajouter une nouvelle todo
function addTask() {
        todoList.innerHTML +=
                `   <div class="col-12 m-0 mb-2 border  d-flex align-items-center border-dark p-0">
                <span class="col todo-items p-0 d-table h-100">
                   <p class="col m-0 d-table-cell align-middle "> ${inputAddTodo.value}</p>
                </span>
                <button type="button" class="close btn btn-danger px-1 shadow-none col-1"><i class="fas fa-times"></i></button>
            </div>`
}

// supprimer un items
let i;
for (i =0; i< closed.length;i++) {
        closed[i].onclick = ()=> {
               console.log(closed[i]);
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