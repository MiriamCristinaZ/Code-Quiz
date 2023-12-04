document.addEventListener("DOMContentLoaded", function () {
  displayHighestScore();

  // Add event listener for the clear button
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clearHighscores);
});

// Function to clear highscores
function clearHighscores() {
  // Clear the highest scores in localStorage
  localStorage.removeItem("highestScore");
  localStorage.removeItem("highestScoreInitials");

  // Refresh the page to update the display
  location.reload();
}
