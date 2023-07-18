const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

const MAX_HIGH_SCORES = 5;
// console.log(highScore);

finalScore.innerHTML = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
//   console.log(score.score);
  highScore.push(score);
  highScore.sort((a, b) => b.score - a.score);
  highScore.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScore",JSON.stringify(highScore));
  window.location.assign('/');
//   console.log(highScore);
};
