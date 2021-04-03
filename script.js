//The 5 questions for my code quiz
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

let startButton = document.getElementById("start-button");
let nextButton = document.getElementById("next-button");
let timer = document.getElementById("timer");
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let timeLeft = 75;
// let quizIndex = 0
let timerInterval;
//Changes the question order every time you start the quiz
let shuffledQuestions, quizIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  quizIndex++;
  setNextQuestion();
});

//The timer and and time left section
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

let initials = "";
// let score = 0;
// //Display High Score list
// let highScoreList = JSON.parse(localStorage.getItem("highscore")) || [];
// // let list = JSON.parse("highscore")
// let Object = JSON.parse(scores);
// let lowest_scoree = Object[5].score;
// document.getElementById("low-score").value = lowest_score

// //for loop
// for (let i=0; i<Object.length; i==) {
//   //console.log [i];
//   let li = document.createElement("li");
//   let txt = document.createTextNode(Object[i].name + " ... " + Object[i].score);
//   li.appendChild(text);
//   list.appendChild(li);

//   if (i===0) {
//     li.setAttribute("class","top1")
//   }
//   if (i===1){
//     li.setAttribute("class", "top2")
//   }
//   if (i===2){
//     li.setAttribute("class", "top3")
//   }
// }

document.querySelector(".Highscores").addEventListener("click", function () {
  highScoreList.name = initials;
  highScoreList.score = score;
  hideAll();
  showScore();
});

//The button for starting my quiz
function startQuiz() {
  startTimer();
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  quizIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

//The function for setting the next question and resetting to the default state
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[quizIndex]);
}

function showQuestion(question) {
  console.log(question);
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    let answerButtonElement = document.getElementById("answer-buttons");
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

//The function when you select an answer
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
    document.getElementById("initials-submit").classList.remove("hide");
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

//Classes that show the background color for correct and wrong
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//Submitting your initials
document
  .querySelector("#initials-submit")
  .addEventListener("click", function () {
    initials = document.querySelector("#initials").value;
    localStorage.setItem("initials", initials);
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
