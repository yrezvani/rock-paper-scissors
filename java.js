// random choice for computer

let choice = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice () {
return (choice[(Math.floor(Math.random()*3))]);
} 

let computerSelection;
let playerSelection;

// One round function
function playRound (computerSelection = getComputerChoice ()) {
    playerSelection = prompt('Please make a choice')
    playerSelection = (playerSelection.toLowerCase());
    playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));

    if (computerSelection === playerSelection) {
            return 'It\'s a draw';
}   else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        return 'You win. Paper beats Rock';
}   else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You lose. Rock beats Scissors';
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You lose. Paper beats Rock';
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return 'You win. scissors beats Paper';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        return 'You win. Rock beats Scissors';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose. scissors beats Paper'; 
    }
    }

    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    // Round one
    
    let result = playRound (computerSelection);
    console.log(result);
    if (result === 'You lose. scissors beats Paper' || result === 'You lose. Paper beats Rock' || result === 'You lose. Rock beats Scissors') {
        computerWins += 1;
    } else if (result === 'It\'s a draw') {
        draws += 1;
    } else {
        playerWins += 1;
    }

     // Round two
    result = playRound (computerSelection);
    console.log(result);
    if (result === 'You lose. scissors beats Paper' || result === 'You lose. Paper beats Rock' || result === 'You lose. Rock beats Scissors') {
        computerWins += 1;
    } else if (result === 'It\'s a draw') {
        draws += 1;
    } else {
        playerWins += 1;
    }

    // Round three
    result = playRound (computerSelection);
    console.log(result);
    if (result === 'You lose. scissors beats Paper' || result === 'You lose. Paper beats Rock' || result === 'You lose. Rock beats Scissors') {
        computerWins += 1;
    } else if (result === 'It\'s a draw') {
        draws += 1;
    } else {
        playerWins += 1;
    }

    // Round four
    result = playRound (computerSelection);
    console.log(result);
    if (result === 'You lose. scissors beats Paper' || result === 'You lose. Paper beats Rock' || result === 'You lose. Rock beats Scissors') {
        computerWins += 1;
    } else if (result === 'It\'s a draw') {
        draws += 1;
    } else {
        playerWins += 1;
    }

    // Round five
    result = playRound (computerSelection);
    console.log(result);
    if (result === 'You lose. scissors beats Paper' || result === 'You lose. Paper beats Rock' || result === 'You lose. Rock beats Scissors') {
        computerWins += 1;
    } else if (result === 'It\'s a draw') {
        draws += 1;
    } else {
        playerWins += 1;
    }

    // Final result
    if (playerWins > computerWins) {
        console.log('You are the ultimate winner. Congrats!');
    } else if (computerWins > playerWins) {
        console.log('Computer is the ultimate winner. Better luck next time!');
    } else {
        console.log('No ultimate winner. It\'s a draw!');
    }


    
