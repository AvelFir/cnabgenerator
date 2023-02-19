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
    const brancos = getValueOrFiller(document.getElementById('brancos'), RemessaMulta.BRANCOS);
    const numeroSequencial = getValueOrFiller(document.getElementById('numeroSequencial'), RemessaMulta.NUMERO_SEQUENCIAL);
  
    return tipoRegistro + codigoMulta + dataMulta + valorMulta + brancos + numeroSequencial;
  }

  function mountSacadorAvalista() {
    const tipoRegistro = getValueOrFiller(document.getElementById("tipoRegistro"), RemessaDadosSacadorAvalista.TIPO_REGISTRO);
    const codigoInscricao = getValueOrFiller(document.getElementById("codigoInscricao"), RemessaDadosSacadorAvalista.CODIGO_INSCRICAO);
    const email = getValueOrFiller(document.getElementById("email"), RemessaDadosSacadorAvalista.EMAIL);
    const logradouro = getValueOrFiller(document.getElementById("logradouro"), RemessaDadosSacadorAvalista.LOGRADOURO);
    const bairro = getValueOrFiller(document.getElementById("bairro"), RemessaDadosSacadorAvalista.BAIRRO);
    const cep = getValueOrFiller(document.getElementById("cep"), RemessaDadosSacadorAvalista.CEP);
    const cidade = getValueOrFiller(document.getElementById("cidade"), RemessaDadosSacadorAvalista.CIDADE);
    const estado = getValueOrFiller(document.getElementById("estado"), RemessaDadosSacadorAvalista.ESTADO);
    const brancos2 = getValueOrFiller(document.getElementById("brancos2"), RemessaDadosSacadorAvalista.BRANCOS2);
    const numeroSequencial = getValueOrFiller(document.getElementById("numeroSequencial"), RemessaDadosSacadorAvalista.NUMERO_SEQUENCIAL);
  
    return tipoRegistro + codigoInscricao + email + logradouro + bairro + cep + cidade + estado + brancos2 + numeroSequencial;
  }
  
  function mountRemessaRateioCredito() {
    const tipoRegistro = getValueOrFiller(document.getElementById('tipoRegistro'), RemessaRateioCredito.TIPO_REGISTRO);
    const codigoInscricao = getValueOrFiller(document.getElementById('codigoInscricao'), RemessaRateioCredito.CODIGO_INSCRICAO);
    const numeroInscricao = getValueOrFiller(document.getElementById('numeroInscricao'), RemessaRateioCredito.NUMERO_INSCRICAO);
    const agencia = getValueOrFiller(document.getElementById('agencia'), RemessaRateioCredito.AGENCIA);
    const zeros = getValueOrFiller(document.getElementById('zeros'), RemessaRateioCredito.ZEROS);
    const conta = getValueOrFiller(document.getElementById('conta'), RemessaRateioCredito.CONTA);
    const dac = getValueOrFiller(document.getElementById('dac'), RemessaRateioCredito.DAC);
    const numeroCarteira = getValueOrFiller(document.getElementById('numeroCarteira'), RemessaRateioCredito.NUMERO_CARTEIRA);
    const nossoNumero = getValueOrFiller(document.getElementById('nossoNumero'), RemessaRateioCredito.NOSSO_NUMERO);
    const dacNossoNumero = getValueOrFiller(document.getElementById('dacNossoNumero'), RemessaRateioCredito.DAC_NOSSO_NUMERO);
    const sequenciaRateio = getValueOrFiller(document.getElementById('sequenciaRateio'), RemessaRateioCredito.SEQUENCIA_RATEIO);
    const agenciaRateio = getValueOrFiller(document.getElementById('agenciaRateio'), RemessaRateioCredito.AGENCIA_RATEIO);
    const contaRateio = getValueOrFiller(document.getElementById('contaRateio'), RemessaRateioCredito.CONTA_RATEIO);
    const dacRateio = getValueOrFiller(document.getElementById('dacRateio'), RemessaRateioCredito.DAC_RATEIO);
    const valorRateio = getValueOrFiller(document.getElementById('valorRateio'), RemessaRateioCredito.VALOR_RATEIO);
    const tipoValor = getValueOrFiller(document.getElementById('tipoValor'), RemessaRateioCredito.TIPO_VALOR);
    const numeroSequencial = getValueOrFiller(document.getElementById('numeroSequencial'), RemessaRateioCredito.NUMERO_SEQUENCIAL);

    return tipoRegistro + codigoInscricao + numeroInscricao + agencia + zeros + conta + dac + numeroCarteira + 
    nossoNumero + dacNossoNumero + sequenciaRateio + agenciaRateio + contaRateio + dacRateio + valorRateio + tipoValor 
    + numeroSequencial;
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