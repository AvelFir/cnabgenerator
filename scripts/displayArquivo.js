function adicionarLinha400(input1Content) {

  if(getQuantidadeLinhas() >= Constantes.LIMITE_MAXIMO_LINHAS_ARQUIVO){
    alert("Numero Maximo de Linhas Atingido!")
    return false;
  }

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
  
    // adicione o ouvinte de eventos ao botão
    botao.addEventListener('click', removerLinha);
  
    // adicione a nova linha à tabela
    tabela.appendChild(novaLinha);
    setQuantidadesLinhasAtual();
    return true;
  }
  
  function removerLinha(event) {
    // encontre a linha correspondente ao botão clicado
    const linha = event.target.parentNode.parentNode;
    // remova a linha da tabela
    linha.remove();
    setQuantidadesLinhasAtual();
  }

  function getMultiplicadorLinhaRemessaDetalhePadrao() {
    let qtd = document.getElementById("multiplicadorLinhaRemessaDetalhePadrao").value;
    let quantidadeBoletos = qtd || Constantes.LIMITE_MINIMO_LINHAS_REMESSA_PADRAO;
    quantidadeBoletos = quantidadeBoletos < Constantes.LIMITE_MINIMO_LINHAS_REMESSA_PADRAO ? Constantes.LIMITE_MINIMO_LINHAS_REMESSA_PADRAO : quantidadeBoletos;
    quantidadeBoletos = quantidadeBoletos > Constantes.LIMITE_MAXIMO_LINHAS_ARQUIVO ? Constantes.LIMITE_MAXIMO_LINHAS_ARQUIVO : quantidadeBoletos;
    return quantidadeBoletos;
  }
  
  function getQuantidadeLinhas(){
    const tabela = document.getElementById("tabelaArquivo");
    const numTRs = tabela.rows.length;
    return numTRs;
  }

  function setQuantidadesLinhasAtual(){
    const numTRs = getQuantidadeLinhas();
    const numTRsElemento = document.getElementById("quantidadeNumeroLinhasArquivoAtual");
    numTRsElemento.textContent = numTRs;
  }

  function setQuantidadesLinhasMaximo(){
    const maximo = document.getElementById("quantidadeNumeroLinhasArquivoMaximo");
    maximo.textContent = Constantes.LIMITE_MAXIMO_LINHAS_ARQUIVO;
  }