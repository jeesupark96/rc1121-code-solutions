
const letters = document.querySelectorAll('span');
var i = 0;
document.addEventListener('keydown', event => {

  if (event.key === letters[i].textContent) {
    letters[i].className = 'lettergreen';
    i++;
    letters[i].className = 'letter borderbottom';
  } else letters[i].className = 'letterred borderbottomred';

});
