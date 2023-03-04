function baixarArquivoButton() {
    var nomeArquivo = mountNomeArquivo();
    var documento = mountCnab400();
    download(nomeArquivo, documento);
  }
  
  function baixarArquivoButton2() {
    var nomeArquivo = mountNomeArquivo();
    var documento = mountArquivo();
    download(nomeArquivo, documento);
  }