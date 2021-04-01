var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button")
var timer = document.getElementById("timer");
var questionContainerElement = document.getElementById("question-Container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-Buttons")
var timeLeft = 75

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener("click", startQuiz)

var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = "Time Left: " + timeLeft;
    if (timeLeft <=0)
    }, 1000)
}

function startQuiz(){
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    }   else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [

    {
]
