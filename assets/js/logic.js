// TODO: add game logic
var startButton = document.querySelector('#start');

//On time ===0 make enter score screen
var resultsEl = document.querySelector('#results');
var enterScore = document.createElement('input'); 
var score = secondsLeft;

function enterScore() {
    questionEl.style.display = 'none';
    choicesEl.style.display = 'none';
    var resultsEl = document.querySelector('#results');
    var score = secondsLeft;
    resultsEl.textContent('Times Up! Your score: ' + score);
    var inputScore = document.createElement('input');
    var submitScore = document.createElement('button');
    submitScore.textContent = 'Submit';
    resultsEl.appendChild(inputScore);
    resultsEl.appendChild(submitScore);

    // while (inputScore.length > 5) {
    //     alert('Please only provide up to 4 characters for your initials');
    // }
}

//countdown timer
var timeLeft = document.querySelector('#countdown');
var secondsLeft = 60;
function countdownTimer() {
    var countdown = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(countdown);
            timeLeft.textContent = '';
        }
        if (timeLeft.textContent === '') {
            enterScore();
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
    displayQuestionOne();
}

var questionEl = document.querySelector('#displayQuestion');
var choicesEl = document.querySelector('#displayChoices');
var liEl = document.createElement("li");


var firstQuestion = questions[0];
var secondQuestion = questions[1];
var thirdQuestion = questions[2];
var fourthQuestion = questions[3];
var fifthQuestion = questions[4];

var wrongAudio = document.querySelector('#wrongAudio');
var correctAudio = document.querySelector('#correctAudio');

function displayQuestionOne() {
    questionEl.textContent = firstQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = firstQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        liEl.setAttribute('id', 'option');
        choicesEl.appendChild(liEl);
        choicesEl.setAttribute('style', 'text-align: center;');
    }

    var optionOne = document.getElementsByTagName('li')[0];
    var optionTwo = document.getElementsByTagName('li')[1];
    var optionThree = document.getElementsByTagName('li')[2];
    var optionFour = document.getElementsByTagName('li')[3];


    // optionOne.addEventListener('click', wrongChoice);
    // optionTwo.addEventListener('click', wrongChoice);
    // optionThree.addEventListener('click', wrongChoice);

    var wrongAudio = document.querySelector('#wrongAudio');
    var correctAudio = document.querySelector('#correctAudio');
    function playWrongAudio() {
        wrongAudio.play();
    }


    function wrongOne() {
        optionOne.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        // function playWrongAudio() {
        //     wrongAudio.play();
        // }
        playWrongAudio();
    }
    function wrongTwo() {
        optionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
    }
    function wrongThree() {
        optionThree.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
    }
    function right() {
        optionFour.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        function playCorrectAudio() {
            correctAudio.play();
        }
        playCorrectAudio();
    }


    optionOne.addEventListener('click', wrongOne);
    optionTwo.addEventListener('click', wrongTwo);
    optionThree.addEventListener('click', wrongThree);
    optionFour.addEventListener('click', right);
    
    

}


// startButton.addEventListener('click', hideMain);
// startButton.addEventListener('click', countdownTimer);
startButton.addEventListener('click', timerAndHideMain);
if (timeLeft.textContent === '') {
    console.log("Hello");
}

