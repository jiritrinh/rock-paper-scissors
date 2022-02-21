const choices = ["rock","paper","scissors"];

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function line() {
    console.log("-------------------------------------------------------");
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

function game() {
    console.log("Welcome to rock paper scissors game! Enter your weapon: ");
    line();

    let isEnd = true;

    let playerInput;
    let playerSelection;
    

    let playerScore = 0;
    let computerScore = 0;
    while (isEnd) {
        //invalid user check
        
        let j = true;
        while (j) {
            let playerInput = prompt("Enter your weapon: ").toLowerCase();
            playerSelection = playerInput;
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                j = false;
            }
            else {
                console.log("Invalid input!");
                line();
            }
            
        }
        //start game
        let computerSelection = computerPlay();

        let result = playRound(playerSelection,computerSelection);
        switch (result) {
            case "w":
                console.log("You have WON! You have used " + playerSelection + " against PCs " + computerSelection +"."); 
                playerScore++;  
                console.log("player score:" + playerScore);
                console.log("computer score:" + computerScore);
                break;
            case "d":
                console.log("DRAW! You have used " + playerSelection + " against PCs " + computerSelection +".");
                console.log("player score:" + playerScore);
                console.log("computer score:" + computerScore);
                break;
            case "l": 
                console.log("You have LOST! You have used " + playerSelection + " against PCs " + computerSelection +"."); 
                computerScore++;   
                console.log("player score:" + playerScore);
                console.log("computer score:" + computerScore);
            default:
                break;
        }
        line();      
        /*   deciding the winner
        if (playerScore == 5) {
            console.log("You have won! Congratulations!");
            isEnd = false;
        }
        else if(computerScore == 5){
            console.log("Computer has won! Better luck next time!");
            isEnd= false;
        }
        */
    }
    
    

    
}

game();

