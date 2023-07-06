
var startButton = document.querySelector("#begin")
var timeRemaining = document.querySelector("#timer")
var intro = document.querySelector("#intro")
var scoreboard = document.querySelector("#scoreboard")
var question = document.querySelector("#question")

var timer = 21;


function countdown(event){
    event.preventDefault();
    var timerCountdown = setInterval(function(){
        timer--;
        timeRemaining.textContent = timer;
        if(timer <= 10){
            timeRemaining.setAttribute("style", "color: red")
        }
        if(timer === 0) {
            clearInterval(timerCountdown)
        }
    }, 1000, true);
}

function displayQuestion(){
    
}

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", function(){
    intro.setAttribute("style", "display: none")
    scoreboard.setAttribute("style", "display: none")
});