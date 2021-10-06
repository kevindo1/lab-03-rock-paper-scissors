// export function didUserWin(userChoice, computerChoice) {
//     if (userChoice)
// };

export function getComputerSelected() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

export function doesUserWin(userSelected, getComputerSelected) {
    if (userSelected === getComputerSelected) {
        return 'draw';
    } else if (userSelected === 'rock' && getComputerSelected === 'scissors') {
        return true;
    } else if (userSelected === 'scissors' && getComputerSelected === 'paper') {
        return true;
    } else if (userSelected === 'paper' && getComputerSelected === 'rock') {
        return true;
    } else {
        return false;
    }
}
