function lockUnlockButton(fieldId, button) {
    const inputField = document.querySelector(`#${fieldId}`);
    if (inputField.hasAttribute("readonly")) {
      inputField.removeAttribute("readonly");
      button.innerHTML = "Travar";
    } else {
      inputField.setAttribute("readonly", "");
      button.innerHTML = "Destravar";
    }
  }

  function baixarArquivoButton() {
    var nomeArquivo = mountNomeArquivo();
    var documento = mountCnab400();
    download(nomeArquivo,documento);
  }

  function baixarArquivoButton2() {
    var nomeArquivo = mountNomeArquivo();
    var documento = mountArquivo();
    download(nomeArquivo,documento);
  }

  function adicionarLinhaButton(){
    var linha = mountLinhaRemessaDetalhePadrao();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha(linha);
  }

  function setValorRemessaDetalhePadraoButton(){
    document.getElementById("tipoDeRegistro").value = RemessaPadraoConstants.TIPO_REGISTRO.value;
    document.getElementById("codigoDeInscricao").value = RemessaPadraoConstants.CODIGO_INSCRICAO.value;
    document.getElementById("numeroDeInscricao").value = RemessaPadraoConstants.NUMERO_INSCRICAO.value;
    document.getElementById("agencia").value = RemessaPadraoConstants.AGENCIA.value;
    document.getElementById("zeros1").value = RemessaPadraoConstants.ZEROS.value;
    document.getElementById("conta").value =RemessaPadraoConstants.CONTA.value;
    document.getElementById("dac").value = RemessaPadraoConstants.DAC.value;
    document.getElementById("brancos1").value =RemessaPadraoConstants.BRANCOS1.value;
    document.getElementById("instrucaoAlegacao").value = RemessaPadraoConstants.INSTRUCAO_ALEGACAO.filler;
    document.getElementById("usoEmpresa").value = RemessaPadraoConstants.USO_EMPRESA.filler;
    document.getElementById("nossoNumero").value = RemessaPadraoConstants.NOSSO_NUMERO.value;
    document.getElementById("moedaVariavel").value = RemessaPadraoConstants.MOEDA_VARIAVEL.filler;
    document.getElementById("numeroCarteira").value = RemessaPadraoConstants.NUMERO_CARTEIRA.value;
    document.getElementById("usoBanco").value = RemessaPadraoConstants.USO_BANCO.filler;
    document.getElementById("carteira").value = RemessaPadraoConstants.CARTEIRA.value;
    document.getElementById("codigoOcorrencia").value = RemessaPadraoConstants.CODIGO_OCORRENCIA.value;
    document.getElementById("numeroDocumento").value = RemessaPadraoConstants.NUMERO_DOCUMENTO.filler;
    document.getElementById("vencimento").value = RemessaPadraoConstants.VENCIMENTO.value;
    document.getElementById("valorTitulo").value = RemessaPadraoConstants.VALOR_TITULO.value;
    document.getElementById("codigoBanco").value = RemessaPadraoConstants.CODIGO_BANCO.value;
    document.getElementById("agenciaCobradora").value = RemessaPadraoConstants.AGENCIA_COBRADORA.filler;
    document.getElementById("especie").value = RemessaPadraoConstants.ESPECIE.value;
    document.getElementById("aceite").value =RemessaPadraoConstants.ACEITE.value;
    document.getElementById("dataEmissao").value = RemessaPadraoConstants.DATA_EMISSAO.value;
    document.getElementById("instrucao1").value = RemessaPadraoConstants.INSTRUCAO1.filler;
    document.getElementById("instrucao2").value = RemessaPadraoConstants.INSTRUCAO2.filler;
    document.getElementById("valorJuros").value  = RemessaPadraoConstants.VALOR_JUROS.filler;
    document.getElementById("dataDesconto").value = RemessaPadraoConstants.DATA_DESCONTO.filler;
    document.getElementById("valorDesconto").value  = RemessaPadraoConstants.VALOR_DESCONTO.filler;
    document.getElementById("valorIOF").value = RemessaPadraoConstants.VALOR_IOF.filler;
    document.getElementById("abatimento").value  = RemessaPadraoConstants.ABATIMENTO.filler;
    document.getElementById("codigoInscricaoPagador").value = RemessaPadraoConstants.CODIGO_INSCRICAO_PAGADOR.value;
    document.getElementById("numeroInscricaoPagador").value = RemessaPadraoConstants.NUMERO_INSCRICAO_PAGADOR.value;
    document.getElementById("nome").value = RemessaPadraoConstants.NOME.value;
    document.getElementById("brancos2").value = RemessaPadraoConstants.BRANCOS2.value;;
    document.getElementById("logradouro").value = RemessaPadraoConstants.LOGRADOURO.value;
    document.getElementById("bairro").value = RemessaPadraoConstants.BAIRRO.value;
    document.getElementById("cep").value = RemessaPadraoConstants.CEP.value;
    document.getElementById("cidade").value = RemessaPadraoConstants.CIDADE.value;
    document.getElementById("estado").value = RemessaPadraoConstants.ESTADO.value;
    document.getElementById("sacadorAvalista").value = RemessaPadraoConstants.SACADOR_AVALISTA.filler;
    document.getElementById("brancos3").value = RemessaPadraoConstants.BRANCOS3.value;
    document.getElementById("dataMora").value = RemessaPadraoConstants.DATA_MORA.filler;
    document.getElementById("prazo").value = RemessaPadraoConstants.PRAZO.filler;
    document.getElementById("brancos4").value = RemessaPadraoConstants.BRANCOS4.value;
    document.getElementById("numeroSequencial").value = RemessaPadraoConstants.NUMERO_SEQUENCIAL.value;;
    setFieldsReadOnly();
  }

  function setNossoNumeroButton(tipo){
    const nossoNumero = tipo == "data" ? gerarNossoNumeroData() : gerarNossoNumeroAleatorio();
    document.getElementById("nossoNumero").value = nossoNumero;
  }
  
  function setNossoNumerPadraoButton(tipo){
    const nossoNumero = tipo == "data" ? gerarNossoNumeroData() : gerarNossoNumeroAleatorio();
    document.getElementById("nossoNumeroPadrao").value = nossoNumero;
  }

  function setNomeArquivoButton(){
    const nomeArquivo = gerarNomeArquivo();
    document.getElementById("nomeArquivo").value = nomeArquivo;
  }

  function setComplementoButton(){
    const complemento = gerarComplemento();
    document.getElementById("complementoLinhaPadrao").value = complemento;
  }

  function setComplementoArquivoPadraoButton(){
    const complemento = gerarHeader();
    document.getElementById("complementoArquivoPadrao").value = complemento;
  }
  
  function salvarItemById(campo) {
    let elemento = document.getElementById(campo);
    if (elemento) {
      localStorage.setItem(campo, elemento.value);
    }
  }

  function salvarConfiguracoes() {
    var agencia = document.getElementById("agenciaPadrao").value;
    var conta = document.getElementById("contaPadrao").value;
    var dac = document.getElementById("dacPadrao").value;
    var nossoNumero = document.getElementById("nossoNumeroPadrao").value;
    var codigoOcorrenciaPadrao = document.getElementById("codigoOcorrenciaPadrao").value;
    var complementoArquivoPadrao = document.getElementById("complementoArquivoPadrao").value;
    var isComplementoArquivoPadrao = document.getElementById("isComplementoArquivoPadrao").checked;
    var complemento = document.getElementById("complementoLinhaPadrao").value;
    var isComplemento = document.getElementById("isComplementoPadrao").checked;
    var isSobreporLinha = document.getElementById("isSobreporLinha").checked;

    localStorage.setItem("agenciaPadrao", agencia);

    localStorage.setItem("contaPadrao", conta);

    localStorage.setItem("dacPadrao", dac);

    localStorage.setItem("complementoArquivoPadrao", complementoArquivoPadrao);

    localStorage.setItem("isComplementoArquivoPadrao", isComplementoArquivoPadrao);

    localStorage.setItem("complementoLinhaPadrao", complemento);

    localStorage.setItem("isComplementoPadrao", isComplemento);

    localStorage.setItem("nossoNumeroPadrao", nossoNumero);

    localStorage.setItem("codigoOcorrenciaPadrao", codigoOcorrenciaPadrao);

    localStorage.setItem("isSobreporLinha", isSobreporLinha);

    var message = "Configurações Salvas!";
    alert(message);
  }
  
  function apagarConfiguracoes(){
    localStorage.removeItem('agenciaPadrao');
    localStorage.removeItem('contaPadrao');
    localStorage.removeItem('dacPadrao');
    localStorage.removeItem('complementoArquivoPadrao');
    localStorage.removeItem('isComplementoArquivoPadrao');
    localStorage.removeItem('complementoLinhaPadrao');
    localStorage.removeItem('isComplementoPadrao');
    localStorage.removeItem('nossoNumeroPadrao');
    localStorage.removeItem('codigoOcorrenciaPadrao');
    localStorage.removeItem('isSobreporLinha');
    document.getElementById("agenciaPadrao").value = "";
    document.getElementById("contaPadrao").value = "";
    document.getElementById("dacPadrao").value = "";
    document.getElementById("nossoNumeroPadrao").value = "";
    document.getElementById("complementoArquivoPadrao").value = "";
    document.getElementById("isComplementoArquivoPadrao").checked = false;
    document.getElementById("complementoLinhaPadrao").value = "";
    document.getElementById("isComplementoPadrao").checked = false;
    document.getElementById("isSobreporLinha").checked = false;
    document.getElementById("codigoOcorrenciaPadrao").value = "";
    alert("Configurações Deletadas")
  }
