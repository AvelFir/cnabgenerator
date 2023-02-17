function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function adicionarLinha(input1Content) {
  // selecione a tabela onde deseja adicionar a nova linha
  const tabela = document.querySelector('#tabelaArquivo');

  // crie um novo elemento "tr" para representar a linha
  const novaLinha = document.createElement('tr');
  novaLinha.classList.add('linha');

  // crie os três elementos "td" para as colunas
  const coluna1 = document.createElement('td');
  coluna1.style.width = '1%';
  const botao = document.createElement('button');
  botao.classList.add('buttonLinha');
  botao.setAttribute('type', 'button');
  botao.textContent = '-';
  coluna1.appendChild(botao);

  const coluna2 = document.createElement('td');
  coluna2.style.width = '95%';
  const input1 = document.createElement('input');
  input1.classList.add('corpoLinha');
  input1.setAttribute('type', 'text');
  input1.setAttribute('maxlength', '394');
  input1.value = input1Content;
  coluna2.appendChild(input1);

  // adicione as colunas à nova linha
  novaLinha.appendChild(coluna1);
  novaLinha.appendChild(coluna2);

  // adicione a nova linha à tabela
  tabela.appendChild(novaLinha);
}


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