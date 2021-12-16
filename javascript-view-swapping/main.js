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
        if (eventT === 'html') {
          viewElements[i].className = 'view';
          viewElements[2].className = 'hidden';
          viewElements[1].className = 'hidden';
        } else if (event.target.getAttribute('data-view') === 'css') {
          viewElements[i].className = 'view';
          viewElements[2].className = 'hidden';
          viewElements[0].className = 'hidden';
        } else if (eventT === 'javascript') {
          viewElements[i].className = 'view';
          viewElements[1].className = 'hidden';
          viewElements[0].className = 'hidden';
        }
      }
    }
  }
}

tabContain.addEventListener('click', tabList);
