function setModoInstrucao(){

    tornarBotaoInvisivel(document.getElementById("buttonAlterarModoInstrucao"));
    tornarBotaoVisivel(document.getElementById("buttonAlterarModoRemessaCompleta"));

    tornarBotaoInvisivel(document.getElementById("buttonGerarValorRemessaDetalhePadrao"));
    tornarBotaoVisivel(document.getElementById("buttonGerarValorInstrucao"));

    limparCampos("camposRemessaPadrao");

    tornarCampoVisivel(document.getElementById("fieldAgencia"));
    tornarCampoVisivel(document.getElementById("fieldConta"));
    tornarCampoVisivel(document.getElementById("fieldDac"));
    tornarCampoVisivel(document.getElementById("fieldNossoNumero"));
    tornarCampoVisivel(document.getElementById("fieldUsoEmpresa"));
    tornarCampoVisivel(document.getElementById("fieldNumeroCarteira"));
    tornarCampoVisivel(document.getElementById("fieldCodigoOcorrencia"));
    tornarCampoVisivel(document.getElementById("fieldNumeroDocumento"));
    tornarCampoVisivel(document.getElementById("fieldAbatimento"));
    tornarCampoVisivel(document.getElementById("fieldPrazo"));


    tornarCampoInvisivel(document.getElementById("fieldCodigoDeInscricao"));
    tornarCampoInvisivel(document.getElementById("fieldNumeroDeInscricao"));
    tornarCampoInvisivel(document.getElementById("fieldZeros1"));
    tornarCampoInvisivel(document.getElementById("fieldBrancos1"));
    tornarCampoInvisivel(document.getElementById("fieldInstrucaoAlegacao"));
    tornarCampoInvisivel(document.getElementById("fieldMoedaVariavel"));
    tornarCampoInvisivel(document.getElementById("fieldUsoBanco"));
    tornarCampoInvisivel(document.getElementById("fieldCarteira"));
    tornarCampoInvisivel(document.getElementById("fieldVencimento"));
    tornarCampoInvisivel(document.getElementById("fieldValorTitulo"));
    tornarCampoInvisivel(document.getElementById("fieldCodigoBanco"));
    tornarCampoInvisivel(document.getElementById("fieldAgenciaCobradora"));
    tornarCampoInvisivel(document.getElementById("fieldEspecie"));
    tornarCampoInvisivel(document.getElementById("fieldAceite"));
    tornarCampoInvisivel(document.getElementById("fieldDataEmissao"));
    tornarCampoInvisivel(document.getElementById("fieldInstrucao1"));
    tornarCampoInvisivel(document.getElementById("fieldInstrucao2"));
    tornarCampoInvisivel(document.getElementById("fieldValorJuros"));
    tornarCampoInvisivel(document.getElementById("fieldDataDesconto"));
    tornarCampoInvisivel(document.getElementById("fieldValorDesconto"));
    tornarCampoInvisivel(document.getElementById("fieldValorIOF"));
    tornarCampoInvisivel(document.getElementById("fieldCodigoInscricaoPagador"));
    tornarCampoInvisivel(document.getElementById("fieldNumeroInscricaoPagador"));
    tornarCampoInvisivel(document.getElementById("fieldNome"));
    tornarCampoInvisivel(document.getElementById("fieldBrancos2"));
    tornarCampoInvisivel(document.getElementById("fieldLogradouro"));
    tornarCampoInvisivel(document.getElementById("fieldBairro"));
    tornarCampoInvisivel(document.getElementById("fieldCep"));
    tornarCampoInvisivel(document.getElementById("fieldCidade"));
    tornarCampoInvisivel(document.getElementById("fieldEstado"));
    tornarCampoInvisivel(document.getElementById("fieldSacadorAvalista"));
    tornarCampoInvisivel(document.getElementById("fieldBrancos3"));
    tornarCampoInvisivel(document.getElementById("fieldDataMora"));
    tornarCampoInvisivel(document.getElementById("fieldBrancos4"));
}

