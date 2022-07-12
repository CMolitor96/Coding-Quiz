// TODO: add game logic
var startButton = document.querySelector('#start');

//On time ===0 make enter score screen
var resultsEl = document.querySelector('#results');
var score = secondsLeft;

//connecting audio to right and wrong answers
var wrongAudio = document.querySelector('#wrongAudio');
var correctAudio = document.querySelector('#correctAudio');
function playWrongAudio() {
    wrongAudio.play();
}
function playCorrectAudio() {
    correctAudio.play();
}

//End of quiz screen
function enterScores() {
    clearInterval(countdown);
    timeLeft.textContent = secondsLeft;
    questionElFive.style.display = 'none';
    var hideDisplayFive = document.querySelector('#hideDisplayFive');
    hideDisplayFive.style.display = 'none';
    var resultsEl = document.querySelector('#results');
    var score = secondsLeft;
    resultsEl.textContent = 'Times Up! Your score: ' + score;
    var instructions = document.createElement('h1');
    instructions.textContent = 'Please input your initials to log your score';
    var inputScore = document.createElement('input');
    inputScore.setAttribute('style', 'padding: 10px; height: 50px; margin: 10px; text-align: center; font-size: 20px;')
    var submitScore = document.createElement('button');
    submitScore.textContent = 'Submit';
    resultsEl.appendChild(instructions);
    resultsEl.appendChild(inputScore);
    resultsEl.appendChild(submitScore);

    while (inputScore.length > 3) {
        alert('Please only provide up to 4 characters for your initials');
    }
}

//countdown timer
var timeLeft = document.querySelector('#countdown');
var secondsLeft = 60, countdown;


function startTimer() {
   countdown = setInterval(countdownTimer, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function countdownTimer() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft <= 0) {
        clearInterval(countdown);
        secondsLeft = 0;
        timeLeft.textContent = secondsLeft;
        questionElOne.style.display = 'none';
        hideDisplayOne.style.display = 'none';
        questionElTwo.style.display = 'none';
        hideDisplayTwo.style.display = 'none';
        questionElThree.style.display = 'none';
        hideDisplayThree.style.display = 'none';
        questionElFour.style.display = 'none';
        hideDisplayFour.style.display = 'none';
        questionElFive.style.display = 'none';
        hideDisplayFive.style.display = 'none';
        enterScores();
    }

}




//On start click to hide instructions and button
var mainEl = document.querySelector('#mainBody');
function hideMain() {
    mainEl.style.display = 'none';
}

//Function to declare timer, hide main body, and start the quiz cascade
function timerAndHideMain() {
    startTimer();
    hideMain();
    displayQuestionOne();
}

//DOM elements
var questionElOne = document.querySelector('#displayQuestionOne');
var choicesElOne = document.querySelector('#displayChoicesOne');
var liEl = document.createElement("li");
var questionElTwo = document.querySelector('#displayQuestionTwo');
var choicesElTwo = document.querySelector('#displayChoicesTwo');
var questionElThree = document.querySelector('#displayQuestionThree');
var choicesElThree = document.querySelector('#displayChoicesThree');
var questionElFour = document.querySelector('#displayQuestionFour');
var choicesElFour = document.querySelector('#displayChoicesFour');
var questionElFive = document.querySelector('#displayQuestionFive');
var choicesElFive = document.querySelector('#displayChoicesFive');


var firstQuestion = questions[0];
var secondQuestion = questions[1];
var thirdQuestion = questions[2];
var fourthQuestion = questions[3];
var fifthQuestion = questions[4];

var wrongAudio = document.querySelector('#wrongAudio');
var correctAudio = document.querySelector('#correctAudio');


//First question
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


    function wrongOne() {
        secondsLeft = secondsLeft - 20;
        optionOne.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionTwo, 500);
    }
    function wrongTwo() {
        secondsLeft = secondsLeft - 20;
        optionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionTwo, 500);
    }
    function wrongThree() {
        secondsLeft = secondsLeft - 20;
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

//Second question
function displayQuestionTwo() {
    questionElOne.style.display = 'none';
    var hideDisplayOne = document.querySelector('#hideDisplayOne');

    hideDisplayOne.style.display = 'none';
    questionElTwo.textContent = secondQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = secondQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        // liEl.setAttribute('id', 'option');
        choicesElTwo.appendChild(liEl);
        choicesElTwo.setAttribute('style', 'text-align: center;');
    }
    var parent = document.querySelector('#displayChoicesTwo');
    var AquestionTwo = parent.children[0];
    var BquestionTwo = parent.children[1];
    var CquestionTwo = parent.children[2];
    var DquestionTwo = parent.children[3];
    

    function wrongOneQTwo() {
        secondsLeft = secondsLeft - 20;
        AquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionThree, 500);
    }
    function wrongTwoQTwo() {
        secondsLeft = secondsLeft - 20;
        DquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionThree, 500);
    }
    function wrongThreeQTwo() {
        secondsLeft = secondsLeft - 20;
        CquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionThree, 500);
    }
    function rightQTwo() {
        BquestionTwo.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        playCorrectAudio();
        setTimeout(displayQuestionThree, 500);
    }

    AquestionTwo.addEventListener('click', wrongOneQTwo);
    BquestionTwo.addEventListener('click', rightQTwo);
    CquestionTwo.addEventListener('click', wrongThreeQTwo);
    DquestionTwo.addEventListener('click', wrongTwoQTwo);

}

