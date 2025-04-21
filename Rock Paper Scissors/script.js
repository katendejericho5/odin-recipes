function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winConditions[humanChoice] === computerChoice) {
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("🎮 Welcome to Rock, Paper, Scissors!");
    console.log("------------------------------------");

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`\nRound ${round}`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);
        console.log(result);

        if (result.startsWith("You win")) {
            humanScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }

        console.log(`Current Score → You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("\n Final Result:");
    if (humanScore > computerScore) {
        console.log(" Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log(" It's a tie overall!");
    }
}

playGame();
