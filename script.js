const choices = ["rock","paper","scissors"];

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function playRound(playerSelection,computerSelection) {
    let shortcutPlayer = playerSelection[0];
    let shortcutComp = computerSelection[0];
    let result = shortcutPlayer + shortcutComp;
    console.log(result);
    let win = "w";
    let draw = "d";
    let lose = "l";

    switch (result) {
        case "rr":
            return draw;
        case "pp":
            return draw;
        case "ss":     
            return draw;
        case "rs":
            return win; 
        case "pr":
            return win; 
        case "sp":
            return win;
        case "rp":
            return lose; 
        case "ps":
            return lose;
        case "sr":
            return lose;
        default:
            break;
    }

}

function disableButtons() {
    btns.forEach(button => {
        button.disabled = true;
    })
}




const btns = document.querySelectorAll("#btns");
let resultShow = document.querySelector("#result-show");
let playerCounter = document.querySelector("#player-counter");
let compCounter = document.querySelector("#comp-counter");
let title = document.querySelector("h1");
let shyEmoji = document.querySelector("#nude");


let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;


let result ="";

btns.forEach(button => {
    button.addEventListener("click", () => {
        
        computerSelection = computerPlay();
        playerSelection = button.textContent.toLowerCase();

        result = playRound(playerSelection,computerSelection);
        switch (result) {
            case "w":
                resultShow.textContent = "You have WON! You have used " + playerSelection + " against PCs " + computerSelection +".";
                resultShow.style.color = "green";
                playerScore++;  
                playerCounter.textContent = "PLAYER: " + playerScore;
                compCounter.textContent = "COMPUTER: " + computerScore;
                break;
            case "d":
                resultShow.textContent = "DRAW! You have used " + playerSelection + " against PCs " + computerSelection +".";
                resultShow.style.color = "black";
                playerCounter.textContent = "PLAYER: " + playerScore;
                compCounter.textContent = "COMPUTER: " + computerScore;
                break;
            case "l":
                resultShow.textContent = "You have LOST! You have used " + playerSelection + " against PCs " + computerSelection +"."; 
                resultShow.style.color = "red";
                computerScore++;   
                playerCounter.textContent = "PLAYER: " + playerScore;
                compCounter.textContent = "COMPUTER: " + computerScore;
            default:
                break;
        }

        if (playerScore == 5 || computerScore == 5) {
            
            if (playerScore == 5) {
                resultShow.textContent = "You have won! Congratulations! Reload to play again";
                
            } else {
                resultShow.textContent = "Computer has won! Better luck next time! Reload to play again";
            }
            
            
                                
        }

        
    });

});




