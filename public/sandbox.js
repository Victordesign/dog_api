const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
console.log(search)


// generate template String
const generateTemplate = (todos) =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todos}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
     list.innerHTML += html;
}




addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todos = addForm.add.value.trim();
    if(todos.length){
        console.log(todos.length)
        generateTemplate(todos);
    }  
    addForm.reset();
})

list.addEventListener('click',(e)=>{

    if(e.target.classList.contains('delete')){ 
       e.target.parentElement.remove();
       console.log(e.target.classList)
    }
})

const filterTodos = (terms) =>{
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(terms))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(terms))
    .forEach((todo) => todo.classList.remove('filtered'));
}
// keyup
search.addEventListener('keyup',()=>{
    const terms = search.value.trim().toLowerCase();
    filterTodos(terms)
})