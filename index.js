const playerButtons = document.querySelectorAll('button');
let playerAmount = ""; 

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
       console.log(button.dataset.id);
       playerAmount = parseInt(button.dataset.id);
       
    });
});

function setup() {
    createCanvas(window.innerWidth - 90, window.innerHeight - 100).parent('canvas-container');
    colorMode(HSB);
    background(0)
}
