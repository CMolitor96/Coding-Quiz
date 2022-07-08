// TODO: add game logic
var startButton = document.querySelector('#start');

//countdown timer
var timeLeft = document.querySelector('#countdown');
var secondsLeft = 60;
function countdownTimer() {
    var countdown = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(countdown);
        }
    }, 1000)
}

startButton.addEventListener('click', countdownTimer);