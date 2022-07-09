// TODO: add game logic
var startButton = document.querySelector('#start');

//On time ===0 make enter score screen
var resultsEl = document.querySelector('#results');
var enterScore = document.createElement('input');

function enterScore() {
    var resultsEl = document.querySelector('#results');
    var score = secondsLeft;
    resultsEl.textContent('Times Up! Your score: ' + score);
    var inputScore = document.createElement('input');
    var submitScore = document.createElement('button');
    submitScore.textContent = 'Submit';

    if (inputScore.length > 5) {
        alert('Please only provide up to 4 characters for your initials');
    }
}

//countdown timer
var timeLeft = document.querySelector('#countdown');
var secondsLeft = 10;
function countdownTimer() {
    var countdown = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            
            
                questionEl.style.display = 'none';
                choicesEl.style.display = 'none';
                var resultsEl = document.querySelector('#results');
                var score = secondsLeft;
                resultsEl.textContent = 'Times Up! Your score: ' + score;
                var inputScore = document.createElement('input');
                var submitScore = document.createElement('button');
                submitScore.textContent = 'Submit';
                resultsEl.appendChild(inputScore);
                resultsEl.appendChild(submitScore);
            
                if (inputScore.length > 5) {
                    alert('Please only provide up to 4 characters for your initials');
                }
            
            clearInterval(countdown);
        }
    }, 1000)
}



//On start click to hide instructions and button
var mainEl = document.querySelector('#mainBody');
function hideMain() {
    mainEl.style.display = 'none';
}

//Function to declare both timer and first question and hide main body
function timerAndHideMain() {
    countdownTimer();
    hideMain();
    displayQuestion();
}

var questionEl = document.querySelector('#displayQuestion');
var choicesEl = document.querySelector('#displayChoices');
var liEl = document.createElement("li");


var firstQuestion = questions[0];
var secondQuestion = questions[1];
var thirdQuestion = questions[2];
var fourthQuestion = questions[3];
var fifthQuestion = questions[4];
function displayQuestion() {
    questionEl.textContent = firstQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = firstQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        choicesEl.appendChild(liEl);
        choicesEl.setAttribute('style', 'text-align: center;');
    }
    
}


// startButton.addEventListener('click', hideMain);
// startButton.addEventListener('click', countdownTimer);
startButton.addEventListener('click', timerAndHideMain);
