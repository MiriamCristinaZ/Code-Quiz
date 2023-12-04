let score = 0;
let highestScore = localStorage.getItem("highestScore") || 0;
let highestScoreInitials = localStorage.getItem("highestScoreInitials") || "";

function increaseScore() {
  score++;
  if (score > highestScore) {
    highestScore = score;

    // Get the initials from the input field
    const initialsInput = document.getElementById("initials");
    const newInitials = initialsInput.value.trim();

    // Save the new highest score to localStorage
    localStorage.setItem("highestScore", highestScore);

    // Save the corresponding initials
    localStorage.setItem("highestScoreInitials", newInitials);
  }
}
function getScore() {
  return score;
}

function getHighestScore() {
  return highestScore;
}

function getHighestScoreInitials() {
  return highestScoreInitials;
}

function resetScore() {
  score = 0;
}
/// displayHighestScore function in score.js
function displayHighestScore() {
  const highestScoreElement = document.getElementById("highest-score");
  const highestScoreInitialsElement = document.getElementById(
    "highest-score-initials"
  );

  const highestScoreValue = getHighestScore();
  const highestScoreInitialsValue = getHighestScoreInitials();

  // Display the highest score
  highestScoreElement.textContent = `Highest Score: ${highestScoreValue}`;
  highestScoreInitialsValue.textContent = `Highest Score Initials: ${highestScoreInitialsValue}`;
}
