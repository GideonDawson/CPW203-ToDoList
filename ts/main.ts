class ToDoItem{
    title:string;
    dueDate:Date;
    isCompleted:boolean; 
}

/*
let item = new ToDoItem();
item.title = "Testing";
item.dueDate = new Date(2020, 6, 1);
item.isCompleted = false; 
*/ 

window.onload = function(){
    let addItem = document.getElementById("add");
    addItem.onclick = main; 
}

function main(){
    if(isValid()){
        let item = getToDoItem();
        displayToDoItem(item); 
    }
}

function isValid():boolean{
    return true; 
}

function getToDoItem():ToDoItem{
    let myItem = new ToDoItem(); 
    
    let titleInput = <HTMLInputElement> document.getElementById("title");
    myItem.title = titleInput.value; 

    let dueDateInput = <HTMLInputElement> document.getElementById("due-date");
    myItem.dueDate = new  Date(dueDateInput.value);

    let isCompleted = <HTMLInputElement> document.getElementById("is-complete"); 
    myItem.isCompleted = isCompleted.checked; 

    return myItem; 
}

function displayToDoItem(item:ToDoItem):void{
    let itemText = document.createElement("h3");
    itemText.innerText = item.title; 

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString(); 

    let itemDiv = document.createElement("div");
    itemDiv.onclick = markAsComplete; 
    itemDiv.classList.add("todo");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }
    
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate); 

    if(item.isCompleted){
        let completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }else{
        let incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv); 
    }

    function markAsComplete(){
        console.log(this);
        let itemDiv = <HTMLElement> this; 
        itemDiv.classList.add("completed"); 
        
        let completedItems = document.getElementById("complete-items");
        completedItems.appendChild(itemDiv); 
    }

    

}


