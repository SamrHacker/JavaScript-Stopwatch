let Interval;

let minutes = 1;
let seconds = 0;
let tens = 0;

let currentTime = `${minutes} : ${seconds} : ${tens}`;

function startCountdown() {
    tens--;

    if(tens <= 9) {
        tens = "00" + tens;
    }
    if(tens > 9) {
        tens = tens;
    }

    if (tens < 1) {
        tens = 99;
        tens = tens;
        seconds--;
        seconds = seconds;
    }

    if (seconds < 9) {
        seconds = "0" + seconds;
    }

    if (seconds < 1) {
        seconds = 59;
        seconds = seconds;
        minutes--;
        minutes = minutes;
    }

    if (minutes < 9) {
        minutes = "0" + minutes;
    }

}

clearInterval(Interval);
Interval = setInterval(startCountdown, 10);
console.log(currentTime);