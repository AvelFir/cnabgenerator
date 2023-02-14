document.addEventListener("DOMContentLoaded", function () {


  var toggleButtons = document.querySelectorAll(".toggleButton");
  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function () {
      toggleSection(this.getAttribute("data-section"));
    });
  }

  
});

function toggleEditableField(fieldId, button) {
  const inputField = document.querySelector(`#${fieldId}`);
  if (inputField.hasAttribute("readonly")) {
    inputField.removeAttribute("readonly");
    button.innerHTML = "Travar";
  } else {
    inputField.setAttribute("readonly", "");
    button.innerHTML = "Destravar";
  }
}

function baixarArquivo() {
    var input = document.getElementById("nomeArquivo").value
    nomeArquivo = input == undefined || input == "" ? getNomeArquivo() : input;
    
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
    download(nomeArquivo,documento);
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

  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function gerarRemessaPadraoDefaultValues(){
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
    makeFieldsReadOnly();
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

  function geraCPF() {
    var n = 9;
    var n1 = Math.floor(Math.random() * n);
    var n2 = Math.floor(Math.random() * n);
    var n3 = Math.floor(Math.random() * n);
    var n4 = Math.floor(Math.random() * n);
    var n5 = Math.floor(Math.random() * n);
    var n6 = Math.floor(Math.random() * n);
    var n7 = Math.floor(Math.random() * n);
    var n8 = Math.floor(Math.random() * n);
    var n9 = Math.floor(Math.random() * n);
    var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
    d1 = 11 - (Math.floor(d1 % 11));
    if (d1>=10) d1 = 0;
    var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
    d2 = 11 - (Math.floor(d2 % 11));
    if (d2>=10) d2 = 0;
    return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
  }

 function gerarNossoNumeroData() {
    var data = new Date();
    var dia = data.getDate().toString().padStart(2, '0');
    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
    var horas = data.getHours().toString().padStart(2, '0');
    var minutos = data.getMinutes().toString().padStart(2, '0');
    return dia + mes + horas + minutos;
  }

  function gerarNossoNumeroAleatorio() {
    var max = 99999999;
    var min = 1;
    var nossoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    return  nossoNumero.toString().padStart(8,"0");
  }

  function gerarDataVencimento() {
    var hoje = new Date();
    hoje.setDate(hoje.getDate() + 30);
    var dia = hoje.getDate().toString().padStart(2, '0');
    var mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    var ano = hoje.getFullYear().toString().slice(-2);
    return dia + mes + ano;
  }
  

  function gerarDataEmissao() {
    var hoje = new Date();
    var dia = hoje.getDate().toString().padStart(2, '0');
    var mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    var ano = hoje.getFullYear().toString().slice(-2);
    return dia + mes + ano;
  }


  function gerarNomeArquivo(){
    const nomeArquivo = getNomeArquivo();
    document.getElementById("nomeArquivo").value = nomeArquivo;
  }

  function gerarNossoNumero(tipo){
    const nossoNumero = tipo == "data" ? gerarNossoNumeroData() : gerarNossoNumeroAleatorio();
    document.getElementById("nossoNumero").value = nossoNumero;
  }

  function getNomeArquivo(){
    const CNAB_TYPE = "CNAB400"
    const date = new Date();
    const formattedDate = date.getDate().toString().padStart(2, '0') +
                      (date.getMonth() + 1).toString().padStart(2, '0') +
                      date.getFullYear() +
                      date.getHours().toString().padStart(2, '0') +
                      date.getMinutes().toString().padStart(2, '0') +
                      date.getSeconds().toString().padStart(2, '0');
    return CNAB_TYPE + "_" + formattedDate;
  }


  function setComplemento(){
    const complemento = "1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677787980818283848586878889909192939495969798991001011021031041051061071081091101111121131141151161171181191201211221231241251261271281291301311321331341351361371381391401411421431441451461471481491501511521123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129130131132133134135136137138139140141142143144145146147148149150151152100"
    document.getElementById("complementoLinha").value = complemento;
  }
  

  function toggleSection(sectionName) {
    var formSectionContent = document.getElementById(sectionName + "Content");
    var toggleButton = document.querySelector('[data-section="' + sectionName + '"]');
    var toggleButton = document.querySelector('[data-section="' + sectionName + '"]');
  
    if (formSectionContent.style.display === "none") {
      formSectionContent.style.display = "block";
      toggleButton.innerText = "Minimize " + sectionName;
    } else {
      formSectionContent.style.display = "none";
      toggleButton.innerText = "Maximize " + sectionName;
    }
  }

  function makeFieldsReadOnly() {
    var fields = document.querySelectorAll(".fixo");
    for (var i = 0; i < fields.length; i++) {
      fields[i].setAttribute("readonly", "readonly");
    }
    setEditButtons();
  }

  function setEditButtons() {
    var editButtons = document.querySelectorAll(".editButton");
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].innerHTML = "Destravar";
    }
  }
  
  