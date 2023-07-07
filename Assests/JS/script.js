
var startButton = document.querySelector("#begin")
var timeRemaining = document.querySelector("#timer")
var intro = document.querySelector("#intro")
var scoreButton = document.querySelector("#scoreboard")
var quiz = document.querySelector("#quiz")
var answerA = document.querySelector("#answerA")

var timer = 21;


function countdown(event){
    event.preventDefault();
    var timerCountdown = setInterval(function(){
        timer--;
        timeRemaining.textContent = timer;
        if(timer <= 10){
            timeRemaining.setAttribute("style", "color: red")
        }
        if(timer < 0) {
            clearInterval(timerCountdown)
            timeRemaining.setAttribute("style", "display: none;")
            alert("TIME'S UP!")
        }
    }, 1000);
}

function displayQuestion(){
    
}

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", function(){
    intro.setAttribute("style", "display: none")
    scoreButton.setAttribute("style", "display: none")
    quiz.setAttribute("style", "display: flex;")
});

answerA.addEventListener("click", function(){
    timer = timer -5;
    timeRemaining.textContent = timer;
    if(timer <= 0) {
        clearInterval(timerCountdown)
    }
});