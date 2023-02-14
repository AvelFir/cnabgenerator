class RemessaPadraoConstants {
  static get TIPO_REGISTRO() {
    return { value: "1", filler: "0", size: 1 };
  }

  static get CODIGO_INSCRICAO() {
    return { value: "01", filler: "00", size: 2 };
  }

  static get numeroDeInscricao() {
    return { value: "00012044551802", filler: "0000000000000", size: 14 };
  }

  static get agencia() {
    return { value: "1500", filler: "0000", size: 4 };
  }

  static get zeros1() {
    return { value: "00", filler: "00", size: 2 };
  }

  static get conta() {
    return { value: "05206", filler: "00000", size: 5};
  }

  static get dac() {
    return { value: "2", filler: "0", size: 1 };
  }

  static get brancos1() {
    return { value: Brancos.QUATRO, filler: Brancos.QUATRO, size: 4 };
  }

  static get instrucaoAlegacao() {
    return { value: "0001", filler: "0000", size: 4 };
  }

  static get usoEmpresa() {
    return { value: ("EMPRESA" + gerarNossoNumeroAleatorio + Brancos.DEZ), filler: Brancos.VINTE_CINCO, size: 25 };
  }

  static get moedaVariavel() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get numeroCarteira() {
    return { value: "109", filler: "000", size: 3 };
  }

  static get usoBanco() {
    return { value: ("BANCO" + gerarNossoNumeroAleatorio + Brancos.OITO), filler: Brancos.VINTE_UM, size: 21 };
  }

  static get carteira() {
    return { value: "I", filler: Brancos.UM, size: 1 };
  }

  static get codigoOcorrencia() {
    return { value: "01", filler: "00", size: 2 };
  }

  static get numeroDocumento() {
    return { value: "DOC1234567", filler: Brancos.DEZ, size: 10 };
  }

  static get vencimento() {
    return { value: gerarDataVencimento(), filler: "000000", size: 6 };
  }

  static get valorTitulo() {
    return { value: "0000000010000", filler: "0000000000000", size: 13 };
  }

  static get codigoBanco() {
    return { value: "341", filler: "000", size: 3 };
  }

  static get agenciaCobradora() {
    return { value: "12345", filler: "00000", size: 5 };
  }

  static get especie() {
    return { value: "01", filler: Brancos.DOIS, size: 2 };
  }

  static get aceite() {
    return { value: "A", filler: Brancos.UM, size: 1 };
  }

  static get dataEmissao() {
    return { value: gerarDataEmissao(), filler:"000000" , size: 6 };
  }

  static get instrucao1() {
    return { value: "01", filler: Brancos.DOIS, size: 2 };
  }

  static get instrucao2() {
    return { value: "30", filler: Brancos.DOIS, size: 2 };
  }
  static get valorJuros() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get dataDesconto() {
    return { value: gerarDataDesconto(), filler: "000000", size: 6 };
  }

  static get valorDesconto() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get valorIOF() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get abatimento() {
    return { value: "0000000000199", filler: "0000000000000", size: 13 };
  }

  static get codigoInscricaoPagador() {
    return { value: "01", filler: "00", size: 2 };
  }

  static get numeroInscricaoPagador() {
    return { value: "00024498951670", filler: "00000000000000", size: 14 };
  }

  static get nome() {
    return { value: "Calebe Murilo Novaes" + Brancos.DEZ, filler: "1", size: 1 };
  }

  static get brancos2() {
    return { value: Brancos.DEZ, filler: Brancos.DEZ, size: 10 };
  }

  static get logradouro() {
    return { value: "Rua Alfaiate Reis".padEnd(40,Brancos.UM), filler: Brancos.QUARENTA, size: 40 };
  }

  static get bairro() {
    return { value: "Colonial".padEnd(12,Brancos.UM), filler: Brancos.DOZE, size: 12 };
  }

  static get cep() {
    return { value: "93212050", filler: Brancos.OITO, size: 8 };
  }

  static get cidade() {
    return { value: "Sapucaia do Sul".padEnd(15,Brancos.UM), filler: Brancos.QUINZE, size: 15 };
  }

  static get estado() {
    return { value: "RS", filler: Brancos.DOIS, size: 2 };
  }

  static get sacadorAvalista() {
    return { value: "Vera e Luis Marketing Ltda".padEnd(30,Brancos.UM), filler: Brancos.TRINTA, size: 30 };
  }

  static get brancos3() {
    return { value: Brancos.QUATRO, filler: Brancos.QUATRO, size: 4 };
  }

  static get dataMora() {
    return { value: gerarDataMora(), filler: "000000", size: 6 };
  }

  static get prazo() {
    return { value: "05", filler: "00", size: 5 };
  }

  static get brancos4() {
    return { value: Brancos.UM, filler: Brancos.UM, size: 1 };
  }

  static get numeroSequencial() {
    return { value: "000001", filler: "000000", size: 6 };
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