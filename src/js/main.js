
// Selector
const todoTitle = document.querySelector('.todo-title');
const inputAddTodo = document.getElementById('input-add-todo');

// insert in Document
inputAddTodo.addEventListener('focus',()=>{
        inputAddTodo.classList.add('border-dark');
        
        inputAddTodo.classList.add('shadow-sm');
},true)

inputAddTodo.addEventListener('blur',()=>{
        inputAddTodo.classList.remove('shadow-sm');

        inputAddTodo.classList.remove('border-dark');
},true)



