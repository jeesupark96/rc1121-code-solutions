var lightClick = document.querySelector('.button');
var normalBody = document.querySelector('.normal');

function clickLight(event) {
  if (normalBody === document.querySelector('.light')) {
    lightClick.className = 'button dark';
    normalBody.className = 'normal dark';
  } else {
    lightClick.className = 'button light';
    normalBody.className = 'normal light';
  }
}

lightClick.addEventListener('click', clickLight);
