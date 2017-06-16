var counter = 5;
var position = 0;
var positionButton = document.getElementsByClassName('position');
var text = 'Ovo nam je prvi timski projekat.';
var startButton = document.getElementById('start');
var writeText = document.getElementById('text');
var userTextArea = document.getElementsByTagName('textarea')[0];
var player1TextArea = document.getElementsByTagName('textarea')[1];
var player2TextArea = document.getElementsByTagName('textarea')[2];
var player3TextArea = document.getElementsByTagName('textarea')[3];
var userBtn = document.getElementById('user');
var ply1btn = document.getElementById('ply1btn');
var ply2btn = document.getElementById('ply2btn');
var ply3btn = document.getElementById('ply3btn');

startButton.addEventListener('click', countDown);


function countDown() {
  startButton.className = 'btn btn-danger col-lg-6 col-lg-offset-3';
  counter--;
  startButton.innerHTML = counter;
  if (counter > 0) {
    setTimeout(countDown, 1000);
  } else {
    startButton.style.display = 'none';
    writeText.className = 'col-lg-6 col-lg-offset-3 text-center well';
    writeText.innerHTML = text;
    userTextArea.focus();
    player1();
    player2();
    player3();
    userTyping();
  }
}

function player1() {
  var textArr = text.split('');
  var newText = '';

  function start() {
    if (textArr.length !== 0) {
      newText += textArr.shift();
      player1TextArea.innerHTML = newText;
      setTimeout(start, 150);
    }else {
      position++;
      ply1btn.innerHTML = "Position: " + position;
      ply1btn.className = "btn btn-warning form-control";
    }
  }
  start();
}

function player2() {
  var textArr = text.split('');
  var newText = '';

  function start() {
    if (textArr.length !== 0) {
      newText += textArr.shift();
      player2TextArea.innerHTML = newText;
      setTimeout(start, 250);
    }else {
      position++;
      ply2btn.innerHTML = "Position: " + position;
      ply2btn.className = "btn btn-warning form-control";
    }
  }
  start();
}

function player3() {
  var textArr = text.split('');
  var newText = '';

  function start() {
    if (textArr.length !== 0) {
      newText += textArr.shift();
      player3TextArea.innerHTML = newText;
      setTimeout(start, 350);
    }else {
      position++;
      ply3btn.innerHTML = "Position: " + position;
      ply3btn.className = "btn btn-warning form-control";
    }
  }
  start();
}

function userTyping() {
  userTextArea.addEventListener('keypress', userFinished);
}

function userFinished(e) {
  if (e.keyCode === 13) {
    var userTypedText = userTextArea.value;
  if (userTypedText === text) {
    position++;
    user.innerHTML = "Position: " + position;
    user.className = "btn btn-warning form-control";
  }else {
    user.innerHTML = "Wrong typing!";
    user.className = "btn btn-danger form-control";
  }
  }
}