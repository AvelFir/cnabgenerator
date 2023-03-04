function lockUnlockButton(inputFieldId, lockUnlockButton) {
  const inputField = document.querySelector(`#${inputFieldId}`);
  toggleInputFieldReadonly(inputField, lockUnlockButton);
}


function limparInputs(camposDiv) {
  var inputs = document.querySelectorAll("#" + camposDiv + " div input");
  if (inputs.length == 0) {
    inputs = document.querySelectorAll("#" + camposDiv + " input");
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}