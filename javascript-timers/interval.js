var count = 4;

var display = document.querySelector('.countdown-display');

function countDown(a) {
  count--;
  if (count > 0) {
    display.textContent = count;
  } else {
    display.textContent = '~Earth Beeeeelloooww Us~';

  }
  clearInterval();
}
setInterval(countDown, 1000);
