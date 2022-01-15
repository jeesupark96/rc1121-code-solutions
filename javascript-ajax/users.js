function users(name) {
  var userlist = document.querySelector('#user-list');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.balldontlie.io/api/v1/players');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var list = document.createElement('li');
      list.textContent = xhr.response[i].first_name;
      userlist.appendChild(list);

    }
  });
  xhr.send();
}

users();