//Third question
function displayQuestionThree() {
    questionElTwo.style.display = 'none';
    hideDisplayTwo = document.querySelector('#hideDisplayTwo');
    hideDisplayTwo.style.display = 'none';

    questionElThree.textContent = thirdQuestion.Question;
    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = thirdQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        // liEl.setAttribute('id', 'option');
        choicesElThree.appendChild(liEl);
        choicesElThree.setAttribute('style', 'text-align: center;');
    }
    var parentThree = document.querySelector('#displayChoicesThree');
    var AquestionThree = parentThree.children[0];
    var BquestionThree = parentThree.children[1];
    var CquestionThree = parentThree.children[2];
    var DquestionThree = parentThree.children[3];

    function Q3wrongOne() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        BquestionThree.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionFour, 500);
    }
    function Q3wrongTwo() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        CquestionThree.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionFour, 500);
    }
    function Q3wrongThree() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        DquestionThree.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionFour, 500);
    }
    function Q3right() {
        AquestionThree.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        playCorrectAudio();
        setTimeout(displayQuestionFour, 500);
    }

    AquestionThree.addEventListener('click', Q3right);
    BquestionThree.addEventListener('click', Q3wrongOne);
    CquestionThree.addEventListener('click', Q3wrongTwo);
    DquestionThree.addEventListener('click', Q3wrongThree);



}

//Fourth question
function displayQuestionFour() {
    questionElThree.style.display = 'none';
    var hideDisplayThree = document.querySelector('#hideDisplayThree');
    hideDisplayThree.style.display = 'none';
    questionElFour.textContent = fourthQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = fourthQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        // liEl.setAttribute('id', 'option');
        choicesElFour.appendChild(liEl);
        choicesElFour.setAttribute('style', 'text-align: center;');
    }
    var parentFour = document.querySelector('#displayChoicesFour');
    var AquestionFour = parentFour.children[0];
    var BquestionFour = parentFour.children[1];
    var CquestionFour = parentFour.children[2];
    var DquestionFour = parentFour.children[3];

    function Q4wrongOne() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        AquestionFour.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionFive, 500);
    }
    function Q4wrongTwo() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        CquestionFour.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionFive, 500);
    }
    function Q4wrongThree() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        BquestionFour.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        setTimeout(displayQuestionFive, 500);
    }
    function Q4right() {
        DquestionFour.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        playCorrectAudio();
        setTimeout(displayQuestionFive, 500);
    }

    AquestionFour.addEventListener('click', Q4wrongOne);
    DquestionFour.addEventListener('click', Q4right);
    CquestionFour.addEventListener('click', Q4wrongTwo);
    BquestionFour.addEventListener('click', Q4wrongThree);


}

//Fifth question
function displayQuestionFive() {
    questionElFour.style.display = 'none';
    var hideDisplayFour = document.querySelector('#hideDisplayFour');
    hideDisplayFour.style.display = 'none';
    questionElFive.textContent = fifthQuestion.Question;

    for (var i = 0; i < 4; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = fifthQuestion.Choices[i];
        liEl.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px;');
        // liEl.setAttribute('id', 'option');
        choicesElFive.appendChild(liEl);
        choicesElFive.setAttribute('style', 'text-align: center;');
    }

    var parentFive = document.querySelector('#displayChoicesFive');
    var AquestionFive = parentFive.children[0];
    var BquestionFive = parentFive.children[1];
    var CquestionFive = parentFive.children[2];
    var DquestionFive = parentFive.children[3];

    function Q5wrongOne() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        AquestionFive.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        stopTimer();
        setTimeout(enterScores, 500);

    }
    function Q5wrongTwo() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        BquestionFive.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        stopTimer();
        setTimeout(enterScores, 500);
    }
    function Q5wrongThree() {
        secondsLeft = secondsLeft - 20;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        DquestionFive.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: red;');
        playWrongAudio();
        stopTimer();
        setTimeout(enterScores, 500);

    }
    function Q5right() {
        CquestionFive.setAttribute('style', 'display: block; padding: 10px; border: 2px solid black; width: 150px; margin-left: auto; margin-right: auto; margin-top: 10px; margin-bottom: 10px; background-color: green;');
        playCorrectAudio();
        setTimeout(enterScores, 500);
        stopTimer();

    }

    AquestionFive.addEventListener('click', Q5wrongOne);
    CquestionFive.addEventListener('click', Q5right);
    BquestionFive.addEventListener('click', Q5wrongTwo);
    DquestionFive.addEventListener('click', Q5wrongThree);
}

startButton.addEventListener('click', timerAndHideMain);


