//Arquivo Responsavel por Montar as Linhas, ou seja pegar o valor dos campos e retornar

function mountCnab400(){
  var header = mountRemessaHeaderArquivoDefaultValues();
  var remessaPadrao = mountLinhaRemessaDetalhePadrao();
  var trailer = mountLinhaTrailerArquivoDefaultValues();

  var isComplemento = localStorage.getItem("isComplementoPadrao") === "true";

  if(isComplemento){
    var complemento = localStorage.getItem("complementoLinhaPadrao");
    header += complemento;
    remessaPadrao += complemento;
  }

  var isHeaderPadrao = localStorage.getItem("isHeaderPadrao") === "true";

  var documento;

  if(isHeaderPadrao){
    var headerPadrao = localStorage.getItem("headerPadrao");
    var documento = [headerPadrao, header, remessaPadrao, trailer].join("\n");
  }else{
    documento = [header, remessaPadrao, trailer].join("\n");
  }

  return documento;
}

function mountArquivo() {
  var header = getFirstValueOr(localStorage.getItem("headerArquivoPadrao"), mountRemessaHeaderArquivoDefaultValues().substring(0, 400 - 6));
  header += getContadorSequencialGlobal();
  addContadorSequencialGlobal();

  var isComplemento = localStorage.getItem("isComplementoPadrao") === "true";
  if(header && isComplemento){
    var complemento = localStorage.getItem("complementoLinhaPadrao");
    header += complemento;
  }
  
  let linhas = document.querySelectorAll(".linha");
  let listaConcatenada = [];

  for (let i = 0; i < linhas.length; i++) {
    var sequencial = getContadorSequencialGlobal();
    let colunaCorpo = linhas[i].querySelector(".corpoLinha");
    let valorConcatenado = colunaCorpo.value + sequencial;
    if(isLinhaComplemento(valorConcatenado[0]) && isComplemento){
      var complemento = localStorage.getItem("complementoLinhaPadrao");
      valorConcatenado += complemento;
    }
    listaConcatenada.push(valorConcatenado);
    addContadorSequencialGlobal();
  }

  var trailer = mountLinhaTrailerArquivoDefaultValues();
  trailer = trailer.substring(0, trailer.length - 6);
  trailer += getContadorSequencialGlobal();
  addContadorSequencialGlobal();


  var isComplementoArquivoPadrao = localStorage.getItem("isComplementoArquivoPadrao") === "true";

  var documento;

  if(isComplementoArquivoPadrao){
    var complementoArquivoPadrao = localStorage.getItem("complementoArquivoPadrao");
    documento = [complementoArquivoPadrao,header]
    for (let i = 0; i < listaConcatenada.length; i++) {
      documento.push(listaConcatenada[i]);
    }
    documento.push(trailer);
  }else{
    documento = [header]
    for (let i = 0; i < listaConcatenada.length; i++) {
      documento.push(listaConcatenada[i]);
    }
    documento.push(trailer);
  }

  return documento.join("\n");
}

