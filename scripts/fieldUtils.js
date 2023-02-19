function formatStart(str,size,filler){
    return str.lenght > size ? str.slice(0,size) : str.padStart(size,filler)
}

function formatEnd(str,size,filler){
    return str.lenght > size ? str.trim(0,size) : str.padEnd(size,filler)
}

function getValueOrFiller(field, configuration){
    var fieldValue = field.value;
    var fillerValue = configuration.filler;
    var savedValue = localStorage.getItem(field.name + "Padrao");
    var isSobrepor = localStorage.getItem("isSobreporLinha") === "true";
    var size = configuration.size;

    if((isSobrepor || !isValidString(fieldValue)) && isValidString(savedValue)){
        return configuration.formatStyle(savedValue,size,fillerValue[0]);
    }
    if(isValidString(fieldValue)){
        return configuration.formatStyle(fieldValue,size,fillerValue[0]);
    }
    return fillerValue;    
} 

function getSavedValueOrFiller(fieldName, configuration){
    var fillerValue = configuration.filler;
    var savedValue = localStorage.getItem(fieldName + "Padrao");
    var size = configuration.size;

    if(isValidString(savedValue)){
        return configuration.formatStyle(savedValue,size,fillerValue[0]);
    }
    return fillerValue;    
} 

function getFirstValueOr(primaryValue,secondaryValue){
    return isValidString(primaryValue) ? primaryValue : secondaryValue;
}

function isValidString(str){
    return str != null && str != "" && str != undefined;
}

function isLinhaComplemento(value){
    return value === "0" || value === "1";
}

function calcularDacCNAB400(numero) {
    // Remove caracteres não numéricos do número
    numero = numero.replace(/\D/g, '');
  
    // Define os pesos de cada posição do número
    const pesos = [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  
    // Inverte o número para facilitar o cálculo do DAC
    numero = numero.split('').reverse().join('');
  
    let soma = 0;
    for (let i = 0; i < numero.length; i++) {
      const produto = parseInt(numero[i]) * pesos[i];
      soma += produto < 10 ? produto : 1 + produto - 10;
    }
  
    let dac = 11 - (soma % 11);
    if (dac >= 10) {
      dac = 0;
    }
  
    return dac.toString();
  }