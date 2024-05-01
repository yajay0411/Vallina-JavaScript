console.log("main.js connected");



let mainContainer = document.getElementById("main-box");
let Box = document.getElementById("container");
let addButton = document.getElementById("add-task-button");
let tasksContainer = document.getElementById("task-container");

mainContainer.addEventListener("mousemove", (e) => {
    mainContainer.parentElement.style.backgroundColor = `rgba(${e.offsetX-5%200},${e.offsetY-10%200},200,0.5)`;
    mainContainer.previousElementSibling.style.backgroundColor =`rgba(${e.offsetX-5%200},${e.offsetY-15%100},${100},0.5)`;
});

let add_Item =false

onchange=(ev)=>{
    if(ev.target.value !==''){
        add_Item =true;
    }
}
addItem=()=> {
    if(add_Item === true){
        let newtask = document.getElementById("input").value;
        let taskCard = document.createElement("div");
        
        let task = document.createElement("h1");
        task.className = "task";
        
        let deleteButton = document.createElement("button")
        deleteButton.appendChild(document.createTextNode("X"))
        
        task.appendChild(document.createTextNode(newtask));
        
        
        taskCard.className = "task-card";
        taskCard.id = `task-card-${newtask}`;
        deleteButton.className = "delete-button";
        deleteButton.onclick =()=>{removeItem(`task-card-${newtask}`)};
        
        taskCard.appendChild(task);
        
        tasksContainer.appendChild(taskCard);
        taskCard.appendChild(deleteButton)
        }
        
        document.getElementById("input").value = ''  
        add_Item =false  
        }



    function removeItem (task_id) {
let remove_task = document.getElementById(task_id) 

        tasksContainer.removeChild(remove_task)
    }
   






