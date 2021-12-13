function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var mouseEvent = document.querySelector('.click-button');

mouseEvent.addEventListener('click', handleClick, Boolean);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var mouseHover = document.querySelector('.hover-button', Boolean);
mouseHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick, Boolean);
