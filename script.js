var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button")
var timer = document.getElementById("timer");
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var timeLeft = 75

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionsIndex++
    setNextQuestion()})

function startTimer(){
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time Left: " + timeLeft;
        if (timeLeft <=0){
            clearInterval(timerInterval)
        }
        }, 1000)
}




function startQuiz(){
    startTimer()
    startButton.classList.add("hide")
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
    clearStatusClass(document.body)
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
    if (shuffledQuestions.length > currentQuestionsIndex + 1){
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }}

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
    question: "When was Javascript created?",
    answers: [
        { Text: "1995", correct: true},
        { Text: "1993", correct: false},
        { Text: "1997", correct: false},
        { Text: "1999", correct: false}
       ]
    },
    { 
    question: "What are Javascript data types?",
    answers: [
        { Text: "Number", correct: true},
        { Text: "String", correct: true},
        { Text: "Boolean", correct: true},
        { Text: "All the above", correct: true}
       ]
    },
    {
    question: "Is Javascript case sensitive?",
    answers: [
        { Text: "Yes", correct: true},
        { Text: "No", correct: false},
        { Text: "Maybe", correct: false},
        { Text: "I don't know", correct: false}
       ]
    }, 
    {
    question: "What does DOM stand for?",
    answers: [
        { Text: "Does only math", correct: false},
        { Text: "Document Object Model", correct: true},
        { Text: "Daily objective media", correct: false},
        { Text: "Document overview media", correct: false}
       ]
    },
    {
    question: "Which built in method sorts the elements of an array?",
    answers: [
        { Text: "Reverse", correct: false},
        { Text: "Element", correct: false},
        { Text: "Sort", correct: true},
        { Text: "Object", correct: false}
       ]
    }, 
]