function adicionarLinhaRemessaDetalhePadraoButton() {
    let linha = mountLinhaRemessaDetalhePadrao();
    linha = linha.substring(0, linha.length - 6);
    const quantidadeLinhas = getMultiplicadorLinhaRemessaDetalhePadrao();
    for (let i = 0; i < quantidadeLinhas; i++) {
      if (!adicionarLinha400(linha)) {
        break;
      }
    }
  }
  
  function adicionarLinhaDetalheMultaButton() {
    var linha = mountRemessaMultaDefaultValues();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }
  
  function adicionarLinhaRemessaRateioButton() {
    var linha = mountRemessaRateioCredito();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }
  
  function adicionarLinhaDadosSacadorAvalistaButton() {
    var linha = mountSacadorAvalista();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }
  
  function adicionarLinhaRegistroMensagemFrenteButton() {
    var linha = mountMensagemFrente();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }
  
  function adicionarLinhaRegistroMensagemVersoButton() {
    var linha = mountMensagemVerso();
    linha = linha.substring(0, linha.length - 6);
    adicionarLinha400(linha);
  }
  