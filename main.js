var counter = 6;
var position = 0;
var positionButton = document.getElementsByClassName('position');
var text = 'This is our first team project.';
var startButton = document.getElementById('start');
var writeText = document.getElementById('text');
var userTextArea = document.getElementsByTagName('textarea')[0];
var bot1TextArea = document.getElementsByTagName('textarea')[1];
var bot2TextArea = document.getElementsByTagName('textarea')[2];
var bot3TextArea = document.getElementsByTagName('textarea')[3];
var userBtn = document.getElementById('user');
var bot1btn = document.getElementById('bot1btn');
var bot2btn = document.getElementById('bot2btn');
var bot3btn = document.getElementById('bot3btn');

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
    bot1();
    bot2();
    bot3();
    userTyping();
  }
}

function bot1() {
  var textArr = text.split('');
  var newText = '';

  function start() {
    if (textArr.length !== 0) {
      newText += textArr.shift();
      bot1TextArea.innerHTML = newText;
      setTimeout(start, 150);
    } else {
      position++;
      bot1btn.innerHTML = "Position: " + position;
      bot1btn.className = "btn btn-warning form-control";
    }
  }
  start();
}

function bot2() {
  var textArr = text.split('');
  var newText = '';

  function start() {
    if (textArr.length !== 0) {
      newText += textArr.shift();
      bot2TextArea.innerHTML = newText;
      setTimeout(start, 200);
    } else {
      position++;
      bot2btn.innerHTML = "Position: " + position;
      bot2btn.className = "btn btn-warning form-control";
    }
  }
  start();
}

function bot3() {
  var textArr = text.split('');
  var newText = '';

  function start() {
    if (textArr.length !== 0) {
      newText += textArr.shift();
      bot3TextArea.innerHTML = newText;
      setTimeout(start, 250);
    } else {
      position++;
      bot3btn.innerHTML = "Position: " + position;
      bot3btn.className = "btn btn-warning form-control";
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
  } else {
    user.innerHTML = "Wrong typing!";
    user.className = "btn btn-danger form-control";
  }
  }
}
