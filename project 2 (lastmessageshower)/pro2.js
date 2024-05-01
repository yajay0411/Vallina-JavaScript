console.log("this is a code for last message wrote");

const body = document.querySelector("body");
const btn = document.querySelector("#submit-btn");

const changeColor = () => {
    let randomNumber1 = Math.floor(Math.random() * (255)) + 0;
    let randomNumber2 = Math.floor(Math.random() * (255)) + 0;
    let randomNumber3 = Math.floor(Math.random() * (255)) + 0;
    body.style.backgroundColor = `rgba(${randomNumber1},${randomNumber2},${randomNumber3},0.5)`
}

btn.addEventListener("click", (e) => {

    e.preventDefault();

    const message = document.querySelector("#message");
    const message_display = document.querySelector("#message-display");

    if (message.value === "") {
        message_display.textcontent = "Please Enter A Value To Pass";
    }
    else {
        message_display.innerHTML = message.value;
        return message.value = '';
    }

    changeColor();
})





































