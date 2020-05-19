const canvasContainer = document.getElementById("canvas-container");
const intElemClientWidth = canvasContainer.clientWidth;
const intElemClientHeight = canvasContainer.clientHeight;

function setup() {
  // noLoop();

  createCanvas(intElemClientWidth, intElemClientHeight).parent(
    "canvas-container"
  );
  background(255);

}

function draw() {
  if (started) {
    for (let i = 0; i < playerAmount; i++) {
      playersArray[i].Update();
    }    
  }
}

// function startSketch(){
//   const canvasContainer = document.getElementById("canvas-container");
//   const intElemClientWidth = canvasContainer.clientWidth;
//   const intElemClientHeight = canvasContainer.clientHeight;
//   var sketch = function(p) {

//     p.setup = function() {
//       p.createCanvas(intElemClientWidth, intElemClientHeight).parent(
//         "canvas-container"
//       );
//       p.background(255);
//     };

//     p.draw = function() {
//       if (started) {
//         for (let i = 0; i < playerAmount; i++) {
//           playersArray[i].Update();
//         }    
//       }
//     };
//   };

//   new p5(sketch);
// }