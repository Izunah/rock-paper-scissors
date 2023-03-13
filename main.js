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

function playRound(computerSelection, playerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();

    if(computerSelection == playerSelectionLowerCase)
        return ["You Draw!", 2];
    else if(playerSelectionLowerCase == "rock" && computerSelection == "paper")
        return ["You Lose! Paper beats Rock", 0];
    else if(playerSelectionLowerCase == "rock" && computerSelection == "scissors")
        return ["You Win! Rock beats Scissors", 1];
    else if(playerSelectionLowerCase == "paper" && computerSelection == "rock")
        return ["You Win! Paper beats Rock", 1];
    else if(playerSelectionLowerCase == "paper" && computerSelection == "scissors")
        return ["You Lose! Scissors beats Paper", 0];
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "rock")
        return ["You Lose! Rock beats Scissors", 0];
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "paper")
        return ["You Win! Scissors beats Paper", 1];
    else
        return ["ERROR, INVALID COMBINATION", -1];
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

game();