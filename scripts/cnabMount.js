//Arquivo Responsavel por Montar as Linhas, ou seja pegar o valor dos campos e retornar

function mountCnab400(){
  var header = mountLinhaHeaderArquivoDefaultValues();
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
  var header = mountLinhaHeaderArquivoDefaultValues();
  header = header.substring(0, header.length - 6);
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

  function mountLinhaHeaderArquivoDefaultValues(){
    var tipoDeRegistro = "0";
    var operacao = "1";
    var literalRemessa = "REMESSA";
    var codigoServico = "01";
    var literalServico = "COBRANCA".padEnd(15," ");
    var agencia = "1500";
    var zeros1 = "00";
    var conta =  "05206";
    var dac = "2";
    var brancos1 = "        "
    var nomeEmpresa = "Bernardo e Henrique Assessoria".padEnd(30," ")
    var codigoBanco = "341";
    var nomeBanco = "BANCO ITAU SA".padEnd(15," ");
    var dataGeracao = gerarDataEmissao();
    var brancos2 = "".padStart(294," ")
    var numeroSequencial = "000001"

    var dados = tipoDeRegistro + operacao + literalRemessa + codigoServico + literalServico + agencia + zeros1 + conta + dac + brancos1 + nomeEmpresa + codigoBanco + nomeBanco + dataGeracao + brancos2 + numeroSequencial;
    return dados;
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