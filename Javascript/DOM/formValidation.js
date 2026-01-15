let uname = document.querySelector("#uname");
let pnumber = document.querySelector("#pnumber");
let unameError = document.querySelector("#unameError");
let pError = document.querySelector("#pError");

let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault(); // to prevent form submission
    let isValid = true;
    let no = /^[7-9][0-9]{9}$/;
    if(uname.value.length=="" || uname.value.length<3 || uname.value.length>12)
    {
        unameError.innerText = "username must be between 3 to 12 characters";
        isValid = false;
    }
    else if(!uname.value.match(/^[A-Za-z]+$/))
    {
        unameError.innerText = "username must not contain numbers";
        isValid = false;
    }
    else if(pnumber.value.length=="" || pnumber.value.length!=10)
    {
        pError.innerText = "phone number must be 10 digits";
        isValid = false;
    }
    else if(!no.test(pnumber.value))
    {
        pError.innerText = "phone number must start with 7,8 or 9";
        isValid = false;
    }
})