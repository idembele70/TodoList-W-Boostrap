
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.querySelector('input.input-add-todo');

// insert in Document
inputAddTodo.addEventListener('focus',()=>{
        inputAddTodo.classList.remove('border','border-3');
},true)

inputAddTodo.addEventListener('blur',()=>{
        inputAddTodo.classList.add('border','border-3')
},true)



