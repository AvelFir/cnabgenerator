function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// function adicionarLinha() {
//   var tabela = document.getElementById("tabelaArquivo").getElementsByTagName('tbody')[0];
//   var novaLinha = tabela.insertRow(tabela.rows.length);
//   var novaCelula1 = novaLinha.insertCell(0);
//   var novaCelula2 = novaLinha.insertCell(1);
//   var novaCelula3 = novaLinha.insertCell(2);
//   novaCelula1.innerHTML = "Valor 4";
//   novaCelula2.innerHTML = "Valor 5";
//   novaCelula3.innerHTML = "Valor 6";
// }

function adicionarLinha() {
  
var contadorSequencialGlobal = getContadorSequencialGlobal();

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
input1.value = "01REMESSA01COBRANCA       150000052062        Bernardo e Henrique Assessoria341BANCO ITAU SA  170223                                                                                                                                                                                                                                                                                                      "
coluna2.appendChild(input1);

const coluna3 = document.createElement('td');
coluna3.style.width = '4%';
const input2 = document.createElement('input');
input2.classList.add('sequencialLinha');
input2.setAttribute('type', 'text');
input2.setAttribute('maxlength', '6');
input2.value = contadorSequencialGlobal;
coluna3.appendChild(input2);

// adicione as colunas à nova linha
novaLinha.appendChild(coluna1);
novaLinha.appendChild(coluna2);
novaLinha.appendChild(coluna3);

// adicione a nova linha à tabela
tabela.appendChild(novaLinha);

addContadorSequencialGlobal();

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