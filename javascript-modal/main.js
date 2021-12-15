var mainBut = document.querySelector('.open');
var modal = document.getElementById('modal');
var noBut = document.querySelector('.nobut');

function mainButton(event) {
  modal.style.display = 'block';
}

mainBut.addEventListener('click', mainButton);

function secondButton(event) {
  modal.style.display = 'none';
}

noBut.addEventListener('click', secondButton);
