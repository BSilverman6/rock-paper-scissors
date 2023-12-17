let newMatchButton = document.querySelector('.newGame');
let weaponChoice = document.querySelector(".weaponChoice");
let playerScore=document.querySelector(".playerScore");
let computerScore=document.querySelector(".computerScore");
let roundResults =document.querySelector(".roundResults");
let rightBox = document.querySelector(".right");
let finaleText = document.querySelector(".finaleText")

newMatchButton.addEventListener("click", ()=> {
    weaponChoice.addEventListener("click", clickWeapon);
    roundResults.textContent = "";
    finaleText.textContent = "";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
});


weaponChoice.addEventListener("click", clickWeapon);


 //Established A Game is Played when the user CLICKs a weapon
function clickWeapon(event){
    let target = event.target;
    //game runs if a valid target is selected
    if (target.id !=""){
        evaluateGame(String(target.id));
        evaluateMatch();
    };
}


 function evaluateGame(playerChoice){
   
    const compChoice = getComputerChoice();
     //compare the choices. Updates Stats based on the Winner (if there is one)
     if (compChoice === playerChoice){
        roundResults.textContent = "Twas a Tie, you both picked "+playerChoice+".";

     }
     else if (playerChoice === "rock" && compChoice === "scissors" || 
                 playerChoice === "paper" && compChoice === "rock" ||
                 playerChoice === "scissors" && compChoice === "paper"){
        updateStats("Player", playerChoice);
     }
     else {
        updateStats("Computer", compChoice);
     }
 }

 function getComputerChoice(){
    switch (Math.floor(Math.random()*3)){
     case 0: return "rock";
         break;
     case 1: return "paper";
         break;
     case 2: return "scissors";
         break;
    }
 }

 //updates the score and results
 function updateStats(winner, wObject){
    if (winner === "Player"){
        playerScore.textContent= parseInt(playerScore.textContent, 10) +1;
    }else if (winner ==="Computer"){
        computerScore.textContent= parseInt(computerScore.textContent,10)+1;
    }
    roundResults.textContent = getGameSummary(winner,wObject);
}
 
//creates a cool sentence for the Round Results Text.
 function getGameSummary(winner, wObject){
     //
     switch (wObject) {
        /* case "rock": return winner + " wins! " + winner + "'s Rock smashes Scissors.";
         break;*/
         case "rock": return `${winner} wins. ${winner}'s Rock smashes Scissors.`;
         break;
         case "paper": return winner + " wins. " + winner + "'s Paper covers Rock.";
         break;
         case "scissors": return winner + " wins. " + winner + "'s Scissors cuts Paper.";
         break;    }
 
 }

 
 function evaluateMatch(){
    let matchEnd = false;
    if (parseInt(computerScore.textContent,10)=== 5){
        finaleText.textContent = "You lose. The Computer got to 5 first.";
        matchEnd = true;
    } else if (parseInt(playerScore.textContent,10)=== 5){
        finaleText.textContent = "You Win! You are the CHAMPION of Rock Paper Scissors";
        matchEnd = true;
    }

    //cancels the weaponChoice ability when game is over
    if (matchEnd){
        weaponChoice.removeEventListener("click", clickWeapon);
    };    
    }
    