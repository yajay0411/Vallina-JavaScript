console.log("program for increamentdecrement");

const btn = document.getElementsByClassName("btn");
const body = document.querySelector("body");

let i = 0;

let changeColor = () => {
    const randomNumber1 = Math.floor(Math.random() * (255) + 0);
    const randomNumber2 = Math.floor(Math.random() * (255) + 0);
    const randomNumber3 = Math.floor(Math.random() * (255) + 0);
    body.style.backgroundColor = `rgba(${randomNumber1},${randomNumber2},${randomNumber3},0.5)`

}


function display() {
    document.getElementById("display_content").innerHTML = i;
    changeColor()

}

function incre() {
    i++;
    display()
}

function decre() {
    i--;
    display()
}

function reset() {
    i = 0
    display()
}




















