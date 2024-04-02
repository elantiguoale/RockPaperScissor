const choices = ['rock', 'paper', 'scissors'];
let computerChoices;

const playerImage = document.getElementById("rps-image-one")
const computerImage = document.getElementById("rps-image-two")
const playerScore = document.getElementbyId("rps-player-score")
const computerScore = document.getElementbyId("rps-computer-score")

function play(playerChoice) {
    let result;
    computerChoices = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoices) {
        result = "Its a tie!";
    } else if
        ((playerChoice === 'rock' && computerChoices === "scissors") ||
        (playerChoice === 'paper' && computerChoices === 'rock') ||
        (playerChoice === 'scissors' && computerChoices === 'paper')) {
        result = "You Win!";
    } else {
        result = "Computer Wins!";
    }
    imageChanger(playerChoice)
    document.getElementById('result').innerText = "You chose " + playerChoice + ". RPS Bot chose " + computerChoices + ". " + result;
}

function imageChanger(playerChoice) {

    playerImage.src = `assets/images/${playerChoice}.png`;
    playerImage.alt = playerChoice;

    computerImage.src = `assets/images/${computerChoices}.png`
    computerImage.alt = computerChoices
}

function scoreChanger(){
    
}