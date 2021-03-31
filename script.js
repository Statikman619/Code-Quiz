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
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
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

function selectAnswer(){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children)

}

const questions = [
    }

    {
]
