function baixarArquivo() {
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
    var codOcorrencia = document.getElementById("codOcorrencia").value;
    var nDocumento = document.getElementById("nDocumento").value;
    var vencimento = document.getElementById("vencimento").value;
    var valorTitulo = document.getElementById("valorTitulo").value;
    var codBanco = document.getElementById("codBanco").value;
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
    var BRANCOS3 = document.getElementById("BRANCOS3").value;
    var dataMora = document.getElementById("dataMora").value;
    var prazo = document.getElementById("prazo").value;
    var BRANCOS4 = document.getElementById("BRANCOS4").value;
    var numeroSequencial = document.getElementById("numeroSequencial").value;
  
    var dados = tipoDeRegistro + codigoDeInscricao + numeroDeInscricao + agencia + zeros1 + conta + dac + brancos1 +
            instrucaoAlegacao + usoEmpresa + nossoNumero + moedaVariavel + numeroCarteira + usoBanco + carteira +
            codOcorrencia + nDocumento + vencimento + valorTitulo + codBanco + agenciaCobradora + especie + aceite +
            dataEmissao + instrucao1 + instrucao2 + valorJuros + dataDesconto + valorDesconto + valorIof + abatimento +
            codigoInscricaoPagador + numeroInscricaoPagador + nome + brancos2 + logradouro + bairro + cep + cidade + estado +
            sacadorAvalista + BRANCOS3 + dataMora + prazo + BRANCOS4 + numeroSequencial;
            
    download("cnab400.txt",dados);
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