//Arquivo Responsavel pelas funções que geram um valor para um campo

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

  function gerarDataDesconto() {
    var hoje = new Date();
    hoje.setDate(hoje.getDate() + 10);
    var dia = hoje.getDate().toString().padStart(2, '0');
    var mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    var ano = hoje.getFullYear().toString().slice(-2);
    return dia + mes + ano;
  }

  function gerarDataMora() {
    var hoje = new Date();
    hoje.setDate(hoje.getDate() + 40);
    var dia = hoje.getDate().toString().padStart(2, '0');
    var mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    var ano = hoje.getFullYear().toString().slice(-2);
    return dia + mes + ano;
  }

  function gerarDataMulta() {
    var hoje = new Date();
    hoje.setDate(hoje.getDate() + 40);
    var dia = hoje.getDate().toString().padStart(2, '0');
    var mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    var ano = hoje.getFullYear().toString();
    return dia + mes + ano;
  }


  function gerarNomeArquivo(){
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

  function gerarComplementoLinha(){
    var complemento = Constantes.COMPLEMENTO_LINHA;
    var nome = RemessaPadraoConstants.NOME.value;
    const nomeFormatado = formatEnd(nome,30," ")
    complemento += nomeFormatado;
    complemento += "3100200000000000000000000000000000000000000000000000000000000000000000"
    return complemento;
  }

  function gerarComplementoArquivo(){
    var codigo = "@@H@@";
    var brancos1 = "".padStart(10," ")
    var id = "GERABOL"
    const date = new Date();
    const formattedDate = date.getDate().toString().padStart(2, '0') +
                      (date.getMonth() + 1).toString().padStart(2, '0') +
                      date.getFullYear() +
                      date.getHours().toString().padStart(2, '0') +
                      date.getMinutes().toString().padStart(2, '0') +
                      date.getSeconds().toString().padStart(2, '0');
    var zeros1 = "".padStart(21,"0");
    var brancos2 = "".padStart(2," ");
    var zeros2 = "".padStart(11,"0");
    var brancos3 = "".padStart(29," ");
    var final = "EFETIVACAO";
    var dados = codigo + brancos1 + id + formattedDate + zeros1 + brancos2 + zeros2 + brancos3 + final;
    return dados;
  }