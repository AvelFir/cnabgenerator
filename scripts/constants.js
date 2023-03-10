class RemessaHeaderArquivo {
  static get TIPO_REGISTRO() {
    return { value: "0", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get OPERACAO() {
    return { value: "1", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get LITERAL_REMESSA() {
    return { value: "REMESSA", filler: Brancos.SETE, size: 7, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  
  static get CODIGO_SERVICO() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get LITERAL_SERVICO() {
    return { value: "COBRANCA".padEnd(15,Brancos.UM), filler: Brancos.QUINZE, size: 15, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get AGENCIA() {
    return { value: "1500", filler: "0000", size: 4, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get ZEROS() {
    return { value: "00", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get CONTA() {
    return { value: "05206", filler: "00000", size: 5, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get DAC() {
    return { value: "2", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get BRANCOS1() {
    return { value: Brancos.OITO, filler: Brancos.OITO, size: 4, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NOME_EMPRESA() {
    return { value: "Bernardo e Henrique Assessoria".padEnd(30,Brancos.UM), filler: Brancos.TRINTA, size: 30, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CODIGO_BANCO() {
    return { value: "341", filler: "000", size: 3, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NOME_BANCO() {
    return { value: "BANCO ITAU SA".padEnd(15,Brancos.UM), filler: Brancos.QUINZE, size: 15, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get DATA_GERACAO() {
    return { value: gerarDataEmissao(), filler:"000000" , size: 6, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }
  
  static get BRANCOS2() {
    return { value: Brancos.DUZENTOS_NOVENTA_QUATRO, filler: Brancos.DUZENTOS_NOVENTA_QUATRO, size: 294, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000001", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}
class RemessaPadraoConstants {
  static get TIPO_REGISTRO() {
    return { value: "1", filler: "1", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get CODIGO_INSCRICAO() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_INSCRICAO() {
    return { value: "00012044551802", filler: "00000000000000", size: 14, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get AGENCIA() {
    return { value: "1500", filler: "0000", size: 4, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get ZEROS() {
    return { value: "00", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get CONTA() {
    return { value: "05206", filler: "00000", size: 5, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get DAC() {
    return { value: "2", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get BRANCOS1() {
    return { value: Brancos.QUATRO, filler: Brancos.QUATRO, size: 4, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get INSTRUCAO_ALEGACAO() {
    return { value: "0001", filler: "0000", size: 4, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get USO_EMPRESA() {
    return { value: ("EMPRESA" + gerarNossoNumeroAleatorio() + Brancos.DEZ), filler: Brancos.VINTE_CINCO, size: 25, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NOSSO_NUMERO() {
    return { value: gerarNossoNumeroAleatorio() , filler: "00000000", size: 8, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get MOEDA_VARIAVEL() {
    return { value: "0000000000199", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_CARTEIRA() {
    return { value: "109", filler: "000", size: 3, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get USO_BANCO() {
    return { value: ("BANCO" + gerarNossoNumeroAleatorio() + Brancos.OITO), filler: Brancos.VINTE_UM, size: 21, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CARTEIRA() {
    return { value: "I", filler: Brancos.UM, size: 1, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CODIGO_OCORRENCIA() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_DOCUMENTO() {
    return { value: "DOC1234567", filler: Brancos.DEZ, size: 10, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get VENCIMENTO() {
    return { value: gerarDataVencimento(), filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get VALOR_TITULO() {
    return { value: "0000000010000", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get CODIGO_BANCO() {
    return { value: "341", filler: "000", size: 3, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get AGENCIA_COBRADORA() {
    return { value: "12345", filler: "00000", size: 5, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get ESPECIE() {
    return { value: "01", filler: Brancos.DOIS, size: 2, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get ACEITE() {
    return { value: "A", filler: Brancos.UM, size: 1, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get DATA_EMISSAO() {
    return { value: gerarDataEmissao(), filler:"000000" , size: 6, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get INSTRUCAO1() {
    return { value: "01", filler: Brancos.DOIS, size: 2, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get INSTRUCAO2() {
    return { value: "30", filler: Brancos.DOIS, size: 2, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }
  static get VALOR_JUROS() {
    return { value: "0000000000199", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get DATA_DESCONTO() {
    return { value: gerarDataDesconto(), filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get VALOR_DESCONTO() {
    return { value: "0000000000199", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get VALOR_IOF() {
    return { value: "0000000000199", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get ABATIMENTO() {
    return { value: "0000000000199", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get CODIGO_INSCRICAO_PAGADOR() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_INSCRICAO_PAGADOR() {
    return { value: "00024498951670", filler: "00000000000000", size: 14, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NOME() {
    return { value: "Calebe Murilo Novaes".padEnd(30,Brancos.UM), filler: Brancos.TRINTA, size: 30, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get BRANCOS2() {
    return { value: Brancos.DEZ, filler: Brancos.DEZ, size: 10, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get LOGRADOURO() {
    return { value: "Rua Alfaiate Reis".padEnd(40,Brancos.UM), filler: Brancos.QUARENTA, size: 40, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get BAIRRO() {
    return { value: "Colonial".padEnd(12,Brancos.UM), filler: Brancos.DOZE, size: 12, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CEP() {
    return { value: "93212050", filler: "00000000", size: 8, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CIDADE() {
    return { value: "Sapucaia do Sul".padEnd(15,Brancos.UM), filler: Brancos.QUINZE, size: 15, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get ESTADO() {
    return { value: "RS", filler: Brancos.DOIS, size: 2, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get SACADOR_AVALISTA() {
    return { value: "Vera e Luis Marketing Ltda".padEnd(30,Brancos.UM), filler: Brancos.TRINTA, size: 30, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get BRANCOS3() {
    return { value: Brancos.QUATRO, filler: Brancos.QUATRO, size: 4, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get DATA_MORA() {
    return { value: gerarDataMora(), filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get PRAZO() {
    return { value: "05", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get BRANCOS4() {
    return { value: Brancos.UM, filler: Brancos.UM, size: 1, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000002", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}
class RemessaMulta {

  static get TIPO_REGISTRO() {
    return { value: "2", filler: "2", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get CODIGO_MULTA() {
    return { value: "1", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get DATA_MULTA() {
    return { value: gerarDataMulta(), filler: "00000000", size: 8, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get VALOR_MULTA() {
    return { value: "0000000000199", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get BRANCOS() {
    return { value: Brancos.TREZENTOS_SETENTA_UM, filler: Brancos.TREZENTOS_SETENTA_UM, size: 371, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000003", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}
class RemessaRateioCredito {

  static get TIPO_REGISTRO() {
    return { value: "4", filler: "4", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get CODIGO_INSCRICAO() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_INSCRICAO() {
    return { value: "00012044551802", filler: "00000000000000", size: 14, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get AGENCIA() {
    return { value: "1500", filler: "0000", size: 4, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get ZEROS() {
    return { value: "00", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get CONTA() {
    return { value: "05206", filler: "00000", size: 5, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get DAC() {
    return { value: "2", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_CARTEIRA() {
    return { value: "109", filler: "000", size: 3, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NOSSO_NUMERO() {
    return { value: gerarNossoNumeroAleatorio() , filler: "00000000", size: 8, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get DAC_NOSSO_NUMERO() {
    return { value: "1" , filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get SEQUENCIA_RATEIO() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get AGENCIA_RATEIO() {
    return { value: "1500", filler: "0000", size: 4, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get CONTA_RATEIO() {
    return { value: "0005206", filler: "0000000", size: 7, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get DAC_RATEIO() {
    return { value: "2", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get VALOR_RATEIO() {
    return { value: "0000000000099", filler: "0000000000000", size: 13, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get TIPO_VALOR() {
    return { value: "1", filler: "0", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000003", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}

class RemessaDadosSacadorAvalista {

  static get TIPO_REGISTRO() {
    return { value: "5", filler: "5", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get EMAIL() {
    return { value: "teste@teste.com.br".padEnd(120,Brancos.UM), filler: Brancos.CENTO_VINTE, size: 120, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CODIGO_INSCRICAO() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get NUMERO_INSCRICAO() {
    return { value: "00012044551802", filler: "00000000000000", size: 14, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get LOGRADOURO() {
    return { value: "Rua Alfaiate Reis".padEnd(40,Brancos.UM), filler: Brancos.QUARENTA, size: 40, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get BAIRRO() {
    return { value: "Colonial".padEnd(12,Brancos.UM), filler: Brancos.DOZE, size: 12, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CEP() {
    return { value: "93212050", filler: "00000000", size: 8, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get CIDADE() {
    return { value: "Sapucaia do Sul".padEnd(15,Brancos.UM), filler: Brancos.QUINZE, size: 15, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get ESTADO() {
    return { value: "RS", filler: Brancos.DOIS, size: 2, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get BRANCOS() {
    return { value: Brancos.CENTO_OITENTA, filler: Brancos.CENTO_OITENTA, size: 180, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000003", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}

class RegistroMensagemFrente {

  static get TIPO_REGISTRO() {
    return { value: "7", filler: "7", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get FLASH() {
    return { value: "001", filler: Brancos.TRES, size: 3, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NUMERO_LINHA_1() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get TEXTO_LINHA_1() {
    return { value: "Texto 1".padEnd(128,Brancos.UM), filler: Brancos.CENTO_VINTE_OITO, size: 128, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get NUMERO_LINHA_2() {
    return { value: "02", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get TEXTO_LINHA_2() {
    return { value: "Texto 2".padEnd(128,Brancos.UM), filler: Brancos.CENTO_VINTE_OITO, size: 128, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get NUMERO_LINHA_3() {
    return { value: "03", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get TEXTO_LINHA_3() {
    return { value: "Texto 3".padEnd(127,Brancos.UM), filler: Brancos.CENTO_VINTE_SETE, size: 127, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get DESTINO_BOLETO() {
    return { value: "A", filler: Brancos.UM, size: 1, formatStyle: (value, fill, size) => formatEnd(value, fill, size) };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000003", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}

class RegistroMensagemVerso {

  static get TIPO_REGISTRO() {
    return { value: "8", filler: "8", size: 1, formatStyle: (value, fill, size) => formatStart(value, fill, size) };
  }

  static get NUMERO_LINHA_1() {
    return { value: "01", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get TEXTO_LINHA_1() {
    return { value: "Texto 1".padEnd(140,Brancos.UM), filler: Brancos.CENTO_QUARENTA, size: 140, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get BRANCOS1() {
    return { value: Brancos.CINQUENTA, filler: Brancos.CINQUENTA, size: 50, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get NUMERO_LINHA_2() {
    return { value: "02", filler: "00", size: 2, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }

  static get TEXTO_LINHA_2() {
    return { value: "Texto 2".padEnd(140,Brancos.UM), filler: Brancos.CENTO_QUARENTA, size: 140, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get BRANCOS2() {
    return { value: Brancos.CINQUENTA_NOVE, filler: Brancos.CINQUENTA_NOVE, size: 59, formatStyle: (value, fill, size) => formatEnd(value, fill, size)  };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000004", filler: "000000", size: 6, formatStyle: (value, fill, size) => formatStart(value, fill, size)  };
  }
}
class Brancos{
    static UM = " ".repeat(1);
    static DOIS = " ".repeat(2);
    static TRES = " ".repeat(3);
    static QUATRO = " ".repeat(4);
    static CINCO = " ".repeat(5);
    static SEIS = " ".repeat(6);
    static SETE = " ".repeat(7);
    static OITO = " ".repeat(8);
    static NOVE = " ".repeat(9);
    static DEZ = " ".repeat(10);
    static DOZE = " ".repeat(12);
    static QUINZE = " ".repeat(15);
    static VINTE_UM = " ".repeat(21);
    static VINTE_CINCO = " ".repeat(25);
    static TRINTA = " ".repeat(30);
    static QUARENTA = " ".repeat(40);
    static CINQUENTA = " ".repeat(50);
    static CINQUENTA_NOVE = " ".repeat(59);
    static CENTO_VINTE = " ".repeat(120);
    static CENTO_VINTE_SETE = " ".repeat(127);
    static CENTO_VINTE_OITO = " ".repeat(128);
    static CENTO_QUARENTA = " ".repeat(140);
    static CENTO_OITENTA = " ".repeat(180);
    static DUZENTOS_NOVENTA_QUATRO = " ".repeat(294);
    static TREZENTOS_SETENTA_UM = " ".repeat(371);
}

class Constantes{
  static LIMITE_CONTAS_RATEIO = 14;
  static LIMITE_MINIMO_LINHAS_REMESSA_PADRAO = 1;
  static LIMITE_MAXIMO_LINHAS_ARQUIVO = 10000;
  static COMPLEMENTO_LINHA = "1137359111   00N141090000000199999999112000000019999999911500000001999999991560000000199999999188000000019999999915000000001999999991750000000199999999110000000019999999911100000001999999991180000000199999999180000000019999999913800000001999999991147000000019999999910500000001999999991040000000199999999000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001           ";
}