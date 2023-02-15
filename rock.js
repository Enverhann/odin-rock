        let playerScore = 0;
        let computerScore = 0;
        const choices = ["Rock", "Paper", "Scissor"];
        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissor = document.querySelector('#scissor');
        let playerSelection;
        let scoreWindow = document.querySelector('#scores');
        let resultWindow = document.querySelector('#results')
        let playerWins = document.getElementById('playerwins')
        let computerWins = document.getElementById('computerwins')

        scoreWindow.innerHTML = "Player" + " : " + playerScore  + " " + "Computer" + " : " +  computerScore;
        resultWindow.innerHTML = "Result" + " : " ;

        function getComputerChoice(){
            const randomChoices = choices[Math.floor(Math.random() * choices.length)];
            console.log(randomChoices);
            return randomChoices;
        }
        function getPlayerChoice(choose){
            if(choose == "Rock"){
                playerSelection = "Rock";
                console.log(playerSelection);
                game();
            }
            if(choose == "Paper"){
                playerSelection = "Paper";
                console.log(playerSelection);
                game();
            }
            if(choose == "Scissor"){
                playerSelection = "Scissor";
                console.log(playerSelection);
                game();
            }
        }
        function playRound(playerSelection, computerSelection){     
            if(computerSelection == playerSelection){
                console.log("Tied");
                resultWindow.innerHTML = "Result" + " : " + "Tied" ;
                return("You choose:" + playerSelection + " " + "Computer choose:"  + computerSelection);
            }
            else if(
                (computerSelection=="Rock" && playerSelection =="Scissor" || computerSelection=="Scissor" && playerSelection =="Paper" || computerSelection=="Paper" && playerSelection =="Rock" )){
                computerScore ++;
                scoreWindow.innerHTML = "Player" + " : " + playerScore  + "     " + "Computer" + " : " +  computerScore;
                resultWindow.innerHTML = "Result" + " : " + "Computer Wins" ;
                console.log("Computer wins");
                gameOver();
                return("You choose:" + playerSelection + " " + "Computer choose:"  + computerSelection);
            }else if(playerSelection=="Rock" && computerSelection =="Scissor" || playerSelection=="Scissor" && computerSelection =="Paper" || playerSelection=="Paper" && computerSelection =="Rock" ){
                playerScore ++;
                scoreWindow.innerHTML = "Player" + " : " + playerScore  + "     " + "Computer" + " : " +  computerScore;
                resultWindow.innerHTML = "Result" + " : " + "Player Wins" ;
                console.log("Player wins");
                gameOver();
                return("You choose:" + playerSelection + " " + "Computer choose:"  + computerSelection);
            }
        }
        function game(){ 
            if(playerScore < 5 && computerScore < 5){
                const computerSelection = getComputerChoice();
                const currentRound = playRound(playerSelection, computerSelection);
                console.log(currentRound);
                console.log(playerScore, computerScore);
            }
            else if(playerScore == 5 || computerScore == 5){
                return null;
            } 
        }

        function gameOver(){
            if(playerScore == 5){
                playerWins.style.visibility = "visible";
            }
            else if(computerScore == 5){
                computerWins.style.visibility = "visible";
            }
        }
    
