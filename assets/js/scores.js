/* TODO: 
  - add a function to print the high score
  - add a function to clear the high score
  - on page load, print the high score
// */

//Grabs scores stored in Highscores in local storage and iterates through loop adding them to high score screen
var text = localStorage.getItem('Highscores');
var obj = JSON.parse(text);
var length = Object.keys(obj).length;

for (var i = 0; i < length; i++) {
  var scoresEl = document.querySelector('#inputScoresHere');
  var liEl = document.createElement('li');
  scoresEl.setAttribute('style', 'list-style: none;')
  var text = localStorage.getItem('Highscores');
  var obj = JSON.parse(text);
  var first = Object.keys(obj)[i];
  liEl.textContent = first + " - " + obj[first] + " points";
  liEl.setAttribute('style', 'font-size: 30px; margin: auto;')
  liEl.setAttribute('id', 'runners');
  scoresEl.appendChild(liEl);
  console.log(Object.keys(obj).length);

}
