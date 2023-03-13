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
        return "You Draw!";
    else if(playerSelectionLowerCase == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock";
    else if(playerSelectionLowerCase == "rock" && computerSelection == "scissors")
        return "You Win! Rock beats Scissors";
    else if(playerSelectionLowerCase == "paper" && computerSelection == "rock")
        return "You Win! Paper beats Rock";
    else if(playerSelectionLowerCase == "paper" && computerSelection == "scissors")
        return "You Lose! Scissors beats Paper";
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "rock")
        return "You Lose! Rock beats Scissors";
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "paper")
        return "You Win! Scissors beats Paper";
    else
        return "ERROR, INVALID COMBINATION";
}

console.log(playRound(getComputerChoice(), "rock"));