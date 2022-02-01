function users(name) {
  var userlist = document.querySelector('#user-list');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api-nba-v1.p.rapidapi.com/players/lastName/James');
  xhr.setRequestHeader('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com');
  xhr.setRequestHeader('x-rapidapi-key', 'b9229f7371mshb80cdc8bb545c9ap153871jsn9ee1382b317f');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response.api.players[0]);
    for (var i = 0; i < xhr.response.api.players.length; i++) {
      var list = document.createElement('li');
      list.textContent = xhr.response.api.players[i].firstName + ' ' + xhr.response.api.players[i].lastName;
      userlist.appendChild(list);

    }
  });
  xhr.send();
}

users();
