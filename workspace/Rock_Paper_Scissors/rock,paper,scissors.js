// Keep track of player score
var score = {
    win : 0,
    lose: 0,
    tie: 0
};

var scoreElement       = document.querySelector("#score");
//var userChoice         = prompt("Do you choose rock, paper or scissors?");
//var showUserChoice     = userChoice;
var showWinner         = document.getElementById("winnerInput");
var computerChoice     = Math.random();
var showComputerChoice = document.getElementById("computerInput");
var computerIsUsing    = undefined;

if (computerChoice < 0.34) {
	computerChoice = "Rock";
	computerIsUsing = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "Paper";
	computerIsUsing = "paper";
} else {
	computerChoice = "Scissors";
	computerIsUsing = "scissors";
}

// Commented out thinigs that arent being used anymore
//console.log("Computer: " + computerChoice);
//showComputerChoice.innerHTML = "Computer's choice: " + computerChoice;
showWinner.innerHTML   = "Do you choose rock, paper or scissors?"; //"Your choice was: " + userChoice;
scoreElement.innerHTML = "Win: " + score.win + " Loss: " + score.lose + " Tie: " + score.tie;

function  compare(computer, player) {
    
    // Draw game if computer and player are the same
    if (computer === player) {
        showWinner.innerHTML = "Tie Game!";
        score.tie++;
    }
    
    else if (computer === "Rock") {
        if (player === "Scissors") {
            showWinner.innerHTML = "Computer wins! Rock breaks scissors!";
            score.lose++;
        } else if (player === "Paper"){
            showWinner.innerHTML = "You win! Paper covers rock!";
            score.win++;
        } else {
            showWinner.innerHTML = "No winner!";
        }
    }
    else if (computer === "Paper") {
        if (player === "Rock") {
            showWinner.innerHTML = "Computer Wins! Paper covers rock!";
            score.lose++;
        } else if (player === "Scissors"){
            showWinner.innerHTML = "You win! Scissors cuts paper!";
            score.win++;
        } else {
            showWinner.innerHTML = "No winner!";
        }
    }
    else if (computer === "Scissors") {
        if (player === "Paper") {
            showWinner.innerHTML = "Computer Wins! Scissors cut paper!";
            score.lose++;
        } else if (player === "Rock"){
            showWinner.innerHTML = "You win! Rock breaks scissors!";
            score.win++;
        } else {
            showWinner.innerHTML = "No winner!";
        }
        
    }
}

//compare(computerChoice, userChoice);

/*
    Button controls
    ===============
*/
// Select all user option buttons
var userOptions = document.querySelectorAll("#userOptions > .option");

// Get a random rock, paper, or scissors value
function getRandomValue(){
    // Get a random number between 0 and 1
    var randomNumber = Math.random();
    
    // Set an initial random value
    var randomValue  = undefined;
    
    // Rock is assigned for any random number less than 0.33
    if (randomNumber < 0.33){
        randomValue = "Rock";
    }
    
    // Paper is assigned for any random number between 0.66 and 0.33
    if (randomNumber < 0.66 && randomNumber >= 0.33){
        randomValue = "Paper";
    }
    
    // Scissors is assigned for any random number greater than 0.66
    if (randomNumber >= 0.66){
        randomValue = "Scissors";
    }
    
    // Return the randomly generated value (rock, paper, or scissors)
    return randomValue;
}

// Compare the user selection and a random selection
function compareSelection(event){
    // Get the selection attribute value from the button
    var userSelection     = event.target.getAttribute("selection");
    var computerSelection = getRandomValue();
    
    // Show the user the computers choice
    showComputerChoice.innerHTML = "Computer's choice: " + computerSelection;
    
    // Compare values
    compare(computerSelection, userSelection);
    
    // Update the score element
    scoreElement.innerHTML = "Win: " + score.win + " Loss: " + score.lose + " Tie: " + score.tie;
}


// Add a start round listener to button click events
for(var i=0; i < userOptions.length; i++){
    var option = userOptions[i];
    // Add a click event listener to the button
    option.addEventListener("click", compareSelection);
}