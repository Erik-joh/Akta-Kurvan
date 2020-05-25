const canvasContainer = document.getElementById("canvas-container");
const intElemClientWidth = canvasContainer.clientWidth;
const intElemClientHeight = canvasContainer.clientHeight;

function setup() {
  createCanvas(intElemClientWidth, intElemClientHeight).parent(
    "canvas-container"
  );
  background(255, 165, 5);
  fill(1, 1, 1, 255);
  translate(10, 10);
  rect(0, 0, width - 20, height - 20);
}

function draw() {
  if (started) {
    for (let i = 0; i < playerAmount; i++) {
      playersArray[i].Update();
    }
    CheckWhoWon();
  }
}
function CheckWhoWon() {
  let collided = [];

  playersArray.forEach((player) => {
    if (player.snake.collided) {
      if (!collided.includes(player)) {
        collided.push(player);
      }
    }
  });

  if (collided.length >= playersArray.length - 1) {
    playersArray.forEach((player) => {
      if (!player.snake.collided) {
        player.score += collided.length;
      } else {
        player.score += collided.indexOf(player);
      }
    });

    scoreBoardUpdate();
    started = false;
    let winner = null;
    let someOneWon = false;
    playersArray.forEach((player) => {
      if (player.score >= 2) {
        someOneWon = true;
        winner = player;
      }
    });
    if (someOneWon) {
      setTimeout(() => {
        finishedGame(winner);
        setup();
      }, 1000);
    } else {
      setTimeout(() => {
        playAgain();
        setup();
      }, 1000);
    }
  }
}
