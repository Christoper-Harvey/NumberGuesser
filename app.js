/*
GAME FUNCTION:
-Player must guess a number between a min and max
-Player gets a certain number of trys
-Notify player of trys remaining
-Notify player of the correct answer if lost
-Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
        guessInput.style.borderColor = 'red';
    }

    // Check if won
    if(guess === winningNum){
        // Disable input
        guessInput.disabled = true;
        // Change border green
        guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct!, You Win!`, 'green')
    }
})

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}