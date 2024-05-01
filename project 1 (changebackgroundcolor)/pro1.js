console.log("this program is for changing background colour with a button click");

let body = document.querySelector("body");
let btn = document.querySelector("button");
const color = ["red", "green", "yellow", "pink", "powderblue"];
;

btn.addEventListener("click", function changebg() {
    let randomNumber1 = Math.floor(Math.random() * (255)) + 0;
    let randomNumber2 = Math.floor(Math.random() * (255)) + 0;
    let randomNumber3 = Math.floor(Math.random() * (255)) + 0;

    body.style.backgroundColor = `rgba(${randomNumber1},${randomNumber2}, ${randomNumber3},0.5)`
})




















