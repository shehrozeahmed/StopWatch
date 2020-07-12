var min = 0
var sec = 0
var msec = 0
var minTimer = document.getElementById("min")
var secTimer = document.getElementById("sec")
var msecTimer = document.getElementById("msec")
var interval;
function timer() {
    msec++
    msecTimer.innerHTML = msec;

    if (msec >= 100) {
        sec++
        secTimer.innerHTML = sec
        msec = 0

    }
    else if (sec >= 60) {
        min++
        minTimer.innerHTML = min
        sec = 0
    }
}
function start() {
    interval = setInterval(timer, 10)
    
}

// function disablebtn(){
//     var btn=document.getElementById("disbtn")
//     btn.disabled= true;
// }

function pause() {
    clearInterval(interval)
   
}

function reset() {
    min = 0
    sec = 0
    msec = 0
    minTimer.innerHTML = min
    secTimer.innerHTML = sec
    msecTimer.innerHTML = msec
    pause()
    
    
}
