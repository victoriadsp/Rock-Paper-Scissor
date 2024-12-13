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

// Initialize global scores
let humanScore = 0;
let computerScore = 0;

const winningRules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
};

//Play a single round
function playRound(humanSelection) {
    if (humanScore >= 5 || computerScore >= 5) {
        return; // Stops the game if someone has already won
    }

    const computerSelection = getComputerChoice();
    let resultMessage = '';
    
    if (humanSelection === computerSelection) {
        resultMessage = `It's a tie! Both chose ${humanSelection}.`;
    } else if (winningRules[humanSelection] === computerSelection) {
        humanScore++;
        resultMessage = `You won! ${humanSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultMessage = `You lost! ${humanSelection} is defeated by ${computerSelection}.`;
    }

    // Check for a winner
    if (humanScore === 5) {
        resultMessage = "Congratulations! You won the game 🎉.";
    } else if (computerScore === 5) {
        resultMessage = "Game over! The computer won the game 🤖.";
    }

    // Update the result display
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>${resultMessage}</p>
        <p>Human Score: ${humanScore} | Computer Score: ${computerScore}</p>
    `;
}

// Connect buttons to the game logic
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
