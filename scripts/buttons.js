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

  function setValorRemessaDetalhePadraoButton(){
    document.getElementById("tipoDeRegistro").value = "1";
    document.getElementById("codigoDeInscricao").value = "01";
    document.getElementById("numeroDeInscricao").value = "00012044551802";
    document.getElementById("agencia").value = "1500";
    document.getElementById("zeros1").value = "00";
    document.getElementById("conta").value = "05206";
    document.getElementById("dac").value = "2";
    document.getElementById("brancos1").value = "    ";
    document.getElementById("instrucaoAlegacao").value = "0000";
    document.getElementById("usoEmpresa").value = "0000000000000000000000000";
    document.getElementById("nossoNumero").value = gerarNossoNumeroAleatorio();
    document.getElementById("moedaVariavel").value = "0000000000000";
    document.getElementById("numeroCarteira").value = "109";
    document.getElementById("usoBanco").value = "                     ";
    document.getElementById("carteira").value = "I";
    document.getElementById("codigoOcorrencia").value = "01";
    document.getElementById("numeroDocumento").value = "          ";
    document.getElementById("vencimento").value = gerarDataVencimento();
    document.getElementById("valorTitulo").value = "0000000009900";
    document.getElementById("codigoBanco").value = "341";
    document.getElementById("agenciaCobradora").value = "00000";
    document.getElementById("especie").value = "01";
    document.getElementById("aceite").value = "A";
    document.getElementById("dataEmissao").value = gerarDataEmissao();
    document.getElementById("instrucao1").value = "00";
    document.getElementById("instrucao2").value = "00";
    document.getElementById("valorJuros").value  = "0000000000000";
    document.getElementById("dataDesconto").value = "000000";
    document.getElementById("valorDesconto").value  = "0000000000000";
    document.getElementById("valorIOF").value = "0000000000000";
    document.getElementById("abatimento").value  = "0000000000000";
    document.getElementById("codigoInscricaoPagador").value = "01";
    document.getElementById("numeroInscricaoPagador").value = "00024498951670";
    document.getElementById("nome").value = "Calebe Murilo Novaes".padEnd(30," ");
    document.getElementById("brancos2").value = "          ";
    document.getElementById("logradouro").value = "Rua Alfaiate Reis".padEnd(40," ");
    document.getElementById("bairro").value = "Colonial".padEnd(12," ");
    document.getElementById("cep").value = "93212050";
    document.getElementById("cidade").value = "Sapucaia do Sul".padEnd(15," ");
    document.getElementById("estado").value = "RS";
    document.getElementById("sacadorAvalista").value = "                              ";
    document.getElementById("brancos3").value = "    ";
    document.getElementById("dataMora").value = "000000";
    document.getElementById("prazo").value = "00";
    document.getElementById("brancos4").value = " ";
    document.getElementById("numeroSequencial").value = "000002";
    setFieldsReadOnly();
  }

  function setNossoNumeroButton(tipo){
    const nossoNumero = tipo == "data" ? gerarNossoNumeroData() : gerarNossoNumeroAleatorio();
    document.getElementById("nossoNumero").value = nossoNumero;
  }

  function setNomeArquivoButton(){
    const nomeArquivo = gerarNomeArquivo();
    document.getElementById("nomeArquivo").value = nomeArquivo;
  }

  function setComplementoButton(){
    const complemento = gerarComplemento();
    document.getElementById("complementoLinha").value = complemento;
  }
  

