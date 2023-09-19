// random choice for computer

let choice = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice () {
return (choice[(Math.floor(Math.random()*3))]);
} 

let playerWins = 0;
let computerWins = 0;
let draws = 0;
let computerSelection = getComputerChoice();
let playerSelection;
const pWins = document.querySelector('.pwins');
const cWins = document.querySelector('.cwins');
const result = document.querySelector('.result');

// One round function
function playRound (computerSelection, playerSelection) {
    playerSelection = (playerSelection.toLowerCase());
    playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));
    
    if (computerSelection === playerSelection) {
        draws += 1;    
        displayResult ('It\'s a draw');

}   else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        playerWins += 1;    
        displayResult ('You win! Paper beats rock');
}   else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        computerWins +=1;
        displayResult ('You lose! Rock beats Scissors');
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        computerWins += 1;
        displayResult ('You lose! Paper beats rock');
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        playerWins += 1;
        displayResult ('You win! Scissors beats Paper');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        playerWins += 1;
        displayResult ('You win! Paper beats rock');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        computerWins +=1;
        displayResult ('You lose! Scissors beats Paper'); 
    }
    }


    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');

    function displayResult (str) {
        result.textContent = str;
    }

    function declareWinner () {
        if (computerWins === 5) {
            displayResult ('Oh no! You lost! Better luck next time.')
        } else if (playerWins === 5) {
            displayResult ('You won! Congratulations!')
        }
    }

    // Event listener function
    function rock () {
        playRound (getComputerChoice(), 'rock');
        cWins.textContent = `Computer wins = ${computerWins}`
        pWins.textContent = `Player Score = ${playerWins}`
        if (computerWins === 5 || playerWins === 5) {
            declareWinner();
        }
        }
    
    function paper () {
        playRound (getComputerChoice(), 'paper');
        cWins.textContent = `Computer wins = ${computerWins}`
        pWins.textContent = `Player Score = ${playerWins}`
        }
    
    function scissors () {
        playRound (getComputerChoice(), 'scissors');
        cWins.textContent = `Computer wins = ${computerWins}`
        pWins.textContent = `Player Score = ${playerWins}`
        }   
    


    


    // Event listeners
    rockBtn.addEventListener("click", rock);
        if (computerWins === 5 || playerWins === 5) {
            declareWinner ();
        }
    paperBtn.addEventListener('click', paper);
    scissorsBtn.addEventListener('click', scissors);

    
    const div = document.querySelector('div');
    if (playerWins === 5) {
        div.textContent = 'You are the ultimate winner!';
    } else if (computerWins === 5) {
        div.textContent = 'Computer is the ultimate winner.'
    }
    
    
    
    
    // function gameResult () {
    //     if (playerWins > computerWins) {
    //         result.textContent = 'You win!';
    //         } else if (playerWins < computerWins) {
    //             result.textContent = 'You lose! Better luck next timer';
    //         } else {
    //             result.textContent = 'It\'s a draw!';
    //         } 

    // }
    
    // rockBtn.addEventListener("click", gameResult);
    // paperBtn.addEventListener("click", gameResult);
    // scissorsBtn.addEventListener("click", gameResult);
    
    // Final result
    // if (playerWins > computerWins) {
    //     result.textContent = 'You win!';
    //     } else if (playerWins < computerWins) {
    //         result.textContent = 'You lose! Better luck next timer';
    //     } else {
    //         result.textContent = 'It\'s a draw!';
    //     } 
//    rockBtn.addEventListener("click") {
        
    
    // paperBtn.addEventListener('click', paper);
    //     if (playerWins > computerWins) {
    //         result.textContent = 'You win!';
    //         } else if (playerWins < computerWins) {
    //             result.textContent = 'You lose! Better luck next timer';
    //         } else {
    //             result.textContent = 'It\'s a draw!';
    //         } 
    // scissorsBtn.addEventListener('click', scissors);
    //     if (playerWins > computerWins) {
    //         result.textContent = 'You win!';
    //         } else if (playerWins < computerWins) {
    //             result.textContent = 'You lose! Better luck next timer';
    //         } else {
    //             result.textContent = 'It\'s a draw!';
    //         } 
    

