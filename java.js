

// Pseudocode
// 1. Generate a random variable between 0 and 1 using Math.random()
// 2. If variable <= 0.33:
// - Result is "rock"
// 3. Else if variable > 0.33 and <= 0.66:
// - Result is "paper"
// 4. Else if variable > 0.66:
// - Result is "scissors"
// 5. Output the result

function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber <= 0.33) {
        return 'rock';
    } else if (randomNumber <= 0.66) {
        return 'paper';
    } else {
        return 'scissors'; 
    }
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors?').toLowerCase();
    
    if (choice === 'rock') {
        return 'rock'; 
    } else if (choice === 'paper') {
        return 'paper'; 
    } else if (choice === 'scissors') { 
        return 'scissors'; 
    } else {
        alert('You entered an invalid choice. Choose between Rock, Paper, Scissors.');
        return null;
    }
}

// Initialize global scores
let humanScore = 0;
let computerScore = 0;

const winningRules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
};

function playRound() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            i--; // Re-attempt if the user entered an invalid choice
            continue;
        }
        const computerSelection = getComputerChoice();

        if (humanSelection === computerSelection) {
            console.log('This is a tie!');
        } else if (winningRules[humanSelection] === computerSelection) {
            humanScore++;
            console.log(`You won! ${humanSelection} beats ${computerSelection}`);
        } else {
            computerScore++;
            console.log(`You lost! ${humanSelection} is defeated by ${computerSelection}`);
        }
    }

    if (humanScore > computerScore) {
        console.log('Congratulations, you won the game!');
    } else if (humanScore < computerScore) {
        console.log('Sorry, you lost the game...');
    } else {
        console.log('The game is a tie!');
    }
}


playRound();




