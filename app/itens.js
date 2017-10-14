function loadAllItens() {
  getItens('yesterdays_itens', 'yesterdaysItens');
  getItens('todays_complete_itens', 'todaysCompleteItens');
  getItens('todays_itens', 'todaysItens');
}

function refreshItensList() {
  eraseItensLists();
  loadAllItens();
}

function eraseItensLists() {
  eraseItensList('yesterdaysItens');
  eraseItensList('todaysCompleteItens');
  eraseItensList('todaysItens');
}

function eraseItensList(listId) {
  document.getElementById(listId).innerHTML = '';
}

function loadItens(itens, listId){
  itens.forEach(function(item) {
    addItemToList(item, listId);
  });
}

function addItemToList(item, listId) {
  var new_entry = document.createElement('li');

  new_entry.id = item.id
  new_entry.innerHTML = item.description;

  if (!item.done) { new_entry.appendChild(toggleLinkFor(item.id)); }

  document.getElementById(listId).appendChild(new_entry);
}

function toggleLinkFor(itemId) {
  var link = document.createElement('a');

  link.className= 'toggleLink';
  link.href = "http://localhost:3000/itens/toogle/" + itemId;
  link.innerHTML = '[mark as done]';

  // TODO: Delegate this to another function
  link.onclick = function(e) {
    e.preventDefault();
    toggle(itemId);
    this.parentElement.remove();
  }

  return link;
}

function submitItem(itemDescription) {
  postItem({description: itemDescription});
}

// TODO: create a list object
// TODO: Maybe I don't need this (just submit the form and refresh the list)
// function createItem(description, listId, list) {
//   list.push({ description: description });
//   addItemToList(description, listId);
// }
