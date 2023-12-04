// Get DOM elements
const startButton = document.getElementById("start");
const timerElement = document.getElementById("time");
const questionTitleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");
const endScreenElement = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");

let currentQuestionIndex = 0;
let timeLeft = 120; // Set the initial time limit

const scoreScript = document.createElement("script");
scoreScript.src = "./score.js";
document.head.appendChild(scoreScript);

// Event listener for the start button
startButton.addEventListener("click", startQuiz);

// Event listener for the choices container
choicesElement.addEventListener("click", handleChoiceClick);

// Event listener for the submit button
submitButton.addEventListener("click", saveScore);

// Function to start the quiz
function startQuiz() {
  // Hide the start screen and show the questions container
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // Start the timer
  startTimer();

  // Display the first question
  displayQuestion();
}

// Function to start the timer
function startTimer() {
  const timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    // Check if the timer reaches 0
    if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionTitleElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  // Create buttons for each choice
  currentQuestion.choices.forEach(function (choice, index) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("data-index", index);
    choicesElement.appendChild(choiceButton);
  });
}

// Function to handle the click on a choice
function handleChoiceClick(event) {
  const clickedElement = event.target;

  // Check if a button was clicked
  if (clickedElement.matches("button")) {
    const selectedChoiceIndex = parseInt(
      clickedElement.getAttribute("data-index")
    );

    // Check if the selected answer is correct
    if (selectedChoiceIndex === questions[currentQuestionIndex].correctIndex) {
      feedbackElement.textContent = "Correct!";
      // Increase the score for correct answers using the function from score.js
      increaseScore();
    } else {
      feedbackElement.textContent = "Wrong! -10 seconds";
      timeLeft -= 10; // Subtract 10 seconds for incorrect answers
    }

    // Show feedback for a short time
    feedbackElement.classList.remove("hide");
    setTimeout(function () {
      feedbackElement.classList.add("hide");
    }, 1000);

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
}

// Function to end the quiz
function endQuiz() {
  // Display the end screen
  document.getElementById("questions").classList.add("hide");
  endScreenElement.classList.remove("hide");

  // Display the current score and highest score using the functions from score.js
  finalScoreElement.textContent = `Your Score: ${getScore()} | Highest Score: ${getHighestScore()}`;

  // Stop the timer
  clearInterval(startTimer);
}
// Function to save the score
function saveScore() {
  const initials = initialsInput.value.trim();

  if (initials !== "") {
    // Save the score and initials using the functions from score.js
    // You may want to use local storage or send it to a server
    // For now, let's just log it to the console
    console.log("Initials: " + initials + ", Score: " + getScore());

    // Save initials to localStorage (for example)
    localStorage.setItem("initials", initials);

    // Redirect to the highscores page
    window.location.href = "highscores.html";
  }
}
