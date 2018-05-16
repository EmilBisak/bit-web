var body = document.querySelector("body");
var btnTurnOnOff = document.querySelector(".turnoff")
var btnToggle = document.querySelector(".toggle")
var interval;

function changeColor() {
    body.classList.toggle("changeBgColor");
}

function cancelToggle() {
    // btnToggle.removeAttribute("onclick");

    if(!interval) {
        interval = setInterval(function(){blink()},1000);
        btnTurnOnOff.textContent = "Turn Off";
    }else{
        clearInterval(interval);
        btnTurnOnOff.textContent = "Turn On"
        interval = undefined;
    }
     
}


function blink(){
    if (body.classList.contains("changeBgColor")) {
        body.classList.remove("changeBgColor")
    }else {
        body.classList.add("changeBgColor")
    }
}