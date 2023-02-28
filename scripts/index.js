document.addEventListener("DOMContentLoaded", function () {

  setModoRemessaCompleta();

  adicionarRateio(1);

  setQuantidadesLinhasMaximo();

  //Minimizar
  var toggleButtons = document.querySelectorAll(".toggleButton");
  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function () {
      toggleSection(this.getAttribute("data-section"));
    });
  }

  //Configurações Padrao
  const agencia = localStorage.getItem("agenciaPadrao");
  const conta = localStorage.getItem("contaPadrao");
  const dac = localStorage.getItem("dacPadrao");
  const headerArquivoPadrao = localStorage.getItem("headerArquivoPadrao");
  const nossoNumeroPadrao = localStorage.getItem("nossoNumeroPadrao");
  const codigoOcorrenciaPadrao = localStorage.getItem("codigoOcorrenciaPadrao");
  const complementoArquivoPadrao = localStorage.getItem("complementoArquivoPadrao");
  const isComplementoArquivoPadrao = localStorage.getItem("isComplementoArquivoPadrao");
  const complementoLinha = localStorage.getItem("complementoLinhaPadrao");
  const isComplementoPadrao = localStorage.getItem("isComplementoPadrao");
  const isSobreporLinha = localStorage.getItem("isSobreporLinha");
  
  if (agencia) {
    document.getElementById("agenciaPadrao").value = agencia;
  }
  if (conta) {
    document.getElementById("contaPadrao").value = conta;
  }
  if (dac) {
    document.getElementById("dacPadrao").value = dac;
  }
  if (headerArquivoPadrao) {
    document.getElementById("headerArquivoPadrao").value = headerArquivoPadrao;
  }
  if (nossoNumeroPadrao) {
    document.getElementById("nossoNumeroPadrao").value = nossoNumeroPadrao;
  }
  if (codigoOcorrenciaPadrao) {
    document.getElementById("codigoOcorrenciaPadrao").value = codigoOcorrenciaPadrao;
  }
  if (complementoArquivoPadrao) {
    document.getElementById("complementoArquivoPadrao").value = complementoArquivoPadrao;
  }
  if (complementoLinha) {
    document.getElementById("complementoLinhaPadrao").value = complementoLinha;
  }
  document.getElementById("isComplementoArquivoPadrao").checked = (isComplementoArquivoPadrao === "true");
  document.getElementById("isComplementoPadrao").checked = (isComplementoPadrao === "true");
  document.getElementById("isSobreporLinha").checked = (isSobreporLinha === "true");

  //Adicionar Header

});

function toggleSection(sectionName) {
  var formSectionContent = document.getElementById(sectionName + "Content");
  var toggleButton = document.querySelector('[data-section="' + sectionName + '"]');
  var toggleButton = document.querySelector('[data-section="' + sectionName + '"]');

  if (formSectionContent.style.display === "none") {
    formSectionContent.style.display = "block";
    toggleButton.innerText = "Minimizar " + sectionName;
  } else {
    formSectionContent.style.display = "none";
    toggleButton.innerText = "Maximizar " + sectionName;
  }
}

function setFieldsReadOnly(parentId) {
  var fields = document.querySelectorAll(`#${parentId} .fixo`);
  for (var i = 0; i < fields.length; i++) {
    fields[i].setAttribute("readonly", "readonly");
  }
  setEditButtonsVisible(parentId);
  setEditButtonsMessage(parentId);
}


function setEditButtonsMessage(parentId) {
  var editButtons = document.querySelectorAll(`#${parentId} .editButton`);
  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].innerHTML = "Destravar";
  }
}

function setEditButtonsVisible(parentId) {
  var editButtons = document.querySelectorAll(`#${parentId} .editButton`);
  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].style.display = "inline-block";
  }
}
