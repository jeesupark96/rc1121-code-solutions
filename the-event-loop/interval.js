var start = 3;
var timerId;

function countdown() {
  if (start > 0) {
    console.log(start);
    start--;
  } else if (start === 0) {
    console.log('Blast Off!');
    clearInterval(timerId);
  }

}

timerId = setInterval(countdown, 1000);
