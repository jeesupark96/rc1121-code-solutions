function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var nameOne = document.getElementById('user-name');
var email = document.getElementById('user-email');
var textArea = document.getElementById('user-message');

nameOne.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
