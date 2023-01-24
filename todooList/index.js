let list=[];
let idd=0;

function concat(s){
    return s.slice(0,66)+'...'
}

function addTodoToList() {
    const text=document.getElementById('todo').value;
    const id=idd;
    idd+=1;
    const newTodo={
        id:id,
        todo:text,
    }
    list.push(newTodo);
}


function loop(){
    const place=document.getElementById('todo__list')
    place.innerHTML=''
    list.forEach((todos)=>{
        const div=document.createElement('DIV')
        const p1 =document.createElement('P')
        const button =document.createElement('BUTTON')
        const text1=document.createTextNode(todos.todo)
        const text2=document.createTextNode('del')
        p1.appendChild(text1)
        button.appendChild(text2)
        button.addEventListener('click',()=>{
            removeTodo(todos.id)
        })
        div.appendChild(p1)
        div.appendChild(button)
        div.classList.add('todo__row')
        place.appendChild(div)
    })
}

function addTodo() {
    const text=document.getElementById('todo').value;
    if(text!=''){
        addTodoToList()
        loop()
    }  
}

function removeTodo(id){
    list=list.filter((todos)=>todos.id!==id)
    loop()
}