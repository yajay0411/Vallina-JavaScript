console.log("program for a Random Image");


const body = document.querySelector("body");
const imagecard = document.getElementById("img")
const button = document.querySelector(".btn");


button.addEventListener("click", () => {
    const randomNumber1 = Math.floor(Math.random() * (255) + 0);
    const randomNumber2 = Math.floor(Math.random() * (255) + 0);
    const randomNumber3 = Math.floor(Math.random() * (255) + 0);

    var timestamp = new Date().getTime();
    const randomImageUrl = "https://source.unsplash.com/random/?&t=" + timestamp
    
    body.style.backgroundColor = `rgba(${randomNumber1},${randomNumber2},${randomNumber3},0.5)`;
    imagecard.src = randomImageUrl;
})




const inputs = document.querySelectorAll('.control input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

