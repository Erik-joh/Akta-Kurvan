const modalWrapper = document.querySelector(".modal-wrapper");
const modalWrapperNewGame = document.querySelector(".modal-wrapper-new-game");
const showPlayersWrapper = document.querySelector(".show-players");
const selectPlayers = document.querySelector(".select-players");
const playerButtons = document.querySelectorAll(
  ".select-players-container > button"
);
const newGameButtons = document.querySelectorAll(".select-new-game > button");
let started = false;
let playerAmount = 0;
let keysCode = [];
let playersArray = [];
let playersNameArray = [];
const snakeColor = [
  [255, 5, 5],
  [5, 5, 255],
  [5, 128, 5],
  [255, 255, 5],
  [255, 165, 5],
];

const selectPlayersAmount = () => {
  playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playerAmount = parseInt(button.dataset.id);
      removeElement(selectPlayers);
      playersSelcetName();    
    });
  });
};
selectPlayersAmount();

const printOutTextForSelectName = (count) => {
  const template = `
  <div>
  <label for="name">Player ${count + 1} select your name:</label><br>
  <input type="text" name="name"><br>
  </div>
  `;
  document.querySelector(".show-players-container").innerHTML += template;
}

const playersSelcetName = () => {
  const template = `<div class="show-players-container"></div>`;
  showPlayersWrapper.innerHTML = template;

  for (let i = 0; i < playerAmount; i++) {
    printOutTextForSelectName(i);
  }
  const buttonTemplate = `
  <button>Continue</button>
  `;

  document.querySelector(".show-players-container").innerHTML += buttonTemplate;
  
  document
  .querySelector(".show-players-container > button")
  .addEventListener("click", () => {
    const inputs = document.querySelectorAll('input');
    let x = 0; 
    inputs.forEach( input => {
      x++;
      let name = input.value.trim();
      if (name === "") {
       name = `Player ${x}`;
      }
      playersNameArray.push(name.toUpperCase());
    });
    document.querySelector(".show-players-container").remove();
    playersSelcetKeys(); 
  });
}

const printOutTextForSelectKeys = (count) => {
  const template = `
    <div class="show-players-container">
    <h1 style="color:rgb(${snakeColor[count][0]},${snakeColor[count][1]},${
    snakeColor[count][2]
  });" >${playersNameArray[count]} SELECT TWO KEYS</h1>
    </div>
    `;
  showPlayersWrapper.innerHTML = template;
};

const playersSelcetKeys = () => {
  const readKey = () =>
    new Promise((resolve) =>
      window.addEventListener("keydown", resolve, { once: true })
    );
  
  (async function () {
    for (let i = 0; i < playerAmount; i++) {
      let tempArrayHolder = [];
      printOutTextForSelectKeys(i);      
      let x = await readKey();
      let y = await readKey();
      tempArrayHolder.push(x.keyCode);
      tempArrayHolder.push(y.keyCode);
      keysCode.push(tempArrayHolder);
      document.querySelector(".show-players-container").remove();
    }

    const buttonTemplate = `
    <button>Start Game</button>
    `;

    showPlayersWrapper.innerHTML += buttonTemplate;

    document
      .querySelector(".show-players > button")
      .addEventListener("click", () => {
        document.querySelector(".show-players > button").remove();
        setTimeout(function () {
          removeElement(modalWrapper);
        }, 200);
        createPlayers();
      });
  })();
};

const removeElement = (element) => {
  element.classList.add("hidden");
};

const removeClassCss = (element) => {
  element.classList.remove("hidden");
};

const createPlayers = () => {
  for (let i = 0; i < playerAmount; i++) {
    player = new Player(
      keysCode[i][0],
      keysCode[i][1],
      snakeColor[i],
      100,
      100 * (i + 1),
      playersNameArray[i],
    );
    playersArray.push(player);
  }
  started = true;
  scoreBoard();
};

const playAgain = () => {
  started = true;
  playersArray.forEach((player) => {
    player.reset();
  });
};

const newGame = () => {
  started = false;
  playerAmount = 0;
  keysCode = [];
  playersArray = [];
  scoreBoardReset();
  setTimeout(function () {
    removeClassCss(modalWrapper);
    removeClassCss(selectPlayers);
  }, 200);
};

const finishedGame = () => {
  removeClassCss(modalWrapperNewGame);

  newGameButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.text === "meny") {
        removeElement(modalWrapperNewGame);
        newGame();
      } else {
        removeElement(modalWrapperNewGame);
        playAgain();
      }
    });
  });
};
