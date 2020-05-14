const modalWrapper = document.querySelector(".modal-wrapper");
const showPlayersContainer = document.querySelector(".show-players");
const selectPlayers = document.querySelector(".select-players");
const playerButtons = document.querySelectorAll(".select-players-container > button");


let playerAmount = "";
const keys=['LEFT ARROW','RIGHT ARROW','V','BLANK','SHIFT LEFT','CAPS LOCK','DIGIT 1','Q','P','DIGIT 0','N','M'];
// const keysCode=[[37,39],[86,32],[16,20],[49,81],[80,48]];
const snakeColor=["red","blue","green","yellow", "orange"];
let started = false;
let player1;
let player2;
let player3;
let player4;
let player5;

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playerAmount = parseInt(button.dataset.id);
    removeElement(selectPlayers);
    showPlayers(playerAmount);
  });
});

const showPlayers = (amount) => {
    for (let i = 0; i < amount; i++) {
        let playerCount = i + 1; 
        const template = `
            <h1 style="color:${snakeColor[i]};" >PLAYER ${playerCount} keys:  ${keys[2*i]} and ${keys[2*i+1]}</h1>
        `;
        showPlayersContainer.innerHTML += template;
    }

    const buttonTemplate = `
    <button>READY</button>
    `;

    showPlayersContainer.innerHTML += buttonTemplate;

    document.querySelector(".show-players > button").addEventListener("click", () => {
        removeElement(document.querySelector(".show-players > button"));
        setTimeout(function(){ removeElement(modalWrapper); }, 200);
        createPlayers(); 
    });
}

const removeElement = (element) => {
    element.classList.add('hidden');
}

const createPlayers = () => {
    player1 = new Player(37, 39, "red", 100, 100);
    player2 = new Player(86, 32, "blue", 100, 200);
    player3 = new Player(16, 20, "green", 100, 300);
    player4 = new Player(49, 81, "yellow", 100, 400);
    player5 = new Player(80, 48, "orange", 100, 500);
    started = true;
}

