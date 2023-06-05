const head = document.getElementById("curr-color");
const button = document.getElementById("main-button");
const body = document.body;

console.log(button);


button.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    head.textContent = `Current Color : rgb{${red},${blue},${green}}`
    body.style.background = `rgb(${red},${blue},${green})`
})