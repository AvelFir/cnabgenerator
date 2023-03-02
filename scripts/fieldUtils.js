function formatStart(str,size,filler){
    return str.lenght > size ? str.slice(0,size) : str.padStart(size,filler)
}

function formatEnd(str,size,filler){
    return str.lenght > size ? str.trim(0,size) : str.padEnd(size,filler)
}

function getValueOrFiller(field, configuration){
    var fieldValue = field ? field.value : "";
    var savedValue = localStorage.getItem(field.name + "Padrao");
    var isSobrepor = localStorage.getItem("isSobreporLinha") === "true";
    var size = configuration.size;

    if((isSobrepor || !isValidString(fieldValue)) && isValidString(savedValue)){
        return configuration.formatStyle(savedValue,size,configuration.filler[0]);
    }
    if(isValidString(fieldValue)){
        return configuration.formatStyle(fieldValue,size,configuration.filler[0]);
    }
    var filler = getFiller(configuration);
    return filler;    
}

function getValueOrFiller(field, configuration, savedValueName){
    var fieldValue = field ? field.value : "";
    var savedValue = localStorage.getItem(savedValueName);
    var isSobrepor = localStorage.getItem("isSobreporLinha") === "true";
    var size = configuration.size;

    if((isSobrepor || !isValidString(fieldValue)) && isValidString(savedValue)){
        return configuration.formatStyle(savedValue,size,configuration.filler[0]);
    }
    if(isValidString(fieldValue)){
        return configuration.formatStyle(fieldValue,size,configuration.filler[0]);
    }
    var filler = getFiller(configuration);
    return filler;    
} 

function getSavedValueOrFiller(fieldName, configuration){
    var savedValue = localStorage.getItem(fieldName + "Padrao");
    var size = configuration.size;

    if(isValidString(savedValue)){
        return configuration.formatStyle(savedValue,size,configuration.filler[0]);
    }
    var filler = getFiller(configuration);
    return filler;    
} 

function getFiller(configuration){
    const fillerPadrao = localStorage.getItem("fillerPadrao");
    const size = configuration.size;
    switch(fillerPadrao){
        case "brancos":
            return " ".repeat(size);
        case "zeros":
            return "0".repeat(size);
        default:
            return configuration.filler;
    }
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
    // Remove os caracteres não numéricos
    numero = numero.replace(/\D/g, '');
  
    // Define os pesos de cada posição do número
    const pesos = [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  
    // Inverte o número
    const numeroInvertido = numero.split('').reverse().join('');
  
    let soma = 0;
  
    for (let i = 0; i < numeroInvertido.length; i++) {
      const valor = parseInt(numeroInvertido.charAt(i), 10) * pesos[i];
      soma += valor > 9 ? valor - 9 : valor;
    }
  
    const digito = (10 - (soma % 10)) % 10;
  
    return digito;
  }