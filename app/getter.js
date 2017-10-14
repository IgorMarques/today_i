function getItens(key, listId) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/itens", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        loadItens(
          getItenData(xhr.responseText, key),
          listId,
        )
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  return xhr.send(null);
}

function getItenData(responseBody, key) {
  var responseParsed = parseResponse(responseBody)

  return responseParsed[key]
}

function parseResponse(body) {
  return JSON.parse(body).data
}
