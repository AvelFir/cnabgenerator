function adicionarRateio(numero) {
  const div = criarDivRateio(numero);
  // 5. Adicione a div criada à página
  document.getElementById("beneficiariosRateio").appendChild(div);

  //   Remove o botão atual
  var botaoAtual = document.getElementById("botaoAdicionar");

  if (botaoAtual) {
    botaoAtual.parentNode.removeChild(botaoAtual);
  }

  const proximoNumero = numero + 1;

  criarBotao(proximoNumero);

  if (proximoNumero > Constantes.LIMITE_CONTAS_RATEIO) {
    const botaoAtual = document.getElementById("botaoAdicionar");
    botaoAtual.textContent = "Limite de 14 Rateios Por Linha!";
    botaoAtual.disabled = true;
  }
}

function criarBotao(numero) {
    const botao = document.createElement("button");
    botao.textContent = "Adicionar Rateio " + numero;
    botao.setAttribute("id", "botaoAdicionar");
    botao.setAttribute("onclick", "adicionarRateio(" + numero + ")");
    document.getElementById("beneficiariosRateio").appendChild(botao);
  }


// Cria um botão para calcular o DAC
function criarBotaoCalcularDac(numero) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.innerHTML = "Calcular DAC";
    botao.onclick = function () {
      setDacButton(`agenciaRateio${numero}`, `contaRateio${numero}`, `dacRateio${numero}`);
    };
  
    return botao;
  }

  // Cria uma quebra de linha
function criarQuebraLinha() {
    return document.createElement("br");
  }

  // Cria uma div com os campos do rateio
function criarDivRateio(numero) {
    const div = document.createElement("div");
    div.classList.add("rateio");
  
    const labelAgencia = criarLabel("agenciaRateio", numero, "AGENCIA DE RATEIO");
    const inputAgencia = criarInput("agenciaRateio", numero, 4);
    const br1 = criarQuebraLinha();
    const labelConta = criarLabel("contaRateio", numero, "CONTA DE RATEIO");
    const inputConta = criarInput("contaRateio", numero, 7);
    const br2 = criarQuebraLinha();
    const labelDac = criarLabel("dacRateio", numero, "DAC RATEIO");
    const inputDac = criarInput("dacRateio", numero, 1);
    const botaoCalcularDac = criarBotaoCalcularDac(numero);
    const br3 = criarQuebraLinha();
    const labelValor = criarLabel("valorRateio", numero, "VALOR RATEIO");
    const inputValor = criarInput("valorRateio", numero, 13);
    const br4 = criarQuebraLinha();
    const br5 = criarQuebraLinha();
  
    div.appendChild(labelAgencia);
    div.appendChild(inputAgencia);
    div.appendChild(br1);
    div.appendChild(labelConta);
    div.appendChild(inputConta);
    div.appendChild(br2);
    div.appendChild(labelDac);
    div.appendChild(inputDac);
    div.appendChild(botaoCalcularDac);
    div.appendChild(br3);
    div.appendChild(labelValor);
    div.appendChild(inputValor);
    div.appendChild(br4);
    div.appendChild(br5);
  
    return div;
  }
  
  // Cria um label
  function criarLabel(nome, numero, texto) {
    const label = document.createElement("label");
    label.setAttribute("for", `${nome}${numero}`);
    label.textContent = `${texto} ${numero}`;
  
    return label;
  }
  
  // Cria um input
  function criarInput(nome, numero, maxlength) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", `${nome}${numero}`);
    input.setAttribute("name", `${nome}${numero}`);
    input.setAttribute("maxlength", maxlength);
  
    return input;
  }

  
