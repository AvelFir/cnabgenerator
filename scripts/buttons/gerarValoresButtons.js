function setValorRemessaDetalhePadraoButton() {
    document.getElementById("codigoDeInscricao").value = RemessaPadraoConstants.CODIGO_INSCRICAO.value;
    document.getElementById("numeroDeInscricao").value = RemessaPadraoConstants.NUMERO_INSCRICAO.value;
    document.getElementById("agencia").value = RemessaPadraoConstants.AGENCIA.value;
    document.getElementById("zeros1").value = RemessaPadraoConstants.ZEROS.value;
    document.getElementById("conta").value = RemessaPadraoConstants.CONTA.value;
    document.getElementById("dac").value = RemessaPadraoConstants.DAC.value;
    document.getElementById("brancos1").value = "";
    document.getElementById("instrucaoAlegacao").value = "";
    document.getElementById("usoEmpresa").value = "";
    document.getElementById("nossoNumero").value = RemessaPadraoConstants.NOSSO_NUMERO.value;
    document.getElementById("moedaVariavel").value = "";
    document.getElementById("numeroCarteira").value = RemessaPadraoConstants.NUMERO_CARTEIRA.value;
    document.getElementById("usoBanco").value = "";
    document.getElementById("carteira").value = RemessaPadraoConstants.CARTEIRA.value;
    document.getElementById("codigoOcorrencia").value = RemessaPadraoConstants.CODIGO_OCORRENCIA.value;
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("vencimento").value = RemessaPadraoConstants.VENCIMENTO.value;
    document.getElementById("valorTitulo").value = RemessaPadraoConstants.VALOR_TITULO.value;
    document.getElementById("codigoBanco").value = RemessaPadraoConstants.CODIGO_BANCO.value;
    document.getElementById("agenciaCobradora").value = "";
    document.getElementById("especie").value = RemessaPadraoConstants.ESPECIE.value;
    document.getElementById("aceite").value = RemessaPadraoConstants.ACEITE.value;
    document.getElementById("dataEmissao").value = RemessaPadraoConstants.DATA_EMISSAO.value;
    document.getElementById("instrucao1").value = "";
    document.getElementById("instrucao2").value = "";
    document.getElementById("valorJuros").value = "";
    document.getElementById("dataDesconto").value = "";
    document.getElementById("valorDesconto").value = "";
    document.getElementById("valorIOF").value = "";
    document.getElementById("abatimento").value = "";
    document.getElementById("codigoInscricaoPagador").value = RemessaPadraoConstants.CODIGO_INSCRICAO_PAGADOR.value;
    document.getElementById("numeroInscricaoPagador").value = RemessaPadraoConstants.NUMERO_INSCRICAO_PAGADOR.value;
    document.getElementById("nome").value = RemessaPadraoConstants.NOME.value;
    document.getElementById("brancos2").value = RemessaPadraoConstants.BRANCOS2.value;;
    document.getElementById("logradouro").value = RemessaPadraoConstants.LOGRADOURO.value;
    document.getElementById("bairro").value = RemessaPadraoConstants.BAIRRO.value;
    document.getElementById("cep").value = RemessaPadraoConstants.CEP.value;
    document.getElementById("cidade").value = RemessaPadraoConstants.CIDADE.value;
    document.getElementById("estado").value = RemessaPadraoConstants.ESTADO.value;
    document.getElementById("sacadorAvalista").value = "";
    document.getElementById("brancos3").value = "";
    document.getElementById("dataMora").value = "";
    document.getElementById("prazo").value = "";
    document.getElementById("brancos4").value = "";
    setFieldsReadOnly('RemessaPadraoContent');
  }
  
  function setValorInstrucaoButton() {
    document.getElementById("agencia").value = RemessaPadraoConstants.AGENCIA.value;
    document.getElementById("conta").value = RemessaPadraoConstants.CONTA.value;
    document.getElementById("dac").value = RemessaPadraoConstants.DAC.value;
    document.getElementById("usoEmpresa").value = "";
    document.getElementById("nossoNumero").value = RemessaPadraoConstants.NOSSO_NUMERO.value;
    document.getElementById("numeroCarteira").value = RemessaPadraoConstants.NUMERO_CARTEIRA.value;
    document.getElementById("codigoOcorrencia").value = RemessaPadraoConstants.CODIGO_OCORRENCIA.value;
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("abatimento").value = "";
    document.getElementById("prazo").value = "";
  
    document.getElementById("codigoDeInscricao").value = "";
    document.getElementById("numeroDeInscricao").value = "";
    document.getElementById("zeros1").value = "";
    document.getElementById("brancos1").value = "";
    document.getElementById("instrucaoAlegacao").value = "";
    document.getElementById("moedaVariavel").value = "";
    document.getElementById("usoBanco").value = "";
    document.getElementById("carteira").value = "";
    document.getElementById("vencimento").value = "";
    document.getElementById("valorTitulo").value = "";
    document.getElementById("codigoBanco").value = "";
    document.getElementById("agenciaCobradora").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("aceite").value = "";
    document.getElementById("dataEmissao").value = "";
    document.getElementById("instrucao1").value = "";
    document.getElementById("instrucao2").value = "";
    document.getElementById("valorJuros").value = "";
    document.getElementById("dataDesconto").value = "";
    document.getElementById("valorDesconto").value = "";
    document.getElementById("valorIOF").value = "";
    document.getElementById("codigoInscricaoPagador").value = "";
    document.getElementById("numeroInscricaoPagador").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("brancos2").value = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("sacadorAvalista").value = "";
    document.getElementById("brancos3").value = "";
    document.getElementById("dataMora").value = "";
    document.getElementById("brancos4").value = "";
  
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
    document.getElementById('brancosSacador').value = "";
    setFieldsReadOnly('DadosSacadorAvalistaContent');
  }
  
  function setDetalheMultaButton() {
    document.getElementById('codigoMulta').value = RemessaMulta.CODIGO_MULTA.value;
    document.getElementById('dataMulta').value = RemessaMulta.DATA_MULTA.value;
    document.getElementById('valorMulta').value = RemessaMulta.VALOR_MULTA.value;
    document.getElementById('brancosMulta').value = "";
    setFieldsReadOnly('ComplementoDetalheMultaContent');
  }
  
  
  function setRemessaRateioCreditoButton() {
    document.getElementById('codigoInscricaoRateio').value = RemessaRateioCredito.CODIGO_INSCRICAO.value;
    document.getElementById('numeroInscricaoRateio').value = RemessaRateioCredito.NUMERO_INSCRICAO.value;
    document.getElementById('agenciaBeneficiarioRateio').value = RemessaRateioCredito.AGENCIA.value;
    document.getElementById('zerosRateio').value = "";
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
    setFieldsReadOnly('RateioCreditoContent');
  
  }
  
  function setRegistroMensagemFrenteButton() {
    document.getElementById("flash").value = RegistroMensagemFrente.FLASH.value;
    document.getElementById("numeroLinha1").value = RegistroMensagemFrente.NUMERO_LINHA_1.value;
    document.getElementById("textoLinha1").value = RegistroMensagemFrente.TEXTO_LINHA_1.value;
    document.getElementById("numeroLinha2").value = "";
    document.getElementById("textoLinha2").value = "";
    document.getElementById("numeroLinha3").value = "";
    document.getElementById("textoLinha3").value = "";
    document.getElementById("destinoBoleto").value = RegistroMensagemFrente.DESTINO_BOLETO.value;
  
    setFieldsReadOnly('RegistroMensagemFrenteContent');
  }
  
  function setRegistroMensagemVersoButton() {
    document.getElementById("numeroLinhaVerso1").value = RegistroMensagemVerso.NUMERO_LINHA_1.value;
    document.getElementById("textoLinhaVerso1").value = RegistroMensagemVerso.TEXTO_LINHA_1.value;
    document.getElementById("brancosVerso1").value = "";
    document.getElementById("numeroLinhaVerso2").value = "";
    document.getElementById("textoLinhaVerso2").value = "";
    document.getElementById("brancosVerso2").value = "";
  
    setFieldsReadOnly('RegistroMensagemVersoContent');
  }
  
  function setNossoNumeroButton(tipo) {
    const nossoNumero = tipo == "data" ? gerarNossoNumeroData() : gerarNossoNumeroAleatorio();
    document.getElementById("nossoNumero").value = nossoNumero;
  }
  
  function setNossoNumerPadraoButton(tipo) {
    const nossoNumero = tipo == "data" ? gerarNossoNumeroData() : gerarNossoNumeroAleatorio();
    document.getElementById("nossoNumeroPadrao").value = nossoNumero;
  }
  
  function setNomeArquivoButton() {
    const nomeArquivo = gerarNomeArquivo();
    document.getElementById("nomeArquivo").value = nomeArquivo;
  }
  
  function setComplementoButton() {
    const complemento = gerarComplemento();
    document.getElementById("complementoLinhaPadrao").value = complemento;
  }
  
  function setComplementoArquivoPadraoButton() {
    const complemento = gerarComplementoArquivo();
    document.getElementById("complementoArquivoPadrao").value = complemento;
  }
  
  
  function setHeaderArquivoPadraoButton() {
    var header = mountRemessaHeaderArquivoDefaultValues();
    header = header.substring(0, header.length - 6);
    document.getElementById("headerArquivoPadrao").value = header;
  }
  
  function setDacButton(agenciaElement, contaElement, targetElement) {
    const agencia = document.getElementById(agenciaElement).value.padStart(4, "0");
    const conta = document.getElementById(contaElement).value.padStart(7, "0");
    const dac = calcularDacCNAB400(agencia + conta);
    document.getElementById(targetElement).value = dac;
  }