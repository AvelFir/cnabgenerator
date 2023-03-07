const LOCKED_TEXT = "Travar";
const UNLOCKED_TEXT = "Destravar";

function toggleInputFieldReadonly(inputField, lockUnlockButton) {
  if (inputField.hasAttribute("readonly")) {
    inputField.removeAttribute("readonly");
    lockUnlockButton.innerHTML = LOCKED_TEXT;
  } else {
    inputField.setAttribute("readonly", "");
    lockUnlockButton.innerHTML = UNLOCKED_TEXT;
  }
}

function setElementReadOnly(element){
  element.setAttribute("readonly", "readonly");
}

function removeElementReadOnly(element){
  element.removeAttribute("readonly");
}