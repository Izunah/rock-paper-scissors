function getComputerChoice() {

    switch (Math.floor(Math.random() * 3))
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function adjustScore(value) {
    switch (value) {
        case 0:
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
        default:
            console.error("INVALID SCORE ADJUSTMENT");
            break;
    }

    updateScoreUI();
}

function updateScoreUI() {
    const pScore = document.querySelector('.playerScore');
    const cScore = document.querySelector('.computerScore');
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}

function checkVictor()
{
    if(playerScore == 5)
    {
        gameOver = true;
        const container = document.querySelector('.resultsContainer');
        const para = document.createElement("p");
        para.textContent = "GAME OVER! Player Wins!";
        container.appendChild(para);
    }
    else if(computerScore == 5)
    {
        gameOver = true;
        const container = document.querySelector('.resultsContainer');
        const para = document.createElement("p");
        para.textContent = "GAME OVER! Computer Wins!";
        container.appendChild(para);
    }
}

function playRound(playerChoice) {
    if(gameOver) return;

    const playerSelectionLowerCase = playerChoice.toLowerCase();
    const computerSelection = getComputerChoice();
    const container = document.querySelector('.resultsContainer');
    const para = document.createElement("p");

    if(computerSelection == playerSelectionLowerCase)
    {
        para.textContent = "You Draw!";
        adjustScore(0);
    }
    else if(playerSelectionLowerCase == "rock" && computerSelection == "paper")
    {
        para.textContent = "You Lose! Paper beats Rock";
        adjustScore(2);
    }
    else if(playerSelectionLowerCase == "rock" && computerSelection == "scissors")
    {
        para.textContent = "You Win! Rock beats Scissors";
        adjustScore(1);
    }
    else if(playerSelectionLowerCase == "paper" && computerSelection == "rock")
    {
        para.textContent = "You Win! Paper beats Rock";
        adjustScore(1);
    }
    else if(playerSelectionLowerCase == "paper" && computerSelection == "scissors")
    {
        para.textContent = "You Lose! Scissors beats Paper";
        adjustScore(2);
    }
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "rock")
    {
        para.textContent = "You Lose! Rock beats Scissors";
        adjustScore(2);
    }
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "paper")
    {
        para.textContent = "You Win! Scissors beats Paper";
        adjustScore(1);
    }
    else
    {
        para.textContent = "!!ERROR!!";
    }

    container.appendChild(para);
    checkVictor();
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Pick one: Rock, Paper, Scissors");
        let roundResult = playRound(getComputerChoice(), playerSelection);
        console.log(roundResult[0]);

        switch(roundResult[1]) {
            case 0:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            case 2:
                break;
            default:
                console.log("ERROR PROCESSING ROUND RESULT");
                break;
        }
    }

    if(playerScore > computerScore)
        console.log(`Player Wins! ${playerScore} to ${computerScore}`);
    else if(computerScore > playerScore)
        console.log(`Computer Wins! ${computerScore} to ${playerScore}`);
    else
        console.log(`Game Draw! ${playerScore} to ${computerScore}`);
}

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll(`button[data-type]`);
buttons.forEach(button => button.addEventListener("click", () => {
    playRound(button.dataset.type);
}));