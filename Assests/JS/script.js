
var startButtonEl = document.querySelector("#begin")
var timeRemainingEl = document.querySelector("#timer")
var quizEl = document.querySelector(".quiz")
var introEl = document.querySelector(".intro")
var challengeEl = document.querySelector(".challenge")
var instructionEl = document.querySelector(".instructions")
var scoreButtonEl = document.querySelector(".scoreboard")
var headingEl = document.querySelector(".heading")
var questionEl = document.querySelector(".questions")
var answerEl = document.getElementById("answers")
var answerBtnEl = document.getElementsByClassName(".answer")
var initialInput = document.querySelector(".score")
var finalScore = document.getElementById("score")
var submitBtn = document.getElementById("submit")
var input = document.getElementById("input")

var timer = null;
var timeRemaining = 0;

var score = 0;
var newScore = input.value + ": " + score;
var currentQuestionIndex;
var currentAnswerIndex;

const questions = [
    "What is JavaScript mainly used for?",
    "What do you use to iterate through an array?",
    "Which of the following is a data type?",
    "Inside which HTML element do we link an external JavaScript file?",
    "What is the proper method for setting an attribute to an element using JavaScript?",
    "What does console.log('Hello World') do?",
];

const answers = [
    ["Style", "Structure", "Interactivity", "Interdimensional Travel"],
    ["An 'if' statement", "A 'for' loop", "iterate.array", ".querySelector"],
    ["String", "Function", "Data", "Interval"],
    ["<head>", "<body>", "<knees>", "<footer>"],
    [".attSetting()", ".setting.Att()", ".attributeSet()", ".setAttribute()"],
    ["Logs 'Hello World' In the console", "Sends a messge to the world", "Saves 'Hello World' to the internet", "Syntax Error"]
]

const correctAnswers = [
    answers[0][2],
    answers[1][1],
    answers[2][0],
    answers[3][1],
    answers[4][3],
    answers[5][0]
]

const duration = 21;

function clickStart(){
    
    if (!timer) {
        timeRemaining = duration
        timer = setInterval(countdown, 1000)
        //hide intro elements
        hideElement(instructionEl)
        hideElement(scoreButtonEl)
        hideElement(startButtonEl)
        hideElement(challengeEl)
        showElement(quizEl)
        score = 0
    }
}

function countdown(){
    timeRemaining--;
    timeRemainingEl.textContent = timeRemaining;
    if(timeRemaining <= 10){
        timeRemainingEl.setAttribute("style", "color: red")
    }
    handleGameEnd();
};

var q = 1;
var i = 0;

function populateAnswers(){
    handleGameEnd();
    //set question number
    headingEl.textContent = "Question #" + (q) + ":"
    //choose question
    questionEl.innerText = questions[i]
    for (let j = 0; j < 4; j++){
        answerEl.children[j].textContent = answers[i][j]
    }
}

var clickedCorrect;
function questionAnswered(){
    clickedCorrect = correctAnswers[i]
    answerEl.addEventListener("click", function(event){
        event.stopPropagation(answerEl);
        if(event.target.innerText == clickedCorrect){
            event.target.classList.add("correct");
            setTimeout(populateAnswers, 750);
            score = score + 5;
            setTimeout(cleanup, 750);
            handleGameEnd();
        }else{
            event.target.classList.add("wrong");
            setTimeout(populateAnswers, 750);
            // timeRemaining = timeRemaining - 3;
            setTimeout(cleanup, 750);
            handleGameEnd();
        }
    })
}

function cleanup(){
    for(let i = 0; i < 4; i++){
        answerEl.children[i].classList.remove("correct")
        answerEl.children[i].classList.remove("wrong")
    }
    answerEl.classList.remove("wrong")
    clickedCorrect = correctAnswers[i];
    i++
    q++
}

function showScoreboard() {
    hideElement(startButtonEl)
    hideElement(instructionEl)
    hideElement(challengeEl)
}

function storeScore(){
    localStorage.setItem("scores", newScore)
}

function hideElement(element){
    element.classList.add("hide")
}

function showElement(element){
    element.classList.remove("hide")
}

function handleGameEnd(){
    if(i >= questions.length + 1) {
        hideElement(quizEl)
        clearInterval(timer)
        alert("GAME OVER!")
        hideElement(timeRemainingEl)
        showElement(startButtonEl)
        showElement(scoreButtonEl)
        timer = null;
        timeRemaining = 0;
        q = 1
        i = 0
        headingEl.textContent = "Question #" + (q) + ":"
        questionEl.innerText = questions[i]
        for (let j = 0; j < 4; j++){
            answerEl.children[j].textContent = answers[i][j]
        }
        clickedCorrect = correctAnswers[i];
        showElement(initialInput)

        return

    }   
}

populateAnswers();
questionAnswered();
startButtonEl.addEventListener("click", clickStart);
scoreButtonEl.addEventListener("click", showScoreboard)
submitBtn.addEventListener("click", storeScore)
