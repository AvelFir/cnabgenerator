class RemessaPadraoConstants {
  static get TIPO_REGISTRO() {
    return { value: "1", filler: "0", size: 1 };
  }

  static get CODIGO_INSCRICAO() {
    return { value: "01", filler: "00", size: 2 };
  }

  static get NUMERO_INSCRICAO() {
    return { value: "00012044551802", filler: "0000000000000", size: 14 };
  }

  static get AGENCIA() {
    return { value: "1500", filler: "0000", size: 4 };
  }

  static get ZEROS() {
    return { value: "00", filler: "00", size: 2 };
  }

  static get CONTA() {
    return { value: "05206", filler: "00000", size: 5};
  }

  static get DAC() {
    return { value: "2", filler: "0", size: 1 };
  }

  static get BRANCOS1() {
    return { value: Brancos.QUATRO, filler: Brancos.QUATRO, size: 4 };
  }

  static get INSTRUCAO_ALEGACAO() {
    return { value: "0001", filler: "0000", size: 4 };
  }

  static get USO_EMPRESA() {
    return { value: ("EMPRESA" + gerarNossoNumeroAleatorio() + Brancos.DEZ), filler: Brancos.VINTE_CINCO, size: 25 };
  }

  static get NOSSO_NUMERO() {
    return { value: gerarNossoNumeroAleatorio() , filler: "00000000", size: 8 };
  }

  static get MOEDA_VARIAVEL() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get NUMERO_CARTEIRA() {
    return { value: "109", filler: "000", size: 3 };
  }

  static get USO_BANCO() {
    return { value: ("BANCO" + gerarNossoNumeroAleatorio() + Brancos.OITO), filler: Brancos.VINTE_UM, size: 21 };
  }

  static get CARTEIRA() {
    return { value: "I", filler: Brancos.UM, size: 1 };
  }

  static get CODIGO_OCORRENCIA() {
    return { value: "01", filler: "00", size: 2 };
  }

  static get NUMERO_DOCUMENTO() {
    return { value: "DOC1234567", filler: Brancos.DEZ, size: 10 };
  }

  static get VENCIMENTO() {
    return { value: gerarDataVencimento(), filler: "000000", size: 6 };
  }

  static get VALOR_TITULO() {
    return { value: "0000000010000", filler: "0000000000000", size: 13 };
  }

  static get CODIGO_BANCO() {
    return { value: "341", filler: "000", size: 3 };
  }

  static get AGENCIA_COBRADORA() {
    return { value: "12345", filler: "00000", size: 5 };
  }

  static get ESPECIE() {
    return { value: "01", filler: Brancos.DOIS, size: 2 };
  }

  static get ACEITE() {
    return { value: "A", filler: Brancos.UM, size: 1 };
  }

  static get DATA_EMISSAO() {
    return { value: gerarDataEmissao(), filler:"000000" , size: 6 };
  }

  static get INSTRUCAO1() {
    return { value: "01", filler: Brancos.DOIS, size: 2 };
  }

  static get INSTRUCAO2() {
    return { value: "30", filler: Brancos.DOIS, size: 2 };
  }
  static get VALOR_JUROS() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get DATA_DESCONTO() {
    return { value: gerarDataDesconto(), filler: "000000", size: 6 };
  }

  static get VALOR_DESCONTO() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get VALOR_IOF() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get ABATIMENTO() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get CODIGO_INSCRICAO_PAGADOR() {
    return { value: "01", filler: "00", size: 2 };
  }

  static get NUMERO_INSCRICAO_PAGADOR() {
    return { value: "00024498951670", filler: "00000000000000", size: 14 };
  }

  static get NOME() {
    return { value: "Calebe Murilo Novaes" + Brancos.DEZ, filler: "1", size: 1 };
  }

  static get BRANCOS2() {
    return { value: Brancos.DEZ, filler: Brancos.DEZ, size: 10 };
  }

  static get LOGRADOURO() {
    return { value: "Rua Alfaiate Reis".padEnd(40,Brancos.UM), filler: Brancos.QUARENTA, size: 40 };
  }

  static get BAIRRO() {
    return { value: "Colonial".padEnd(12,Brancos.UM), filler: Brancos.DOZE, size: 12 };
  }

  static get CEP() {
    return { value: "93212050", filler: Brancos.OITO, size: 8 };
  }

  static get CIDADE() {
    return { value: "Sapucaia do Sul".padEnd(15,Brancos.UM), filler: Brancos.QUINZE, size: 15 };
  }

  static get ESTADO() {
    return { value: "RS", filler: Brancos.DOIS, size: 2 };
  }

  static get SACADOR_AVALISTA() {
    return { value: "Vera e Luis Marketing Ltda".padEnd(30,Brancos.UM), filler: Brancos.TRINTA, size: 30 };
  }

  static get BRANCOS3() {
    return { value: Brancos.QUATRO, filler: Brancos.QUATRO, size: 4 };
  }

  static get DATA_MORA() {
    return { value: gerarDataMora(), filler: "000000", size: 6 };
  }

  static get PRAZO() {
    return { value: "05", filler: "00", size: 5 };
  }

  static get BRANCOS4() {
    return { value: Brancos.UM, filler: Brancos.UM, size: 1 };
  }

  static get NUMERO_SEQUENCIAL() {
    return { value: "000002", filler: "000000", size: 6 };
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
}