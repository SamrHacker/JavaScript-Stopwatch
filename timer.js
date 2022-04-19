window.onload = function() {
    let Interval;

    let input_minutes =  parseInt(document.querySelector('minutes').value);
    let input_seconds =  parseInt(document.querySelector('seconds').value);
    let input_tens =  parseInt(document.querySelector('tens').value);

    const appendMinutes = document.getElementById("minutes");
    const appendSeconds = document.getElementById("seconds");
    const appendTens = document.getElementById("tens");

    const buttonStart = document.getElementById('button-start');
    const buttonPause = document.getElementById('button-pause');
    const buttonReset = document.getElementById('button-reset');

    const button30min = document.getElementById('30min');
    const button15min = document.getElementById('15min');
    const button10min = document.getElementById('10min');
    const button5min = document.getElementById('5min');
    const button3min = document.getElementById('3min');
    const button1min = document.getElementById('1min');
    const button30sec = document.getElementById('30sec');
    const button15sec = document.getElementById('15sec');
    const button5sec = document.getElementById('5sec');

    let minutes = input_minutes.value * 1;
    let seconds = input_seconds.value * 1;
    let tens = input_tens.value * 1;

    let currentTime = `${minutes} : ${seconds} : ${tens}`;


    buttonStart.onClick = function() {
        clearInterval(Interval);
        Interval = setInterval(startCountdown, 10);
    };

    buttonPause.onClick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        minutes = "00";
        tens = "00";
        seconds = "00";

        appendMinutes.value = minutes;
        appendTens.value = tens;
  	    appendSeconds.value = seconds;
    };

    function startCountdown() {
        tens--;

        if(tens <= 9) {
            appendTens.value = "00" + tens;
        }
        if(tens > 9) {
            appendTens.value = tens;
        }

        if (tens < 1) {
            tens = 99;
            appendTens.value = tens;
            seconds--;
            appendSeconds.value = seconds;
        }

        if (seconds < 9) {
            appendSeconds.value = "0" + seconds;
        }

        if (seconds < 1) {
            seconds = 59;
            appendSeconds.value = seconds;
            minutes--;
            appendMinutes.value = minutes;
        }

        if (minutes < 9) {
            appendMinutes.value = "0" + minutes;
        }

    }
}