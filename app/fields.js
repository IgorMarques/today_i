function bindFields(){
  addSubmitActionToField("itemInput");
  addSubmitActionToButton("itemSubmitButton", "itemInput");
}

function addSubmitActionToField(inputId) {
  field = document.getElementById(inputId);

  field.onkeyup = function (e) {
    if (e.keyCode == 13) {
      submitItem(field.value);
      field.value = "";
    }
  };
}

function addSubmitActionToButton(buttonId, inputId) {
  button = document.getElementById(buttonId);
  field = document.getElementById(inputId);

  button.onclick = function (e) {
    submitItem(field.value);
    field.value = "";
  };
}
