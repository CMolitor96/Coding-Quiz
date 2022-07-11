// TODO: add game logic
var startButton = document.querySelector('#start');

//On time ===0 make enter score screen
var resultsEl = document.querySelector('#results');
var enterScore = document.createElement('input'); 
var score = secondsLeft;

function enterScore() {
    questionElOne.style.display = 'none';
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

var questionElOne = document.querySelector('#displayQuestionOne');
var choicesElOne = document.querySelector('#displayChoicesOne');
var liEl = document.createElement("li");
var questionElTwo = document.querySelector('#displayQuestionTwo');
var choicesElTwo = document.querySelector('#displayChoicesTwo');
var testes = document.querySelector('#testes');


var firstQuestion = questions[0];
var secondQuestion = questions[1];
var thirdQuestion = questions[2];
var fourthQuestion = questions[3];
var fifthQuestion = questions[4];

var wrongAudio = document.querySelector('#wrongAudio');
var correctAudio = document.querySelector('#correctAudio');

function displayQuestionTwo() {
    questionElOne.style.display = 'none';
    var testes = document.querySelector('#testes');

    testes.style.display = 'none';
    questionElTwo.textContent = secondQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = secondQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        // liEl.setAttribute('id', 'option');
        choicesElTwo.appendChild(liEl);
        choicesElTwo.setAttribute('style', 'text-align: center;');
    }
    var AquestionTwo = document.getElementsByTagName('li')[0];
    var BquestionTwo = document.getElementsByTagName('li')[1];
    var CquestionTwo = document.getElementsByTagName('li')[2];
    var DquestionTwo = document.getElementsByTagName('li')[3];

    //this is the copy paste
    var wrongAudio = document.querySelector('#wrongAudio');
    var correctAudio = document.querySelector('#correctAudio');
    function playWrongAudio() {
        wrongAudio.play();
    }
    function playCorrectAudio() {
        correctAudio.play();
    }
    // var timeout = setTimeout(waitAndSee, 500);
    // function waitAndSee() {
    //     timeout;
    // }

    function wrongOne() {
        AquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        // setTimeout(displayQuestionTwo, 500);
    }
    function wrongTwo() {
        DquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playCorrectAudio();
        // setTimeout(displayQuestionTwo, 500);
    }
    function wrongThree() {
        CquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        // setTimeout(displayQuestionTwo, 500);
    }
    function right() {
        BquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        playWrongAudio();
        // setTimeout(displayQuestionTwo, 500);
    }


    AquestionTwo.addEventListener('click', wrongOne);
    BquestionTwo.addEventListener('click', right);
    CquestionTwo.addEventListener('click', wrongThree);
    DquestionTwo.addEventListener('click', wrongTwo);

}

function displayQuestionOne() {
    questionElOne.textContent = firstQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = firstQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        // liEl.setAttribute('id', 'option');
        choicesElOne.appendChild(liEl);
        choicesElOne.setAttribute('style', 'text-align: center;');
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
    function playCorrectAudio() {
        correctAudio.play();
    }
    // var timeout = setTimeout(waitAndSee, 500);
    // function waitAndSee() {
    //     timeout;
    // }

    function wrongOne() {
        optionOne.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionTwo, 500);
    }
    function wrongTwo() {
        optionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionTwo, 500);
    }
    function wrongThree() {
        optionThree.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionTwo, 500);
    }
    function right() {
        optionFour.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        playCorrectAudio();
        setTimeout(displayQuestionTwo, 500);
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

