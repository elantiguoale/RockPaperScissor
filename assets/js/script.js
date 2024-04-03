/*jshint esversion: 6 */

const choices = ['rock', 'paper', 'scissors'];
let computerChoices;
let playerPoints = 0;
let computerPoints = 0;

const playerImage = document.getElementById("rps-image-one");
const computerImage = document.getElementById("rps-image-two");
const playerScore = document.getElementById("rps-player-score");
const computerScore = document.getElementById("rps-computer-score");

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
        ++playerPoints;
    } else {
        result = "Computer Wins!";
        ++computerPoints;
    }

    playerScore.innerText = "Your Score: " + playerPoints;
    computerScore.innerText = "Bot Score: " + computerPoints;
    imageChanger(playerChoice);
    document.getElementById('result').innerText = "You chose " + playerChoice + ". Bot chose " + computerChoices + ". " + result;
}

function imageChanger(playerChoice) {

    playerImage.src = `assets/images/${playerChoice}.png`;
    playerImage.alt = playerChoice;

    computerImage.src = `assets/images/${computerChoices}.png`;
    computerImage.alt = computerChoices;
}

function reset() {
    playerPoints = 0;
    computerPoints = 0;

    playerScore.innerText = "Your Score: " + playerPoints;
    computerScore.innerText = "Bot Score: " + computerPoints;
    document.getElementById('result').innerText = ""
}