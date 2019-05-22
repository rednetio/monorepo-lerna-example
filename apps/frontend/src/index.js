const lp = require('left-pad');

function helloWorld() {
  document.getElementById('greetings').innerHTML = lp('Greetings!', 4);
}

window.helloWorld = helloWorld;
