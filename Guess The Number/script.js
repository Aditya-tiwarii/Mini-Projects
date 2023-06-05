let flag = 0;

let finish = false;

let randomNumber = getRandomNumber();

function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", restartGame);
}

function playGame() {
    let numberGuess = +(document.getElementById('number-guess').value);
    if (!finish) {
        if (numberGuess > 0 && numberGuess <= 100) {
            document.getElementById('number-guess').value = '';
            // console.log(typeof (numberGuess));
            displayResult(numberGuess);
            showGuessHistory(numberGuess);
        }
        else {
            showSelectRightNum();
            document.getElementById('number-guess').value = '';
        }
    }
    else {
        document.getElementById('number-guess').value = '';
        alert("The game has finished please click on restart to play again");
    }
}

function displayResult(numberGuess) {
    if (numberGuess < randomNumber) {
        showNumberBelow();
    }
    else if (numberGuess > randomNumber) {
        showNumberAbove();
    }
    else {
        showYouWon();
    }
}

function showNumberAbove() {
    document.getElementById("result").innerHTML = `<div class = " alert alert-warning">Your guess is too high!</div>`
}

function showNumberBelow() {
    document.getElementById("result").innerHTML = `<div class = " alert alert-warning">Your guess is too low!</div>`
}

function showYouWon() {
    document.getElementById("result").innerHTML = `<div class = " alert alert-success">Awesome job, you got it!</div>`
    finish = true;
}

function showSelectRightNum() {
    document.getElementById("result").innerHTML = `<div class = " alert alert-alert">Select a whole number less than 101!</div>`
}

function showGuessHistory(numberGuess) {
    const guess = document.createElement('li');
    guess.className = "guess-item";
    guess.id = `guess${flag + 1}`
    guess.textContent = `You guessed ${numberGuess}!`;
    if (!flag) {
        document.getElementById("history").append(guess);
        flag = 1;
    }
    else {
        // console.log(document.getElementsByClassName("guess-item"));
        document.getElementById(`guess${flag}`).before(guess);
        flag++;
    }

}

function restartGame() {
    if (finish) {
        flag = 0;
        finish = false;
        randomNumber = getRandomNumber();
        document.getElementById("result").innerHTML = "";
        document.getElementById("history").innerHTML = "";
    }
    else {
        alert("The game is not finished,Finish it first to begin a new round");
    }
}