function mountLinhaRemessaDetalhePadrao() {
  var tipoDeRegistro = getValueOrFiller(document.getElementById("tipoDeRegistro"), RemessaPadraoConstants.TIPO_REGISTRO);
  var codigoDeInscricao = getValueOrFiller(document.getElementById("codigoDeInscricao"), RemessaPadraoConstants.CODIGO_INSCRICAO);
  var numeroDeInscricao = getValueOrFiller(document.getElementById("numeroDeInscricao"), RemessaPadraoConstants.NUMERO_INSCRICAO);
  var agencia = getValueOrFiller(document.getElementById("agencia"), RemessaPadraoConstants.AGENCIA);
  var zeros1 = getValueOrFiller(document.getElementById("zeros1"), RemessaPadraoConstants.ZEROS);
  var conta = getValueOrFiller(document.getElementById("conta"), RemessaPadraoConstants.CONTA);
  var dac = getValueOrFiller(document.getElementById("dac"), RemessaPadraoConstants.DAC);
  var brancos1 = getValueOrFiller(document.getElementById("brancos1"), RemessaPadraoConstants.BRANCOS1);
  var instrucaoAlegacao = getValueOrFiller(document.getElementById("instrucaoAlegacao"), RemessaPadraoConstants.INSTRUCAO_ALEGACAO);
  var usoEmpresa = getValueOrFiller(document.getElementById("usoEmpresa"), RemessaPadraoConstants.USO_EMPRESA);
  var nossoNumero = getValueOrFiller(document.getElementById("nossoNumero"), RemessaPadraoConstants.NOSSO_NUMERO);
  var moedaVariavel = getValueOrFiller(document.getElementById("moedaVariavel"), RemessaPadraoConstants.MOEDA_VARIAVEL);
  var numeroCarteira = getValueOrFiller(document.getElementById("numeroCarteira"), RemessaPadraoConstants.NUMERO_CARTEIRA);
  var usoBanco = getValueOrFiller(document.getElementById("usoBanco"), RemessaPadraoConstants.USO_BANCO);
  var carteira = getValueOrFiller(document.getElementById("carteira"), RemessaPadraoConstants.CARTEIRA);
  var codigoOcorrencia = getValueOrFiller(document.getElementById("codigoOcorrencia"), RemessaPadraoConstants.CODIGO_OCORRENCIA);
  var numeroDocumento = getValueOrFiller(document.getElementById("numeroDocumento"), RemessaPadraoConstants.NUMERO_DOCUMENTO);
  var vencimento = getValueOrFiller(document.getElementById("vencimento"), RemessaPadraoConstants.VENCIMENTO);
  var valorTitulo = getValueOrFiller(document.getElementById("valorTitulo"), RemessaPadraoConstants.VALOR_TITULO);
  var codigoBanco = getValueOrFiller(document.getElementById("codigoBanco"), RemessaPadraoConstants.CODIGO_BANCO);
  var agenciaCobradora = getValueOrFiller(document.getElementById("agenciaCobradora"), RemessaPadraoConstants.AGENCIA_COBRADORA);
  var especie = getValueOrFiller(document.getElementById("especie"), RemessaPadraoConstants.ESPECIE);
  var aceite = getValueOrFiller(document.getElementById("aceite"), RemessaPadraoConstants.ACEITE);
  var dataEmissao = getValueOrFiller(document.getElementById("dataEmissao"), RemessaPadraoConstants.DATA_EMISSAO);
  var instrucao1 = getValueOrFiller(document.getElementById("instrucao1"), RemessaPadraoConstants.INSTRUCAO1);
  var instrucao2 = getValueOrFiller(document.getElementById("instrucao2"), RemessaPadraoConstants.INSTRUCAO2);
  var valorJuros = getValueOrFiller(document.getElementById("valorJuros"), RemessaPadraoConstants.VALOR_JUROS);
  var dataDesconto = getValueOrFiller(document.getElementById("dataDesconto"), RemessaPadraoConstants.DATA_DESCONTO);
  var valorDesconto = getValueOrFiller(document.getElementById("valorDesconto"), RemessaPadraoConstants.VALOR_DESCONTO);
  var valorIof = getValueOrFiller(document.getElementById("valorIOF"), RemessaPadraoConstants.VALOR_IOF);
  var abatimento = getValueOrFiller(document.getElementById("abatimento"), RemessaPadraoConstants.ABATIMENTO);
  var codigoInscricaoPagador = getValueOrFiller(document.getElementById("codigoInscricaoPagador"), RemessaPadraoConstants.CODIGO_INSCRICAO_PAGADOR);
  var numeroInscricaoPagador = getValueOrFiller(document.getElementById("numeroInscricaoPagador"), RemessaPadraoConstants.NUMERO_INSCRICAO_PAGADOR);
  var nome = getValueOrFiller(document.getElementById("nome"), RemessaPadraoConstants.NOME);
  var brancos2 = getValueOrFiller(document.getElementById("brancos2"), RemessaPadraoConstants.BRANCOS2);
  var logradouro = getValueOrFiller(document.getElementById("logradouro"), RemessaPadraoConstants.LOGRADOURO);
  var bairro = getValueOrFiller(document.getElementById("bairro"), RemessaPadraoConstants.BAIRRO);
  var cep = getValueOrFiller(document.getElementById("cep"), RemessaPadraoConstants.CEP);
  var cidade = getValueOrFiller(document.getElementById("cidade"), RemessaPadraoConstants.CIDADE);
  var estado = getValueOrFiller(document.getElementById("estado"), RemessaPadraoConstants.ESTADO);
  var sacadorAvalista = getValueOrFiller(document.getElementById("sacadorAvalista"), RemessaPadraoConstants.SACADOR_AVALISTA);
  var brancos3 = getValueOrFiller(document.getElementById("brancos3"), RemessaPadraoConstants.BRANCOS3);
  var dataMora = getValueOrFiller(document.getElementById("dataMora"), RemessaPadraoConstants.DATA_MORA);
  var prazo = getValueOrFiller(document.getElementById("prazo"), RemessaPadraoConstants.PRAZO);
  var brancos4 = getValueOrFiller(document.getElementById("brancos4"), RemessaPadraoConstants.BRANCOS4);
  var numeroSequencial = getValueOrFiller(document.getElementById("numeroSequencial"), RemessaPadraoConstants.NUMERO_SEQUENCIAL);
  

  var remessaPadrao = tipoDeRegistro + codigoDeInscricao + numeroDeInscricao + agencia + zeros1 + conta + dac + brancos1 +
    instrucaoAlegacao + usoEmpresa + nossoNumero + moedaVariavel + numeroCarteira + usoBanco + carteira +
    codigoOcorrencia + numeroDocumento + vencimento + valorTitulo + codigoBanco + agenciaCobradora + especie + aceite +
    dataEmissao + instrucao1 + instrucao2 + valorJuros + dataDesconto + valorDesconto + valorIof + abatimento +
    codigoInscricaoPagador + numeroInscricaoPagador + nome + brancos2 + logradouro + bairro + cep + cidade + estado +
    sacadorAvalista + brancos3 + dataMora + prazo + brancos4 + numeroSequencial;
  return remessaPadrao;
}


  function mountHeaderGIA(){
    var codigo = "@@H@@";
    // var operacao = "1";
    // var literalRemessa = "REMESSA";
    // var codigoServico = "01";
    // var literalServico = "COBRANCA".padEnd(15," ");
    // var agencia = "1500";
    // var zeros1 = "00";
    // var conta =  "05206";
    // var dac = "2";
    var brancos1 = "".padStart(10," ")
    // var nomeEmpresa = "Bernardo e Henrique Assessoria".padEnd(30," ")
    // var codigoBanco = "341";
    // var nomeBanco = "BANCO ITAU SA".padEnd(15," ");
    // var dataGeracao = gerarDataEmissao();
    var brancos2 = "".padStart(170," ")
    // var numeroSequencial = "000001"

    // var dados = tipoDeRegistro + operacao + literalRemessa + codigoServico + literalServico + agencia + zeros1 + conta + dac + brancos1 + nomeEmpresa + codigoBanco + nomeBanco + dataGeracao + brancos2 + numeroSequencial;
    var dados = codigo + brancos1 + "EFETIV00601203316492007735005735SGCCPJBANKP  7PSNPJBANKP" + brancos2
    return dados;
  }

  function mountRemessaHeaderArquivoDefaultValues(){
    var tipoDeRegistro = RemessaHeaderArquivo.TIPO_REGISTRO.value;
    var operacao =  RemessaHeaderArquivo.OPERACAO.value;
    var literalRemessa =  RemessaHeaderArquivo.LITERAL_REMESSA.value;
    var codigoServico =  RemessaHeaderArquivo.CODIGO_SERVICO.value;
    var literalServico =  RemessaHeaderArquivo.LITERAL_SERVICO.value;
    var agencia = getSavedValueOrFiller("agencia",RemessaHeaderArquivo.AGENCIA);
    var zeros1 = RemessaHeaderArquivo.ZEROS.value;
    var conta =  getSavedValueOrFiller("conta",RemessaHeaderArquivo.CONTA);
    var dac = getSavedValueOrFiller("dac",RemessaHeaderArquivo.DAC);
    var brancos1 =  RemessaHeaderArquivo.BRANCOS1.value;
    var nomeEmpresa = RemessaHeaderArquivo.NOME_EMPRESA.value;
    var codigoBanco = RemessaHeaderArquivo.CODIGO_BANCO.value;
    var nomeBanco = RemessaHeaderArquivo.NOME_BANCO.value;
    var dataGeracao = RemessaHeaderArquivo.DATA_GERACAO.value;
    var brancos2 = RemessaHeaderArquivo.BRANCOS2.value;
    var numeroSequencial = RemessaHeaderArquivo.NUMERO_SEQUENCIAL.value;

    var dados = tipoDeRegistro + operacao + literalRemessa + codigoServico + literalServico + agencia + zeros1 + conta + dac + brancos1 + nomeEmpresa + codigoBanco + nomeBanco + dataGeracao + brancos2 + numeroSequencial;
    return dados;
  }

  function mountRemessaMultaDefaultValues() {
    const tipoRegistro = getValueOrFiller(document.getElementById('tipoRegistro'), RemessaMulta.TIPO_REGISTRO);
    const codigoMulta = getValueOrFiller(document.getElementById('codigoMulta'), RemessaMulta.CODIGO_MULTA);
    const dataMulta = getValueOrFiller(document.getElementById('dataMulta'), RemessaMulta.DATA_MULTA);
    const valorMulta = getValueOrFiller(document.getElementById('valorMulta'), RemessaMulta.VALOR_MULTA);
    const brancosMulta = getValueOrFiller(document.getElementById('brancosMulta'), RemessaMulta.BRANCOS);
    const numeroSequencial = getValueOrFiller(document.getElementById('numeroSequencialMulta'), RemessaMulta.NUMERO_SEQUENCIAL);
  
    return tipoRegistro + codigoMulta + dataMulta + valorMulta + brancosMulta + numeroSequencial;
  }

  function mountSacadorAvalista() {
    const tipoRegistroSacador = getValueOrFiller(document.getElementById("tipoRegistroSacador"), RemessaDadosSacadorAvalista.TIPO_REGISTRO);
    const codigoInscricaoSacador = getValueOrFiller(document.getElementById("codigoInscricaoSacador"), RemessaDadosSacadorAvalista.CODIGO_INSCRICAO);
    const numeroInscricaoSacador = getValueOrFiller(document.getElementById("numeroInscricaoSacador"), RemessaDadosSacadorAvalista.NUMERO_INSCRICAO);
    const email = getValueOrFiller(document.getElementById("email"), RemessaDadosSacadorAvalista.EMAIL);
    const logradouroSacador = getValueOrFiller(document.getElementById("logradouroSacador"), RemessaDadosSacadorAvalista.LOGRADOURO);
    const bairroSacador = getValueOrFiller(document.getElementById("bairroSacador"), RemessaDadosSacadorAvalista.BAIRRO);
    const cepSacador = getValueOrFiller(document.getElementById("cepSacador"), RemessaDadosSacadorAvalista.CEP);
    const cidadeSacador = getValueOrFiller(document.getElementById("cidadeSacador"), RemessaDadosSacadorAvalista.CIDADE);
    const estadoSacador = getValueOrFiller(document.getElementById("estadoSacador"), RemessaDadosSacadorAvalista.ESTADO);
    const brancosSacador = getValueOrFiller(document.getElementById("brancos2"), RemessaDadosSacadorAvalista.BRANCOS);
    const numeroSequencialSacador = getValueOrFiller(document.getElementById("numeroSequencialSacador"), RemessaDadosSacadorAvalista.NUMERO_SEQUENCIAL);
  
    return tipoRegistroSacador + email + codigoInscricaoSacador  +  numeroInscricaoSacador + logradouroSacador + bairroSacador + cepSacador + cidadeSacador + estadoSacador + brancosSacador + numeroSequencialSacador;
  }

  function mountRemessaRateioCredito() {
    const tipoRegistroRateio = getValueOrFiller(document.getElementById('tipoRegistroRateio'), RemessaRateioCredito.TIPO_REGISTRO);
    const codigoInscricaoRateio = getValueOrFiller(document.getElementById('codigoInscricaoRateio'), RemessaRateioCredito.CODIGO_INSCRICAO);
    const numeroInscricaoRateio = getValueOrFiller(document.getElementById('numeroInscricaoRateio'), RemessaRateioCredito.NUMERO_INSCRICAO);
    const agenciaBeneficiarioRateio = getValueOrFiller(document.getElementById('agenciaBeneficiarioRateio'), RemessaRateioCredito.AGENCIA);
    const zerosRateio = getValueOrFiller(document.getElementById('zerosRateio'), RemessaRateioCredito.ZEROS);
    const contaBeneficiarioRateio = getValueOrFiller(document.getElementById('contaBeneficiarioRateio'), RemessaRateioCredito.CONTA);
    const dacBeneficiarioRateio = getValueOrFiller(document.getElementById('dacBeneficiarioRateio'), RemessaRateioCredito.DAC);
    const numeroCarteiraRateio = getValueOrFiller(document.getElementById('numeroCarteiraRateio'), RemessaRateioCredito.NUMERO_CARTEIRA);
    const nossoNumeroRateio = getValueOrFiller(document.getElementById('nossoNumeroRateio'), RemessaRateioCredito.NOSSO_NUMERO);
    const dacNossoNumeroRateio = getValueOrFiller(document.getElementById('dacNossoNumeroRateio'), RemessaRateioCredito.DAC_NOSSO_NUMERO);
    const sequenciaRateio = getValueOrFiller(document.getElementById('sequenciaRateio'), RemessaRateioCredito.SEQUENCIA_RATEIO);
    const agenciaRateio1 = getValueOrFiller(document.getElementById('agenciaRateio1'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio1 = getValueOrFiller(document.getElementById('contaRateio1'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio1 = getValueOrFiller(document.getElementById('dacRateio1'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio1 = getValueOrFiller(document.getElementById('valorRateio1'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio2 = getValueOrFiller(document.getElementById('agenciaRateio2'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio2 = getValueOrFiller(document.getElementById('contaRateio2'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio2 = getValueOrFiller(document.getElementById('dacRateio2'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio2 = getValueOrFiller(document.getElementById('valorRateio2'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio3 = getValueOrFiller(document.getElementById('agenciaRateio3'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio3 = getValueOrFiller(document.getElementById('contaRateio3'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio3 = getValueOrFiller(document.getElementById('dacRateio3'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio3 = getValueOrFiller(document.getElementById('valorRateio3'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio4 = getValueOrFiller(document.getElementById('agenciaRateio4'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio4 = getValueOrFiller(document.getElementById('contaRateio4'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio4 = getValueOrFiller(document.getElementById('dacRateio4'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio4 = getValueOrFiller(document.getElementById('valorRateio4'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio5 = getValueOrFiller(document.getElementById('agenciaRateio5'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio5 = getValueOrFiller(document.getElementById('contaRateio5'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio5 = getValueOrFiller(document.getElementById('dacRateio5'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio5 = getValueOrFiller(document.getElementById('valorRateio5'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio6 = getValueOrFiller(document.getElementById('agenciaRateio6'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio6 = getValueOrFiller(document.getElementById('contaRateio6'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio6 = getValueOrFiller(document.getElementById('dacRateio6'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio6 = getValueOrFiller(document.getElementById('valorRateio6'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio7 = getValueOrFiller(document.getElementById('agenciaRateio7'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio7 = getValueOrFiller(document.getElementById('contaRateio7'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio7 = getValueOrFiller(document.getElementById('dacRateio7'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio7 = getValueOrFiller(document.getElementById('valorRateio7'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio8 = getValueOrFiller(document.getElementById('agenciaRateio8'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio8 = getValueOrFiller(document.getElementById('contaRateio8'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio8 = getValueOrFiller(document.getElementById('dacRateio8'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio8 = getValueOrFiller(document.getElementById('valorRateio8'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio9 = getValueOrFiller(document.getElementById('agenciaRateio9'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio9 = getValueOrFiller(document.getElementById('contaRateio9'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio9 = getValueOrFiller(document.getElementById('dacRateio9'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio9 = getValueOrFiller(document.getElementById('valorRateio9'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio10 = getValueOrFiller(document.getElementById('agenciaRateio10'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio10 = getValueOrFiller(document.getElementById('contaRateio10'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio10 = getValueOrFiller(document.getElementById('dacRateio10'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio10 = getValueOrFiller(document.getElementById('valorRateio10'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio11 = getValueOrFiller(document.getElementById('agenciaRateio11'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio11 = getValueOrFiller(document.getElementById('contaRateio11'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio11 = getValueOrFiller(document.getElementById('dacRateio11'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio11 = getValueOrFiller(document.getElementById('valorRateio11'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio12 = getValueOrFiller(document.getElementById('agenciaRateio12'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio12 = getValueOrFiller(document.getElementById('contaRateio12'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio12 = getValueOrFiller(document.getElementById('dacRateio12'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio12 = getValueOrFiller(document.getElementById('valorRateio12'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio13 = getValueOrFiller(document.getElementById('agenciaRateio13'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio13 = getValueOrFiller(document.getElementById('contaRateio13'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio13 = getValueOrFiller(document.getElementById('dacRateio13'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio13 = getValueOrFiller(document.getElementById('valorRateio13'), RemessaRateioCredito.VALOR_RATEIO);
    const agenciaRateio14 = getValueOrFiller(document.getElementById('agenciaRateio14'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio14 = getValueOrFiller(document.getElementById('contaRateio14'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio14 = getValueOrFiller(document.getElementById('dacRateio14'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio14 = getValueOrFiller(document.getElementById('valorRateio14'), RemessaRateioCredito.VALOR_RATEIO);
    const tipoValorRateio = getValueOrFiller(document.getElementById('tipoValorRateio'), RemessaRateioCredito.TIPO_VALOR);
    const numeroSequencialRateio = getValueOrFiller(document.getElementById('numeroSequencialRateio'), RemessaRateioCredito.NUMERO_SEQUENCIAL);

    return tipoRegistroRateio + codigoInscricaoRateio + numeroInscricaoRateio + agenciaBeneficiarioRateio + zerosRateio + contaBeneficiarioRateio + dacBeneficiarioRateio + numeroCarteiraRateio + 
    nossoNumeroRateio + dacNossoNumeroRateio + sequenciaRateio + 
    agenciaRateio1 + contaRateio1 + dacRateio1 + valorRateio1 + 
    agenciaRateio2 + contaRateio2 + dacRateio2 + valorRateio2 + 
    agenciaRateio3 + contaRateio3 + dacRateio3 + valorRateio3 + 
    agenciaRateio4 + contaRateio4 + dacRateio4 + valorRateio4 + 
    agenciaRateio5 + contaRateio5 + dacRateio5 + valorRateio5 + 
    agenciaRateio6 + contaRateio6 + dacRateio6 + valorRateio6 + 
    agenciaRateio7 + contaRateio7 + dacRateio7 + valorRateio7 + 
    agenciaRateio8 + contaRateio8 + dacRateio8 + valorRateio8 + 
    agenciaRateio9 + contaRateio9 + dacRateio9 + valorRateio9 + 
    agenciaRateio10 + contaRateio10 + dacRateio10 + valorRateio10 + 
    agenciaRateio11 + contaRateio11 + dacRateio11 + valorRateio11 + 
    agenciaRateio12 + contaRateio12 + dacRateio12 + valorRateio12 + 
    agenciaRateio13 + contaRateio13 + dacRateio13 + valorRateio13 + 
    agenciaRateio14 + contaRateio14 + dacRateio14 + valorRateio14 + 
    tipoValorRateio + numeroSequencialRateio;
  }
  
  function mountLinhaTrailerArquivoDefaultValues(){
    var tipoDeRegistro = "9";
    var brancos = "".padStart(393," ")
    var numeroSequencial = "000003"

    var dados = tipoDeRegistro + brancos + numeroSequencial;
    return dados;
  }
  
  function mountNomeArquivo(){
    var input = document.getElementById("nomeArquivo").value
    var nomeArquivo = input == undefined || input == "" ? gerarNomeArquivo() : input;
    return nomeArquivo;
  }