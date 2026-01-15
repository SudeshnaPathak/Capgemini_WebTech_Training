let h1 = document.querySelector("h1")

function digitalClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute =  minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    let timestamp = `${hour}:${minute}:${second}`;
    h1.innerText = timestamp;
}

digitalClock(); // Initial call to display time immediately
//To execute the function every second
//setInterval(function, milliseconds)
setInterval(digitalClock, 1000);