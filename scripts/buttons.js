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

  function adicionarLinhaRemessaDetalhePadraoButton(){
    let linha = mountLinhaRemessaDetalhePadrao();
    linha = linha.substring(0, linha.length - 6);
    const quantidadeLinhas = getMultiplicadorLinhaRemessaDetalhePadrao(); 
    for (let i = 0; i < quantidadeLinhas; i++){
      if(!adicionarLinha400(linha)){
        break;
      }
    }
  }

  function adicionarLinhaDetalheMultaButton(){
    var linha = mountRemessaMultaDefaultValues();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }

  function adicionarLinhaRemessaRateioButton(){
    var linha = mountRemessaRateioCredito();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }

  function adicionarLinhaDadosSacadorAvalistaButton(){
    var linha = mountSacadorAvalista();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }

  function setValorRemessaDetalhePadraoButton(){
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
    setFieldsReadOnly('RemessaPadraoContent');
  }

  function setValorInstrucaoButton(){
    document.getElementById("agencia").value = RemessaPadraoConstants.AGENCIA.value;
    document.getElementById("conta").value =RemessaPadraoConstants.CONTA.value;
    document.getElementById("dac").value = RemessaPadraoConstants.DAC.value;
    document.getElementById("usoEmpresa").value = RemessaPadraoConstants.USO_EMPRESA.filler;
    document.getElementById("nossoNumero").value = RemessaPadraoConstants.NOSSO_NUMERO.value;
    document.getElementById("numeroCarteira").value = RemessaPadraoConstants.NUMERO_CARTEIRA.value;
    document.getElementById("codigoOcorrencia").value = RemessaPadraoConstants.CODIGO_OCORRENCIA.value;
    document.getElementById("numeroDocumento").value = RemessaPadraoConstants.NUMERO_DOCUMENTO.filler;
    document.getElementById("abatimento").value  = RemessaPadraoConstants.ABATIMENTO.filler;
    document.getElementById("prazo").value = RemessaPadraoConstants.PRAZO.filler;

    document.getElementById("codigoDeInscricao").value = RemessaPadraoConstants.CODIGO_INSCRICAO.filler;
    document.getElementById("numeroDeInscricao").value = RemessaPadraoConstants.NUMERO_INSCRICAO.filler;
    document.getElementById("zeros1").value = RemessaPadraoConstants.ZEROS.filler;
    document.getElementById("brancos1").value =RemessaPadraoConstants.BRANCOS1.filler;
    document.getElementById("instrucaoAlegacao").value = RemessaPadraoConstants.INSTRUCAO_ALEGACAO.filler;
    document.getElementById("moedaVariavel").value = RemessaPadraoConstants.MOEDA_VARIAVEL.filler;
    document.getElementById("usoBanco").value = RemessaPadraoConstants.USO_BANCO.filler;
    document.getElementById("carteira").value = RemessaPadraoConstants.CARTEIRA.filler;
    document.getElementById("vencimento").value = RemessaPadraoConstants.VENCIMENTO.filler;
    document.getElementById("valorTitulo").value = RemessaPadraoConstants.VALOR_TITULO.filler;
    document.getElementById("codigoBanco").value = RemessaPadraoConstants.CODIGO_BANCO.filler;
    document.getElementById("agenciaCobradora").value = RemessaPadraoConstants.AGENCIA_COBRADORA.filler;
    document.getElementById("especie").value = RemessaPadraoConstants.ESPECIE.filler;
    document.getElementById("aceite").value =RemessaPadraoConstants.ACEITE.filler;
    document.getElementById("dataEmissao").value = RemessaPadraoConstants.DATA_EMISSAO.filler;
    document.getElementById("instrucao1").value = RemessaPadraoConstants.INSTRUCAO1.filler;
    document.getElementById("instrucao2").value = RemessaPadraoConstants.INSTRUCAO2.filler;
    document.getElementById("valorJuros").value  = RemessaPadraoConstants.VALOR_JUROS.filler;
    document.getElementById("dataDesconto").value = RemessaPadraoConstants.DATA_DESCONTO.filler;
    document.getElementById("valorDesconto").value  = RemessaPadraoConstants.VALOR_DESCONTO.filler;
    document.getElementById("valorIOF").value = RemessaPadraoConstants.VALOR_IOF.filler;
    document.getElementById("codigoInscricaoPagador").value = RemessaPadraoConstants.CODIGO_INSCRICAO_PAGADOR.filler;
    document.getElementById("numeroInscricaoPagador").value = RemessaPadraoConstants.NUMERO_INSCRICAO_PAGADOR.filler;
    document.getElementById("nome").value = RemessaPadraoConstants.NOME.filler;
    document.getElementById("brancos2").value = RemessaPadraoConstants.BRANCOS2.filler;;
    document.getElementById("logradouro").value = RemessaPadraoConstants.LOGRADOURO.filler;
    document.getElementById("bairro").value = RemessaPadraoConstants.BAIRRO.filler;
    document.getElementById("cep").value = RemessaPadraoConstants.CEP.filler;
    document.getElementById("cidade").value = RemessaPadraoConstants.CIDADE.filler;
    document.getElementById("estado").value = RemessaPadraoConstants.ESTADO.filler;
    document.getElementById("sacadorAvalista").value = RemessaPadraoConstants.SACADOR_AVALISTA.filler;
    document.getElementById("brancos3").value = RemessaPadraoConstants.BRANCOS3.filler;
    document.getElementById("dataMora").value = RemessaPadraoConstants.DATA_MORA.filler;
    document.getElementById("brancos4").value = RemessaPadraoConstants.BRANCOS4.filler;
    
    setFieldsReadOnly('RemessaPadraoContent');
  }

  function setDadosSacadorAvalistaButton() {
    document.getElementById('email').value = RemessaDadosSacadorAvalista.EMAIL.value;
    document.getElementById('codigoInscricaoSacador').value = RemessaDadosSacadorAvalista.CODIGO_INSCRICAO.value;
    document.getElementById('numeroInscricaoSacador').value = RemessaDadosSacadorAvalista.NUMERO_INSCRICAO.value;
    document.getElementById('logradouroSacador').value = RemessaDadosSacadorAvalista.LOGRADOURO.value;
    document.getElementById('bairroSacador').value = RemessaDadosSacadorAvalista.BAIRRO.value;
    document.getElementById('cepSacador').value = RemessaDadosSacadorAvalista.CEP.value;
    document.getElementById('cidadeSacador').value = RemessaDadosSacadorAvalista.CIDADE.value;
    document.getElementById('estadoSacador').value = RemessaDadosSacadorAvalista.ESTADO.value;
    document.getElementById('brancosSacador').value = RemessaDadosSacadorAvalista.BRANCOS.value;
    setFieldsReadOnly('DadosSacadorAvalistaContent');
  }

  function setDetalheMultaButton() {
    document.getElementById('codigoMulta').value = RemessaMulta.CODIGO_MULTA.value;
    document.getElementById('dataMulta').value = RemessaMulta.DATA_MULTA.value;
    document.getElementById('valorMulta').value = RemessaMulta.VALOR_MULTA.value;
    document.getElementById('brancosMulta').value = RemessaMulta.BRANCOS.value;
    setFieldsReadOnly('ComplementoDetalheMultaContent');
  }
  

  function setRemessaRateioCreditoButton(){
    document.getElementById('codigoInscricaoRateio').value = RemessaRateioCredito.CODIGO_INSCRICAO.value;
    document.getElementById('numeroInscricaoRateio').value = RemessaRateioCredito.NUMERO_INSCRICAO.value;
    document.getElementById('agenciaBeneficiarioRateio').value = RemessaRateioCredito.AGENCIA.value;
    document.getElementById('zerosRateio').value = RemessaRateioCredito.ZEROS.value;
    document.getElementById('contaBeneficiarioRateio').value = RemessaRateioCredito.CONTA.value;
    document.getElementById('dacBeneficiarioRateio').value = RemessaRateioCredito.DAC.value;
    document.getElementById('numeroCarteiraRateio').value = RemessaRateioCredito.NUMERO_CARTEIRA.value;
    document.getElementById('nossoNumeroRateio').value = RemessaRateioCredito.NOSSO_NUMERO.value;
    document.getElementById('dacNossoNumeroRateio').value = RemessaRateioCredito.DAC_NOSSO_NUMERO.value;
    document.getElementById('sequenciaRateio').value = RemessaRateioCredito.SEQUENCIA_RATEIO.value;
    document.getElementById('agenciaRateio1').value = RemessaRateioCredito.AGENCIA_RATEIO.value;
    document.getElementById('contaRateio1').value = RemessaRateioCredito.CONTA_RATEIO.value;
    document.getElementById('dacRateio1').value = RemessaRateioCredito.DAC_RATEIO.value;
    document.getElementById('valorRateio1').value = RemessaRateioCredito.VALOR_RATEIO.value;
    document.getElementById('tipoValorRateio').value = RemessaRateioCredito.TIPO_VALOR.value;
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
    const complemento = gerarComplementoArquivo();
    document.getElementById("complementoArquivoPadrao").value = complemento;
  }


  function setHeaderArquivoPadraoButton(){
    var header = mountRemessaHeaderArquivoDefaultValues();
    header = header.substring(0, header.length - 6);
    document.getElementById("headerArquivoPadrao").value = header;
  }
  
  function salvarItemById(campo) {
    let elemento = document.getElementById(campo);
    if (elemento) {
      localStorage.setItem(campo, elemento.value);
    }
  }

  function setDacButton(agenciaElement,contaElement,targetElement){
    const agencia = document.getElementById(agenciaElement).value.padStart(4,"0");
    const conta = document.getElementById(contaElement).value.padStart(7,"0");
    const dac = calcularDacCNAB400(agencia + conta);
    document.getElementById(targetElement).value = dac;
  }

  function salvarConfiguracoes() {
    var agencia = document.getElementById("agenciaPadrao").value;
    var conta = document.getElementById("contaPadrao").value;
    var dac = document.getElementById("dacPadrao").value;
    var headerArquivoPadrao = document.getElementById("headerArquivoPadrao").value;
    var nossoNumero = document.getElementById("nossoNumeroPadrao").value;
    var codigoOcorrenciaPadrao = document.getElementById("codigoOcorrenciaPadrao").value;
    var complementoArquivoPadrao = document.getElementById("complementoArquivoPadrao").value;
    var isComplementoArquivoPadrao = document.getElementById("isComplementoArquivoPadrao").checked;
    var complemento = document.getElementById("complementoLinhaPadrao").value;
    var isComplemento = document.getElementById("isComplementoPadrao").checked;
    var isSobreporLinha = document.getElementById("isSobreporLinha").checked;
    var fillerPadrao = document.getElementById("fillerPadrao").value;

    localStorage.setItem("agenciaPadrao", agencia);

    localStorage.setItem("contaPadrao", conta);

    localStorage.setItem("dacPadrao", dac);

    localStorage.setItem("headerArquivoPadrao", headerArquivoPadrao);

    localStorage.setItem("complementoArquivoPadrao", complementoArquivoPadrao);

    localStorage.setItem("isComplementoArquivoPadrao", isComplementoArquivoPadrao);

    localStorage.setItem("complementoLinhaPadrao", complemento);

    localStorage.setItem("isComplementoPadrao", isComplemento);

    localStorage.setItem("nossoNumeroPadrao", nossoNumero);

    localStorage.setItem("codigoOcorrenciaPadrao", codigoOcorrenciaPadrao);

    localStorage.setItem("isSobreporLinha", isSobreporLinha);

    localStorage.setItem("fillerPadrao", fillerPadrao);

    var message = "Configurações Salvas!";
    alert(message);
  }
  
  function apagarConfiguracoes(){
    localStorage.clear();
    document.getElementById("agenciaPadrao").value = "";
    document.getElementById("contaPadrao").value = "";
    document.getElementById("dacPadrao").value = "";
    document.getElementById("headerArquivoPadrao").value = "";
    document.getElementById("nossoNumeroPadrao").value = "";
    document.getElementById("complementoArquivoPadrao").value = "";
    document.getElementById("isComplementoArquivoPadrao").checked = false;
    document.getElementById("complementoLinhaPadrao").value = "";
    document.getElementById("isComplementoPadrao").checked = false;
    document.getElementById("isSobreporLinha").checked = false;
    document.getElementById("codigoOcorrenciaPadrao").value = "";
    document.getElementById("fillerPadrao").value = "padrao";
    alert("Configurações Deletadas")
  }


  function alterarModoInstrucao(){
    setModoInstrucao();
  }

  function alterarModoRemessaCompleta(){
    setModoRemessaCompleta();
  }