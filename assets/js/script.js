function play(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoices = choices[Math.floor(Math.random() * choices.length)];
    let result;
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

    document.getElementById('result').innerText = "You chose " + playerChoice + ". Computer chose " + computerChoices + ". " + result;
}