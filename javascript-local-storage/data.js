/* exported todos */

var todos = [];
var previousTodosJOSN = localStorage.getItem('javascript-local-storage');
if (previousTodosJOSN !== null) {
  todos = JSON.parse(previousTodosJOSN);
}
function local(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', local);
