
var startButtonEl = document.querySelector("#begin")
var timeRemainingEl = document.querySelector("#timer")
var introEl = document.querySelector("#intro")
var scoreButtonEl = document.querySelector("#scoreboard")
var questionNumEl = document.querySelector(".heading")
var questionEl = document.querySelector(".questions")
var answerEl = document.querySelectorAll(".answer")

var timer = null;
var timeRemaining = 0;

var correct = 0;
var wrong = 0;
var currentQuestionIndex;
var currentAnswerIndex;
var currentGuess = [];



const questions = [
    "What is JavaScript mainly used for?",
    "What do you use to iterate through an array?",
    "Which of the following is a data type?",
    "Inside which HTML element do we link an external JavaScript file?",
    "What is the proper method for setting an attribute to an element using JavaScript?",
    "What does console.log('Hello World') do?",
];

const answers = {
    q1: ["Style", "Structure", "Interactivity", "Interdimensional Travel"],
    q2: ["An 'if' statement", "A 'for' loop", "iterate.array", ".querySelector"],
    q3: ["String", "Function", "Data", "Interval"],
    q4: ["<head>", "<body>", "<knees>", "<footer>"],
    q5: [".attSetting()", ".setting.Att()", ".attributeSet()", ".setAttribute()"],
    q6: ["Logs 'Hello World' In the consile", "Sends a messge to the world", "Saves 'Hello World' to the internet", "Syntax Error"]
}

const correctAnswers = [
    answers.q1[2],
    answers.q2[1],
    answers.q3[0],
    answers.q4[1],
    answers.q5[3],
    answers.q6[0]
]

const duration = 21;

var highscores = {}

function init() {
    var scores = JSON.parse(localStorage.getItem(highscores));

    if(scores) {
        scores = highscores.scores
    }

}

function clickStart(event){
    
    if (!timer) {
        timeRemaining = duration
        timer = setInterval(countdown, 1000)
        currentQuestionIndex = Math.floor(Math.random() * questions.length)
        questionEl.textContent = questions[currentQuestionIndex]
        startButtonEl.setAttribute("style", "display: none;")
        introEl.setAttribute("style", "display: none;")
        scoreButtonEl.setAttribute("style", "display: none;")
    }
    

    //choose question

    //questionAnswered();

    //hide intro screen

    //hide start button 

    //hide results




}
startButtonEl.addEventListener("click", clickStart);


function countdown(){
    timeRemaining--;
    timeRemainingEl.textContent = timeRemaining;
    if(timeRemaining<= 10){
        timeRemainingEl.setAttribute("style", "color: red")
    }
    if(timeRemaining < 0) {
        clearInterval(timer)
        timeRemainingEl.setAttribute("style", "display: none;")
        alert("TIME'S UP!")
    }
};

function questionAnswered(){

}

function gameEnd() {

}

function storeScores() {

}

function hideElement(element){
    element.classList.add("hide")
}

function hideElement(element){
    element.classList.remove("hide")
}

init();