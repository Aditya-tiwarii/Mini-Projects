// /**
//  * Guess The Number Game
//  * DONE Get user value from input and save it to variable numberGuess
//  * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
//  * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
//  * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
//  * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
//  * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
//  * DONE: Save the guess history in a variable called guess
//  * DONE: Display the guess history using displayHistory() function
//  * DONE: Use the initGame() function to restart the game
//  */

// // Variable to store the list of guesses 
// const guesses = [];

// // Variable for store the correct random number 

// let randomNumber = getRandomNumber();

// window.onload = function () {
//     document.getElementById("number-submit").addEventListener("click", playGame);
//     document.getElementById("restart-game").addEventListener("click", initGame)
// }

// /**
//  * Functionality for playing the whole game
//  */
// function playGame() {
//     // *CODE GOES BELOW HERE *
//     let numberGuess = +(document.getElementById("number-guess").value);
//     document.getElementById("number-guess").value = '';
//     // console.log(typeof (randomNumber), typeof (numberGuess));

//     // console.log(randomNumber, numberGuess);
//     displayResult(numberGuess);
//     saveGuessHistory(numberGuess);
//     displayHistory();

// }

// /**
//  * Show the result for if the guess it too high, too low, or correct
//  * HINT: Use if, else if, else statement 
//  */
// // *CODE GOES BELOW HERE *


// function displayResult(numberGuess) {
//     if (numberGuess < randomNumber) {
//         // TOO LOW 
//         showNumberBelow();
//     }
//     else if (numberGuess > randomNumber) {
//         // TOO HIGH
//         showNumberAbove();
//     } else {
//         // You Won
//         showYouWon();
//     }
// }

// /**
//  * Initialize a new game by resetting all values and content on the page
//  * HINT: reset the correctNumber, guesses, and HTML content
//  */
// function initGame() {
//     // *CODE GOES BELOW HERE *
//     document.getElementById("number-guess").value = '';
//     randomNumber = getRandomNumber();
//     resetResultContent();
//     guesses.splice(0, guesses.length);
//     document.getElementById("history").innerHTML = '';
// }

// /**
//  * Reset the HTML content for guess history
//  */
// function resetResultContent() {
//     document.getElementById("result").innerHTML = "";
// }

// /**
//  * Return a random number between 1 and 100
//  * HINT: Use Math.random 
//  */
// function getRandomNumber() {
//     // *CODE GOES BELOW HERE *
//     return Math.floor(Math.random() * 101);
// }

// /**
//  * Save guess history 
//  * HINT: Search Google "append to array in javascript"
//  * HINT: Use the guesses variable
//  */
// function saveGuessHistory(guess) {
//     // *CODE GOES BELOW HERE *
//     guesses.push(guess);
//     // console.log(guesses);

// }

// /**
//  * Display guess history to user
//  * HTML TO USE:
//  * <ul class='list-group'>
//  *  <li class='list-group-item'>You guessed {number}</li
//  * </ul>
//  * HINT: use while loop and string concatentation to create a list of guesses
//  */
// function displayHistory() {
//     let index = guesses.length; // TODO
//     console.log(index);
//     let list = "<ul class='list-group'>";
//     // *CODE GOES BELOW HERE *
//     while (index--) {
//         console.log(index);
//         let value = guesses[index];
//         list += `<li>You guessed ${value}</li>`;
//     }
//     list += '</ul>'
//     console.log(list);
//     document.getElementById("history").innerHTML = list;
// }



// /**
//  * Retrieve the dialog based on if the guess is wrong or correct 
//  */
// function getDialog(dialogType, text) {
//     let dialog;
//     switch (dialogType) {
//         case "warning":
//             dialog = "<div class='alert alert-warning' role='alert'>"
//             break;
//         case "won":
//             dialog = "<div class='alert alert-success' role='alert'>"
//             break;
//     }
//     dialog += text;
//     dialog += "</div>"
//     return dialog;
// }

// function showYouWon() {
//     const text = "Awesome job, you got it!"
//     /**
//      * Retrieve the dialog using the getDialog() function
//      * and save it to variable called dialog
//      * HINT: Use the 'won' and text parameters 
//      */
//     // *CODE GOES BELOW HERE *

//     let dialog = getDialog('won', text);

//     document.getElementById("result").innerHTML = dialog;
// }

// function showNumberAbove() {
//     const text = "Your guess is too high!"
//     /**
//      * Retrieve the dialog using the getDialog() function
//      * and save it to variable called dialog
//      * HINT: Use the 'warning' and text parameters 
//      */
//     // *CODE GOES BELOW HERE *
//     let dialog = getDialog('warning', text);

//     document.getElementById("result").innerHTML = dialog;
// }

// function showNumberBelow() {
//     const text = "Your guess is too low!"
//     /**
//      * Retrieve the dialog using the getDialog() function
//      * and save it to variable called dialog
//      * HINT: Use the 'warning' and text parameters 
//      */
//     // *CODE GOES BELOW HERE *
//     let dialog = getDialog('warning', text);

//     document.getElementById("result").innerHTML = dialog;
// }


// let guesses = [];
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