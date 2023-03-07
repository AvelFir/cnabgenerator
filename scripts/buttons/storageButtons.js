function salvarItemById(campo) {
    let elemento = document.getElementById(campo);
    if (elemento) {
      localStorage.setItem(campo, elemento.value);
    }
  }
  
  function salvarConfiguracoes() {
    var headerArquivoPadrao = document.getElementById("headerArquivoPadrao").value;
    var complementoArquivoPadrao = document.getElementById("complementoArquivoPadrao").value;
    var isComplementoArquivoPadrao = document.getElementById("isComplementoArquivoPadrao").checked;
    var isComplementoArquivoAutomatico = document.getElementById("isComplementoArquivoAutomatico").checked;
    var complemento = document.getElementById("complementoLinhaPadrao").value;
    var isComplemento = document.getElementById("isComplementoPadrao").checked;
    var fillerPadrao = document.getElementById("fillerPadrao").value;
  
    localStorage.setItem("headerArquivoPadrao", headerArquivoPadrao);
  
    localStorage.setItem("complementoArquivoPadrao", complementoArquivoPadrao);
  
    localStorage.setItem("isComplementoArquivoPadrao", isComplementoArquivoPadrao);

    localStorage.setItem("isComplementoArquivoAutomatico", isComplementoArquivoAutomatico);
  
    localStorage.setItem("complementoLinhaPadrao", complemento);
  
    localStorage.setItem("isComplementoPadrao", isComplemento);
  
    localStorage.setItem("fillerPadrao", fillerPadrao);
  
    var message = "Configurações Salvas!";
    alert(message);
  }
  
  function apagarConfiguracoes() {
    const headerArquivoPadrao = 'headerArquivoPadrao';
    const complementoArquivoPadrao ='complementoArquivoPadrao';
    const isComplementoArquivoPadrao = "isComplementoArquivoPadrao";
    const isComplementoArquivoAutomatico ='isComplementoArquivoAutomatico';
    const complementoLinhaPadrao = 'complementoLinhaPadrao';
    const isComplementoPadrao = 'isComplementoPadrao';
    const fillerPadrao = 'fillerPadrao';

    localStorage.removeItem(headerArquivoPadrao);
    localStorage.removeItem(complementoArquivoPadrao);
    localStorage.removeItem(isComplementoArquivoAutomatico);
    localStorage.removeItem(isComplementoArquivoPadrao);
    localStorage.removeItem(complementoLinhaPadrao);
    localStorage.removeItem(isComplementoPadrao);
    localStorage.removeItem(fillerPadrao);
  
    removeElementReadOnly(document.getElementById(complementoArquivoPadrao));
    
    const gerarComplementoArquivoPadraoButton ='gerarComplementoArquivoPadraoButton';
    document.getElementById(gerarComplementoArquivoPadraoButton).disabled = false;

    document.getElementById(headerArquivoPadrao).value = "";
    document.getElementById(complementoArquivoPadrao).value = "";
    document.getElementById(isComplementoArquivoPadrao).checked = false;
    document.getElementById(isComplementoArquivoAutomatico).checked = false;
    document.getElementById(complementoLinhaPadrao).value = "";
    document.getElementById(isComplementoPadrao).checked = false;
    document.getElementById(fillerPadrao).value = "padrao";

    alert("Configurações Deletadas")
  }
  
  
  function salvarCamposPadrao() {
    var agencia = document.getElementById("agenciaPadrao").value;
    var conta = document.getElementById("contaPadrao").value;
    var dac = document.getElementById("dacPadrao").value;
    var nossoNumero = document.getElementById("nossoNumeroPadrao").value;
    var codigoOcorrenciaPadrao = document.getElementById("codigoOcorrenciaPadrao").value;
    var isSobreporLinha = document.getElementById("isSobreporLinha").checked;
  
    localStorage.setItem("agenciaPadrao", agencia);
  
    localStorage.setItem("contaPadrao", conta);
  
    localStorage.setItem("dacPadrao", dac);
  
    localStorage.setItem("nossoNumeroPadrao", nossoNumero);
  
    localStorage.setItem("codigoOcorrenciaPadrao", codigoOcorrenciaPadrao);
  
    localStorage.setItem("isSobreporLinha", isSobreporLinha);
  
    var message = "Campos Padrões Salvos!";
    alert(message);
  }
  
  function apagarCamposPadrao() {
    localStorage.removeItem('agenciaPadrao');
    localStorage.removeItem('contaPadrao');
    localStorage.removeItem('dacPadrao');
    localStorage.removeItem('nossoNumeroPadrao');
    localStorage.removeItem('isSobreporLinha');
    localStorage.removeItem('codigoOcorrenciaPadrao');
  
    document.getElementById("agenciaPadrao").value = "";
    document.getElementById("contaPadrao").value = "";
    document.getElementById("dacPadrao").value = "";
    document.getElementById("nossoNumeroPadrao").value = "";
    document.getElementById("isSobreporLinha").checked = false;
    document.getElementById("codigoOcorrenciaPadrao").value = "";
    alert("Campos Padrões Deletados")
  }
  