var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var questionContainerElement = document.getElementById("questionContainerElement")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answerButtons")
var timeLeft = 75

startButton.addEventListener("click", startQuiz)

var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = "Time Left: " + timeLeft;
    if (timeLeft <=0)
    }, 1000)
}

function startQuiz(){
    console.log("started")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(question) {
    
}

function selectAnswer(){

}


