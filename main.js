const validPlays = ["rock", "paper", "scisors"];

function computerPlay() {
    return validPlays[Math.floor(Math.random() * validPlays.length)];
}

function singleGame(playerSelection, computerselection) {
    if (validPlays.indexOf(playerSelection.toLowerCase()) < 0) {
        return ` W.O! ${playerSelection} is a invalid Play`
    }

    if (playerSelection === computerselection) {
        return `Draw! you both choose ${playerSelection}`
    }

    if ((playerSelection === "rock" && computerselection === "scisors") ||
        (playerSelection === "paper" && computerselection === "rock") ||
        (playerSelection === "scisors" && computerselection === "Paper")) {
        return `return you Win! ${playerSelection} beats ${computerselection}`
    } else {
        return `return you Loose! ${computerselection} beats ${playerSelection}`
    }

}

function game() {
    let singleGameResult = ""
    let playerScore = 0
    let computerScore = 0
 
    for (let i = 0; i < 5; i++) {
        singleGameResult = singleGame(prompt("rock, paper, scisors ?"), computerPlay())
        
        if (/Win!/.test(singleGameResult)){
            playerScore++;
        }else{
            computerScore++;
        }
        
        console.log(`you:${playerScore} cpu:${computerScore}`)
        console.log(singleGameResult)
        
    }
    
    if (playerScore > computerScore) {
        return "You Won! Congratulation";
    }
    
    if (playerScore > computerScore) {
        return "You Losse! Try Again"
    }
}