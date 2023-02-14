//Arquivo Responsavel por Montar as Linhas, ou seja pegar o valor dos campos e retornar

function mountCnab400(){
  var headerGIA = mountHeaderGIA();
  var header = mountLinhaHeaderArquivoDefaultValues();
  var remessaPadrao = mountLinhaRemessaDetalhePadrao();
  var trailer = mountLinhaTrailerArquivoDefaultValues();

  var isComplemento = document.getElementById("isComplemento").checked
  if(isComplemento){
    var complemento = document.getElementById("complementoLinha").value
    header += complemento;
    remessaPadrao += complemento;
  }
    
  var documento = [headerGIA, header, remessaPadrao, trailer].join("\n");
  return documento;
}

function mountLinhaRemessaDetalhePadrao() {
  var tipoDeRegistro = document.getElementById("tipoDeRegistro").value;
  var codigoDeInscricao = document.getElementById("codigoDeInscricao").value;
  var numeroDeInscricao = document.getElementById("numeroDeInscricao").value;
  var agencia = document.getElementById("agencia").value;
  var zeros1 = document.getElementById("zeros1").value;
  var conta = document.getElementById("conta").value;
  var dac = document.getElementById("dac").value;
  var brancos1 = document.getElementById("brancos1").value;
  var instrucaoAlegacao = document.getElementById("instrucaoAlegacao").value;
  var usoEmpresa = document.getElementById("usoEmpresa").value;
  var nossoNumero = document.getElementById("nossoNumero").value;
  var moedaVariavel = document.getElementById("moedaVariavel").value;
  var numeroCarteira = document.getElementById("numeroCarteira").value;
  var usoBanco = document.getElementById("usoBanco").value;
  var carteira = document.getElementById("carteira").value;
  var codigoOcorrencia = document.getElementById("codigoOcorrencia").value;
  var numeroDocumento = document.getElementById("numeroDocumento").value;
  var vencimento = document.getElementById("vencimento").value;
  var valorTitulo = document.getElementById("valorTitulo").value;
  var codigoBanco = document.getElementById("codigoBanco").value;
  var agenciaCobradora = document.getElementById("agenciaCobradora").value;
  var especie = document.getElementById("especie").value;
  var aceite = document.getElementById("aceite").value;
  var dataEmissao = document.getElementById("dataEmissao").value;
  var instrucao1 = document.getElementById("instrucao1").value;
  var instrucao2 = document.getElementById("instrucao2").value;
  var valorJuros = document.getElementById("valorJuros").value;
  var dataDesconto = document.getElementById("dataDesconto").value;
  var valorDesconto = document.getElementById("valorDesconto").value;
  var valorIof = document.getElementById("valorIOF").value;
  var abatimento = document.getElementById("abatimento").value;
  var codigoInscricaoPagador = document.getElementById("codigoInscricaoPagador").value;
  var numeroInscricaoPagador = document.getElementById("numeroInscricaoPagador").value;
  var nome = document.getElementById("nome").value;
  var brancos2 = document.getElementById("brancos2").value;
  var logradouro = document.getElementById("logradouro").value;
  var bairro = document.getElementById("bairro").value;
  var cep = document.getElementById("cep").value;
  var cidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado").value;
  var sacadorAvalista = document.getElementById("sacadorAvalista").value;
  var brancos3 = document.getElementById("brancos3").value;
  var dataMora = document.getElementById("dataMora").value;
  var prazo = document.getElementById("prazo").value;
  var brancos4 = document.getElementById("brancos4").value;
  var numeroSequencial = document.getElementById("numeroSequencial").value;

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