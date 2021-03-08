
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');
const btnAddTodo = document.getElementsByClassName('btn-add-todo')[0];
// insert in Document
inputAddTodo.addEventListener('focus',()=>{
        inputAddTodo.classList.add('border-dark');
        inputAddTodo.classList.add('shadow-sm');

},false)

inputAddTodo.addEventListener('blur',()=>{
        inputAddTodo.classList.remove('border-dark');
        inputAddTodo.classList.remove('shadow-sm');
},false);

class todo {
 AddTodo() {
        
}
}