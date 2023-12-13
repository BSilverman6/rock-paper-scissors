
function getComputerChoice(){
    /*Create Randome Number. Multiply it by 3. floor it.
    If 0 - return Rock
    If 1 - return Paper
    If 2 - returnScissors*/
   switch (Math.floor(Math.random()*3)){
    case 0: return "rock";
        break;
    case 1: return "paper";
        break;
    case 2: return "scissors";
        break;
   }
}

function gameRound(){
    const compSelect = getComputerChoice();
    console.log(compSelect);
    const playerSelect = prompt("What do you Pick?").toLowerCase();
    console.log(playerSelect);
    if (compSelect === playerSelect){
        console.log("It's a tie"); 
        console.log("No Score Increase")
        return "Tie";
    }
    else if (playerSelect === "rock" && compSelect === "scissors" || 
                playerSelect === "paper" && compSelect === "rock" ||
                playerSelect === "scissors" && compSelect === "paper"){
        console.log(gameSummary("Player", playerSelect));
        return "Player";
    }
    else {
        console.log(gameSummary("Computer", compSelect))
        return "Computer"
    }
}

function gameSummary(winner, wObject){
    switch (wObject) {
        case "rock": return winner + " wins! " + winner + "'s Rock smashes Scissors.";
        break;
        case "paper": return winner + " wins! " + winner + "'s Paper covers Rock";
        break;
        case "scissors": return winner + " wins! " + winner + "'s Scissors cuts Paper";
        break;    }

}

function matchOfFive(){
    let playerScore = 0;
    let computerScore = 0;
    let lastWinner;
    while (playerScore <5 && computerScore <5){ 
        lastWinner = gameRound();
        lastWinner === "Player" ? playerScore++ :
        lastWinner === "Computer" ? computerScore++: "";
        console.log("Last Winner Was "+lastWinner);
        console.log("Player Score: "+playerScore)
        console.log("Computer Score: "+computerScore)
    }
    if (playerScore==5){
        console.log("You are the Grand WINNER!!!");
    }else if(computerScore==5){ 
        console.log("You lost. Loser");
    }else {console.log("Uhh, what did you do? the Match isn't over")
    }
}

matchOfFive();