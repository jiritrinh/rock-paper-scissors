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
        case "pp":
        case "ss":     
            return draw;
        case "rs": 
        case "pr": 
        case "sp":
            return win;
        case "rp": 
        case "ps":
        case "sr":
            return lose;
        default:
            break;
    }

}

function game() {
    console.log("Welcome to rock paper scissors game! Enter your weapon: ");
    line();
    let play = true;
    let playerInput;
    let playerSelection;
    let computerSelection = computerPlay();
    while (play) {
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

        let result = playRound(playerSelection,computerSelection);
        switch (result) {
            case "w":
                console.log("You have WON! You have used " + playerSelection + " against PCs " + computerSelection +".");   
                break;
            case "d":
                console.log("DRAW! You have used " + playerSelection + " against PCs " + computerSelection +".");
                break;
            case "l": 
                console.log("You have LOST! You have used " + playerSelection + " against PCs " + computerSelection +".")    
            default:
                break;
        }
        line();
        
        let i = true;
        while (i) {
            let repeatAnswer = prompt("Do you want to play again?(Y/N): ").toLowerCase();
            if (repeatAnswer == "n") {
                play = false;
                i = false; 
                line();          
            }
            else if(repeatAnswer == "y") {
                i = false;
                line();
            }
            else {
                console.log("invalid input! Answer again.")
                line();
            }         
        }
        

        
    }
    

    
}

game();
