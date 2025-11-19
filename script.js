let displayTime = document.querySelector(".display-time");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");


let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;

function pad(num) {
    return num.toString().padStart(2, '0');
}

function startTimer() {
    msec++;

    if (msec == 100) {
        msec = 0;
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    displayTime.innerHTML = `${pad(min)} :  ${pad(sec)} :  ${pad(msec)}`;

}


startBtn.addEventListener("click", () => {
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
})


resetBtn.addEventListener("click", () => {
    clearInterval(timerId);
    displayTime.innerText = "00 : 00 : 00";
    min = msec = sec = 0;
    timerId = null;
})