document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".toggleButton");
  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function () {
      toggleSection(this.getAttribute("data-section"));
    });
  }

  const agencia = localStorage.getItem("agenciaPadrao");
  const conta = localStorage.getItem("contaPadrao");
  const dac = localStorage.getItem("dacPadrao");
  
  if (agencia) {
    document.getElementById("agenciaPadrao").value = agencia;
  }
  if (conta) {
    document.getElementById("contaPadrao").value = conta;
  }
  if (dac) {
    document.getElementById("dacPadrao").value = dac;
  }

});

function toggleSection(sectionName) {
  var formSectionContent = document.getElementById(sectionName + "Content");
  var toggleButton = document.querySelector('[data-section="' + sectionName + '"]');
  var toggleButton = document.querySelector('[data-section="' + sectionName + '"]');

  if (formSectionContent.style.display === "none") {
    formSectionContent.style.display = "block";
    toggleButton.innerText = "Minimize " + sectionName;
  } else {
    formSectionContent.style.display = "none";
    toggleButton.innerText = "Maximize " + sectionName;
  }
}

function setFieldsReadOnly() {
  var fields = document.querySelectorAll(".fixo");
  for (var i = 0; i < fields.length; i++) {
    fields[i].setAttribute("readonly", "readonly");
  }
  setEditButtonsMessage();
}

function setEditButtonsMessage() {
  var editButtons = document.querySelectorAll(".editButton");
  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].innerHTML = "Destravar";
  }
}