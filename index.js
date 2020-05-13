const playerButtons = document.querySelectorAll("button");
let playerAmount = "";

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.id);
    playerAmount = parseInt(button.dataset.id);
  });
});

let player1;
let player2;

function setup() {
  createCanvas(window.innerWidth - 90, window.innerHeight - 100).parent(
    "canvas-container"
  );

  background(255);
  player1 = new Player(LEFT_ARROW, RIGHT_ARROW, 0, 100, 100);
  player2 = new Player(65, 83, 125, 100, 200);
}
function draw() {
  player1.Update();
  player2.Update();
}
