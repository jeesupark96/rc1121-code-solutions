var rightClick = document.querySelector('.fa-angle-right');
var leftClick = document.querySelector('.fa-angle-left');
var image = document.querySelector('img');
var circle = document.querySelector('.circleblack');
var circleTwo = document.querySelector('.circletwo');
var circleThree = document.querySelector('.circlethree');
var circleFour = document.querySelector('.circlefour');
var circleFive = document.querySelector('.circlefive');
rightClick.addEventListener('click', function rightClick() {
  if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/001.png') {
    image.src = 'images/004.png';
    circle.className = 'far fa-circle';
    circleTwo.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/004.png') {
    image.src = 'images/007.png';
    circleTwo.className = 'far fa-circle';
    circleThree.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/007.png') {
    image.src = 'images/025.png';
    circleThree.className = 'far fa-circle';
    circleFour.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/025.png') {
    image.src = 'images/039.png';
    circleFour.className = 'far fa-circle';
    circleFive.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/039.png') {
    image.src = 'images/001.png';
    circleFive.className = 'far fa-circle';
    circle.className = 'fas fa-circle circleblack';
  }
});

leftClick.addEventListener('click', function leftClick() {
  if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/001.png') {
    image.src = 'images/039.png';
    circle.className = 'far fa-circle';
    circleFive.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/039.png') {
    image.src = 'images/025.png';
    circleFive.className = 'far fa-circle';
    circleFour.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/025.png') {
    image.src = 'images/007.png';
    circleFour.className = 'far fa-circle';
    circleThree.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/007.png') {
    image.src = 'images/004.png';
    circleThree.className = 'far fa-circle';
    circleTwo.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/004.png') {
    image.src = 'images/001.png';
    circleTwo.className = 'far fa-circle';
    circle.className = 'fas fa-circle circleblack';
  }
});

document.addEventListener('click', function (event) {
  if (event.target.className === 'far fa-circle circletwo') {
    image.src = 'images/004.png';
    circle.className = 'far fa-circle circleone';
    circleThree.className = 'far fa-circle circlethree';
    circleFour.className = 'far fa-circle circlefour';
    circleFive.className = 'far fa-circle circlefive';
    circleTwo.className = 'fas fa-circle circletwo';
  } else if (event.target.className === 'far fa-circle circlethree') {
    image.src = 'images/007.png';
    circle.className = 'far fa-circle circleone';
    circleTwo.className = 'far fa-circle circletwo';
    circleThree.className = 'fas fa-circle circlethree';
    circleFour.className = 'far fa-circle circlefour';
    circleFive.className = 'far fa-circle circlefive';
  } else if (event.target.className === 'far fa-circle circlefour') {
    image.src = 'images/025.png';
    circle.className = 'far fa-circle circleone';
    circleTwo.className = 'far fa-circle circletwo';
    circleThree.className = 'far fa-circle circlethree';
    circleFour.className = 'fas fa-circle circlefour';
    circleFive.className = 'far fa-circle circlefive';
  } else if (event.target.className === 'far fa-circle circlefive') {
    image.src = 'images/039.png';
    circle.className = 'far fa-circle circleone';
    circleTwo.className = 'far fa-circle circletwo';
    circleThree.className = 'far fa-circle circlethree';
    circleFour.className = 'far fa-circle circlefour';
    circleFive.className = 'fas fa-circle circlefive';
  } else if (event.target.className === 'far fa-circle circleone') {
    image.src = 'images/001.png';
    circle.className = 'fas fa-circle circleone';
    circleTwo.className = 'far fa-circle circletwo';
    circleThree.className = 'far fa-circle circlethree';
    circleFour.className = 'far fa-circle circlefour';
    circleFive.className = 'far fa-circle circlefive';
  }
});
function newFun() {
  if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/001.png') {
    image.src = 'images/004.png';
    circle.className = 'far fa-circle circleone';
    circleTwo.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/004.png') {
    image.src = 'images/007.png';
    circleTwo.className = 'far fa-circle circletwo';
    circleThree.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/007.png') {
    image.src = 'images/025.png';
    circleThree.className = 'far fa-circle circlethree';
    circleFour.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/025.png') {
    image.src = 'images/039.png';
    circleFour.className = 'far fa-circle circlefour';
    circleFive.className = 'fas fa-circle circleblack';
  } else if (image.src === 'http://127.0.0.1:5500/javascript-carousel/images/039.png') {
    image.src = 'images/001.png';
    circleFive.className = 'far fa-circle circlefive';
    circle.className = 'fas fa-circle circleblack';
  }
}
setInterval(newFun, 3000);
