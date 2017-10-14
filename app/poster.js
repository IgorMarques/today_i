function postItem(attributes) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/itens", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    var body = JSON.parse(this.responseText);
    addItemToList(body.data, 'todaysItens')
  }
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(JSON.stringify(attributes));
}

function toggle(itemId) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/itens/" + itemId  + "/toggle/", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    var body = JSON.parse(this.responseText);
    addItemToList(body.data, 'todaysCompleteItens')
  }
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send();
}
