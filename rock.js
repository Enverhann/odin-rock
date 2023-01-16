let playerScore = 0;
        let computerScore = 0;
        const choices = ["Rock", "Paper", "Scissor"];

        function getComputerChoice(){
            const randomChoices = choices[Math.floor(Math.random() * choices.length)];
            return randomChoices.toLowerCase();
        }
        function getPlayerChoice(){
            return prompt().toLowerCase();
        }
        function playRound(playerSelection, computerSelection){     
            if(computerSelection == playerSelection){
                console.log("Tied");
                return("You choose:" + playerSelection + " " + "Computer choose:"  + computerSelection);
            }
            else if(
                (computerSelection=="rock" && playerSelection =="scissor" || computerSelection=="scissor" && playerSelection =="paper" || computerSelection=="paper" && playerSelection =="rock" )){
                computerScore ++;
                console.log("Computer wins");
                return("You choose:" + playerSelection + " " + "Computer choose:"  + computerSelection);
            }else if(playerSelection=="rock" && computerSelection =="scissor" || playerSelection=="scissor" && computerSelection =="paper" || playerSelection=="paper" && computerSelection =="rock" ){
                playerScore ++;
                console.log("Player wins");
                return("You choose:" + playerSelection + " " + "Computer choose:"  + computerSelection);
            }
        }
        game();
        function game(){
            for ( let i = 0; i < 5; i ++){
            const playerSelection=getPlayerChoice();
            const computerSelection=getComputerChoice(); 
            const currentRound = playRound(playerSelection, computerSelection);
            console.log(currentRound);
            console.log(playerScore, computerScore);
            }
        
        }
