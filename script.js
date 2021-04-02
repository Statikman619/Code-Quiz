const questions = [
  {
    question: "When was Javascript created?",
    answers: [
      { text: "1995", correct: true },
      { text: "1993", correct: false },
      { text: "1997", correct: false },
      { text: "1999", correct: false },
    ],
  },
  {
    question: "What are Javascript data types?",
    answers: [
      { text: "Number", correct: true },
      { text: "String", correct: true },
      { text: "Boolean", correct: true },
      { text: "All the above", correct: true },
    ],
  },
  {
    question: "Is Javascript case sensitive?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
      { text: "Maybe", correct: false },
      { text: "I don't know", correct: false },
    ],
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Does only math", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Daily objective media", correct: false },
      { text: "Document overview media", correct: false },
    ],
  },
  {
    question: "Which built in method sorts the elements of an array?",
    answers: [
      { text: "Reverse", correct: false },
      { text: "Element", correct: false },
      { text: "Sort", correct: true },
      { text: "Object", correct: false },
    ],
  },
];

var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var timer = document.getElementById("timer");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var timeLeft = 75;
// var quizIndex = 0
let timerInterval;
let shuffledQuestions, quizIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  quizIndex++;
  setNextQuestion();
});

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time Left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft = 0;
      timer.textContent = "Time Left: " + timeLeft;
    }
  }, 1000);
}

var initials = "";
var score = 0;
var highScoreList = JSON.parse(localStorage.getItem("highscore")) || [];
// var list = JSON.parse("highscore")

document.querySelector(".Highscores").addEventListener("click", function () {
  highScoreList.name = initials;
  highScoreList.score = score;
  hideAll();
  showScore();
});

function startQuiz() {
  startTimer();
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  quizIndex = 0;
  questionContainerElement.classList.remove("hide");
  //hide submit button
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[quizIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    var answerButtonElement = document.getElementById("answer-buttons");
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  if (!correct) {
    timeLeft = timeLeft - 10;
    timer.textContent = "Time Left: " + timeLeft;
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > quizIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    console.log(quizIndex);
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
    endGame();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

document
  .querySelector("#initials-submit")
  .addEventListener("click", function () {
    initials + document.querySelector("#initials");
    console.log(initials);
  });

function endGame() {
  clearInterval(timerInterval);
  timeLeft = 0;
  timer.textContent = "Time Left: " + timeLeft;
  //hide all the buttons document ID and answer buttons
  //
  //end the quiz
  //track your score by logging your initials
}
