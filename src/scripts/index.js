const canvasContainer = document.getElementById("canvas-container");
const intElemClientWidth = canvasContainer.clientWidth;
const intElemClientHeight = canvasContainer.clientHeight;

function setup() {

  createCanvas(intElemClientWidth, intElemClientHeight).parent(
    "canvas-container"
  );
  background(255);

}

function draw() {
  if (started) {
    player1.Update();
    if (playerAmount > 1) {
      player2.Update();
    }
    if (playerAmount > 2) {
      player3.Update();
    }
    if (playerAmount > 3) {
      player4.Update();
    }
    if (playerAmount > 4) {
      player5.Update();
    }
    
  }
}

