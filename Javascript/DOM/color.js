let div = document.querySelector("#a")
let btn = document.querySelector("#a button") // Select the button inside the parent element div with id "a"

function randomColor() {
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += parseInt(Math.random() * 10);
    }
    div.style.backgroundColor = color;
}

btn.addEventListener("click", randomColor);