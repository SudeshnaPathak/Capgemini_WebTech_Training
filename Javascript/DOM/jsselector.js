let b = document.getElementById("a");
console.log(b);
b.style.color = "red";

let list = document.getElementsByClassName("list-item")
console.log(list);
console.log(Array.isArray(list)); //Checks whether list is a pure array or not
//Here list is an HTMLCollection, not a pure array , hence we can't apply inbuilt array methods directly on it

//In JS: No paranthesis while accessing length property
for(let i = 0 ; i < list.length; i++){
    list[i].style.color = "blue";
}

//Convert Impure array(HTMLCollection) to Pure array
let list1 = Array.from(list);
console.log(Array.isArray(list1)); //Now it is a pure array

list1.map((element) => {
    element.style.color = "hotpink";
})

let tag = document.getElementsByTagName("li");
console.log(tag);

for(let i = 0 ; i < tag.length; i++){
    tag[i].style.color = "green";
}

let list2 = Array.from(tag);
list2.map((element) => {
    element.style.fontWeight = "bold";
})

let v = document.querySelector(".list-item"); //Selects only the first matching element
console.log(v);
v.style.color = "purple";

let u = document.querySelector("#a");
console.log(u);
u.style.backgroundColor = "yellow";

let z = document.querySelectorAll(".list-item"); //Selects all the matching elements returns a Nodelist
console.log(z);
// let z1 = Array.from(z); //Convert Nodelist to Pure array
z.forEach((element) => {
    element.style.backgroundColor = "lightgrey";
})

//createElement
let li = document.createElement("li");
console.log(li)
// li.innerText = "ANGULAR JS";
// li.innerText = `<h1>ANGULAR JS</h1>`; //This will be treated as a normal text not as an HTML tag
// li.textContent = "ANGULAR JS"
// li.textContent = `<h1>ANGULAR JS</h1>`; //This will be treated as a normal text not as an HTML tag
// li.innerHTML = "vuejs";
li.innerHTML = `<h3>ANGULAR JS</h3>`; //This will be treated as an HTML tag
let ul = document.querySelector("ul"); //Target ul Tag
ul.append(li);
console.log(ul);

//Navigator
console.log(navigator.userAgent); //Returns the browser details
console.log(navigator.language); //Returns the browser language
console.log(navigator.platform); //Returns the OS platform
console.log(navigator.onLine); //Returns whether the system is online or not
console.log(navigator.appName); //Returns the application name


//Event Listener 
//click : Single click
//dblclick : Double click
let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.append(btn); //Adding button to the DOM
btn.addEventListener("click", ()=>{
    // window.location.href = "https://www.youtube.com/"; 
    location.assign("https://www.youtube.com/")
})

console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);

//History Objecct
document.querySelector("#back").addEventListener("click" , ()=>{
    history.back();
})
document.querySelector("#forward").addEventListener("click" , ()=>{
    history.forward();
})