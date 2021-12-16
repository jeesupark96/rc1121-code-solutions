var tabContain = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var viewElements = document.querySelectorAll('.view');

function tabList(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      if (event.target === tabElements[i]) {
        tabElements[i].className = 'tab active';
      } else tabElements[i].className = 'tab';
    }

    if (event.target.matches('.tab')) {
      var eventT = event.target.getAttribute('data-view');
      for (i = 0; i < viewElements.length; i++) {
        if (eventT === tabElements[i].getAttribute('data-view')) {
          viewElements[i].className = 'view';
        } else {
          viewElements[i].className = 'hidden';
        }
      }
    }
  }
}

tabContain.addEventListener('click', tabList);
