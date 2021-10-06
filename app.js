import { getComputerSelected, doesUserWin } from "./rps.js";

// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');
const drawMessage = document.getElementById('draw-message');
const errorMessage = document.getElementById('error-message');

// initialize global state
let win = 0;
let lose = 0;
let draw = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButton.addEventListener('click', ()=> {
    const radioSelected = document.querySelector('input[type=radio]:checked');

    if (!radioSelected) {
      return errorMessage.classList.remove('hidden-message');
    }

    const userSelected = radioSelected.value;
    const computerSelected = getComputerSelected();

    if (userSelected === computerSelected) {
      draw++
    } else if (doesUserWin(userSelected, computerSelected)) {
      win++
    } else {
      lose++
    }
    
    winMessage.textContent = win;
    loseMessage.textContent = lose;
    drawMessage.textContent = draw;
});

