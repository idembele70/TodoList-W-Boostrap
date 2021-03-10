
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');
const btnAddTodo = document.getElementsByClassName('btn-add-todo')[0];
const todoList = document.querySelector('.todolist');
const deleteTask = document.querySelectorAll('.delete-btn');
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
for (const delL of deleteTask) {
        delL.onclick = ()=>{
                delL.parentElement.style.display = "none";
        };
}

//Add todo
class Todo {
        AddTodo() {
                btnAddTodo.onclick = function () {
                        if (!inputAddTodo.value) {
                                alert("Veuillez inserer une tache");
                        } else {
                                newtask(inputAddTodo.value);
                                inputAddTodo.value = '';
                        }
                }
        }
}

// new line of task
function newtask(task) {
        todoList.innerHTML +=
        ` <p class="col-12 m-0 py-2 mb-2 border border-dark position-relative">
        <span class="todo-items">${task}</span>
        <button type="button" class=" delete-btn btn btn-danger position-absolute end-0 bottom-0 h-100 px-3 shadow-none"><i class="fas fa-times"></i></button>
    </p>`
}

// delete task 
// const deleteTask  = () => {
        
// }
// executer fonction
const monTodo = new Todo;
monTodo.AddTodo();

