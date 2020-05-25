const scoreContainer = document.querySelector(".score-board");
function scoreBoard() {
  playersArray.forEach((player) => {
    let p = document.createElement("p");
    p.classList.add("score");
    p.style.color = `rgb(${player.color[0]}, ${player.color[1]}, ${player.color[2]})`;
    p.innerHTML = `${player.name}: ${player.score}`;
    scoreContainer.appendChild(p);
  });
}
function scoreBoardUpdate() {
  for (let i = 0; i < playersArray.length; i++) {
    scoreContainer.children[i].innerHTML =  `${player.name}: ${playersArray[i].score}`;
  }
}
function scoreBoardReset() {
  while (scoreContainer.firstChild) {
    scoreContainer.removeChild(scoreContainer.lastChild);
  }
}
