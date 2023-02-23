function getContadorSequencialGlobal(){
    var contadorSequencialGlobal = document.getElementById("contadorSequencialGlobal").value.padStart(6,"0");
    return contadorSequencialGlobal;
  }
  
  function addContadorSequencialGlobal() {
    var contador = document.getElementById("contadorSequencialGlobal");
    var valorAtual = parseInt(contador.value, 10);
    contador.value = valorAtual + 1;
  }
  
  function resetContadorSequencialGlobal() {
    document.getElementById("contadorSequencialGlobal") = 0;
  }