function setModoRemessaCompleta(){

    tornarBotaoVisivel(document.getElementById("buttonAlterarModoInstrucao"));
    tornarBotaoInvisivel(document.getElementById("buttonAlterarModoRemessaCompleta"));

    tornarBotaoVisivel(document.getElementById("buttonGerarValorRemessaDetalhePadrao"));
    tornarBotaoInvisivel(document.getElementById("buttonGerarValorInstrucao"));

    limparCampos("camposRemessaPadrao");

    tornarCampoVisivel(document.getElementById("fieldAgencia"));
    tornarCampoVisivel(document.getElementById("fieldConta"));
    tornarCampoVisivel(document.getElementById("fieldDac"));
    tornarCampoVisivel(document.getElementById("fieldNossoNumero"));
    tornarCampoVisivel(document.getElementById("fieldUsoEmpresa"));
    tornarCampoVisivel(document.getElementById("fieldNumeroCarteira"));
    tornarCampoVisivel(document.getElementById("fieldCodigoOcorrencia"));
    tornarCampoVisivel(document.getElementById("fieldNumeroDocumento"));
    tornarCampoVisivel(document.getElementById("fieldAbatimento"));
    tornarCampoVisivel(document.getElementById("fieldCodigoDeInscricao"));
    tornarCampoVisivel(document.getElementById("fieldNumeroDeInscricao"));
    tornarCampoVisivel(document.getElementById("fieldZeros1"));
    tornarCampoVisivel(document.getElementById("fieldBrancos1"));
    tornarCampoVisivel(document.getElementById("fieldInstrucaoAlegacao"));
    tornarCampoVisivel(document.getElementById("fieldMoedaVariavel"));
    tornarCampoVisivel(document.getElementById("fieldUsoBanco"));
    tornarCampoVisivel(document.getElementById("fieldCarteira"));
    tornarCampoVisivel(document.getElementById("fieldVencimento"));
    tornarCampoVisivel(document.getElementById("fieldValorTitulo"));
    tornarCampoVisivel(document.getElementById("fieldCodigoBanco"));
    tornarCampoVisivel(document.getElementById("fieldAgenciaCobradora"));
    tornarCampoVisivel(document.getElementById("fieldEspecie"));
    tornarCampoVisivel(document.getElementById("fieldAceite"));
    tornarCampoVisivel(document.getElementById("fieldDataEmissao"));
    tornarCampoVisivel(document.getElementById("fieldInstrucao1"));
    tornarCampoVisivel(document.getElementById("fieldInstrucao2"));
    tornarCampoVisivel(document.getElementById("fieldValorJuros"));
    tornarCampoVisivel(document.getElementById("fieldDataDesconto"));
    tornarCampoVisivel(document.getElementById("fieldValorDesconto"));
    tornarCampoVisivel(document.getElementById("fieldValorIOF"));
    tornarCampoVisivel(document.getElementById("fieldCodigoInscricaoPagador"));
    tornarCampoVisivel(document.getElementById("fieldNumeroInscricaoPagador"));
    tornarCampoVisivel(document.getElementById("fieldNome"));
    tornarCampoVisivel(document.getElementById("fieldBrancos2"));
    tornarCampoVisivel(document.getElementById("fieldLogradouro"));
    tornarCampoVisivel(document.getElementById("fieldBairro"));
    tornarCampoVisivel(document.getElementById("fieldCep"));
    tornarCampoVisivel(document.getElementById("fieldCidade"));
    tornarCampoVisivel(document.getElementById("fieldEstado"));
    tornarCampoVisivel(document.getElementById("fieldSacadorAvalista"));
    tornarCampoVisivel(document.getElementById("fieldBrancos3"));
    tornarCampoVisivel(document.getElementById("fieldDataMora"));
    tornarCampoVisivel(document.getElementById("fieldPrazo"));
    tornarCampoVisivel(document.getElementById("fieldBrancos4"));
}

function tornarCampoInvisivel(elemento) {
    elemento.classList.add('invisivel');
    elemento.classList.remove('visivel');
  }
  
  function tornarCampoVisivel(elemento) {
    elemento.classList.add('visivel');
    elemento.classList.remove('invisivel');
  }
  
  function tornarBotaoInvisivel(elemento) {
    elemento.classList.add('invisivel');
    elemento.classList.remove('botao-visivel');
  }
  
  function tornarBotaoVisivel(elemento) {
    elemento.classList.add('botao-visivel');
    elemento.classList.remove('invisivel');
  }

  function limparCampos(divAlvoName){
    const divAlvo = document.getElementById(divAlvoName);
    const campos = divAlvo.querySelectorAll('input');
    for (var i = 0; i < campos.length; i++) {
        campos[i].value = '';
      }
  }