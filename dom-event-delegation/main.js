var taskList = document.querySelector('.task-list');
var button = document.querySelector('button');

function logTask(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === (button.tagName)) {
    var taskItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', taskItem);
    taskItem.remove();
  }

}

taskList.addEventListener('click', logTask);
