var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timeLeft = 75

startButton.addEventListener("click", function(){

}

var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = "Time Left: " + timeLeft;
    if (timeLeft <=0)
    }, 1000)

}


