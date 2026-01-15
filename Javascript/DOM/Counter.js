let h1 = document.querySelector("h1");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#d");
let res = document.querySelector("#res");

let counter = 0;

function increment(){
    counter++;
    h1.innerText = counter;
}

function decrement(){
    counter--;
    h1.innerText = counter;
}

function reset(){
    counter = 0;
    h1.innerText = counter;
}

inc.addEventListener("click", increment); //On using parentheses it will call the function immediately before clicking the button
dec.addEventListener("click", decrement);
res.addEventListener("click", reset);