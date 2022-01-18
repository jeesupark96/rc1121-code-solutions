
var letters = document.querySelectorAll('.letter');
var newSpan = document.querySelectorAll('span');
function changeKeys(event) {
  var i = 0;
  if (event.key === newSpan[i].textContent) {
    newSpan[i].className = 'lettergreen';
    i++;
  } else newSpan[i].className = 'letterred';

}

document.addEventListener('keydown', changeKeys);
