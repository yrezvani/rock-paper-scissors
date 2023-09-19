// random choice for computer
let choice = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice () {
return (choice[(Math.floor(Math.random()*3))]);
} 

let playerScore = 0;
let computerScore = 0;
let draws = 0;
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
        playerScore += 1;    
        displayResult ('You win! Paper beats rock');
}   else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        computerScore +=1;
        displayResult ('You lose! Rock beats Scissors');
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        computerScore += 1;
        displayResult ('You lose! Paper beats rock');
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        playerScore += 1;
        displayResult ('You win! Scissors beats Paper');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        playerScore += 1;
        displayResult ('You win! Rock beats Scissors');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        computerScore +=1;
        displayResult ('You lose! Scissors beats Paper'); 
    }
    }


    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');

    

    // Event listener functions
    function rock () {
        playRound (getComputerChoice(), 'rock');
        cWins.textContent = `Computer score = ${computerScore}`
        pWins.textContent = `Player Score = ${playerScore}`
        if (computerScore === 5 || playerScore === 5) {
            declareWinner();
            computerScore = 0;
            playerScore = 0;
        }
        }
    
    function paper () {
        playRound (getComputerChoice(), 'paper');
        cWins.textContent = `Computer wins = ${computerScore}`
        pWins.textContent = `Player Score = ${playerScore}`
        if (computerScore === 5 || playerScore === 5) {
            declareWinner();
            computerScore = 0;
            playerScore = 0;
        }
        }
    
    function scissors () {
        playRound (getComputerChoice(), 'scissors');
        cWins.textContent = `Computer wins = ${computerScore}`
        pWins.textContent = `Player Score = ${playerScore}`
        if (computerScore === 5 || playerScore === 5) {
            declareWinner();
            computerScore = 0;
            playerScore = 0;
        }
        }
    
    function displayResult (str) {
        result.textContent = str;
    }
    
    function declareWinner () {
        if (computerScore === 5) {
            displayResult ('Oh no! You lost! Better luck next time.');
        } else if (playerScore === 5) {
            displayResult ('You won! Congratulations!');
        }
    }

    // Event listeners
    rockBtn.addEventListener("click", rock);
        if (computerScore === 5 || playerScore === 5) {
            declareWinner ();
            
        }
    paperBtn.addEventListener('click', paper);
        if (computerScore === 5 || playerScore === 5) {
            declareWinner ();
        }

    scissorsBtn.addEventListener('click', scissors);
        if (computerScore === 5 || playerScore === 5) {
            declareWinner ();
        }

