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
    const complemento = "1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677787980818283848586878889909192939495969798991001011021031041051061071081091101111121131141151161171181191201211221231241251261271281291301311321331341351361371381391401411421431441451461471481491501511521123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129130131132133134135136137138139140141142143144145146147148149150151152100"
    document.getElementById("complementoLinha").value = complemento;
  }
  

