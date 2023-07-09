
var startButtonEl = document.querySelector("#begin")
var timeRemainingEl = document.querySelector("#timer")
var introEl = document.querySelector("#intro")
var scoreButtonEl = document.querySelector("#scoreboard")
var questionNumEl = document.querySelector(".heading")
var questionEl = document.querySelector(".questions")
var answerEl = document.querySelectorAll(".answer")

var correct = 0;
var wrong = 0;
var currentQuestionIndex = [];
var currentAnswerIndex = [];
var currentGuess = [];



const questions = [
    "What is JavaScript mainly used for?",
    "What do you use to iterate through an array?",
    "Which of the following is a data type?",
    "Inside which HTML element do we link an external JavaScript file?",
    "What is the proper syntax for setting an attribute to an element using JavaScript?",
    "What does console.log('Hello World') do?",
];

const answers = [
    ["Style", "Structure", "Interactivity", "Interdimensional Travel"],
    ["An 'if' statement", "A 'for' loop", "iterate.array", ".querySelector"],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
]
var highscores = []
var playerName = [];



function init() {
    var scores = JSON.parse(localStorage.getItem(highscores));
    var player = JSON.parse(localStorage.getItem(playerName));

    if(scores) {
        scores = highscores.scores
    }

    if(player){
        player = playerName.player
    }


}

function clickStart(event){
    countdown();

    for(let i = 0; i < questions.length; i++){
        currentQuestionIndex = Math.floor(Math.random() * questions.length)
        questionEl.textContent = questions[currentQuestionIndex];
        
        questionNumEl.textContent = "Question #" + (i + 1) + ":";

        if(questions[currentQuestionIndex]){
            currentAnswerIndex = answers[i];
            answerEl.innerHTML = answers.currentAnswerIndex
        }
    }
    

    //choose question

    //questionAnswered();

    //hide intro screen

    //hide start button

    //hide results


}
startButtonEl.addEventListener("click", clickStart);


function countdown(){
    var timer = 21;
    var timerCountdown = setInterval(function(){
        timer--;
        timeRemainingEl.textContent = timer;
        if(timer <= 10){
            timeRemainingEl.setAttribute("style", "color: red")
        }
        if(timer < 0) {
            clearInterval(timerCountdown)
            timeRemainingEl.setAttribute("style", "display: none;")
            alert("TIME'S UP!")
        }
    }, 1000);
}

function questionAnswered(){

}

function gameEnd() {

}

function storeScores() {

}