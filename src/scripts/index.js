const canvasContainer = document.getElementById("canvas-container");
const intElemClientWidth = canvasContainer.clientWidth;
const intElemClientHeight = canvasContainer.clientHeight;

function setup() {

  createCanvas(intElemClientWidth, intElemClientHeight).parent(
    "canvas-container"
  );
  background(255, 165, 5);
  fill(1, 1, 1, 255);
  translate(25, 25);
  rect(0, 0, width - 50, height - 50);
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
  let collided = 0;

  playersArray.forEach((player) => {
    if (player.snake.collided) {
      collided++;
    }
  });
  if (collided == playersArray.length - 1) {
    finishedGame();
    clear();
    setup();
    draw();
    playersArray.forEach((player) => {
      if (!player.snake.collided) {
        noLoop();
      }
    });
  }
}


