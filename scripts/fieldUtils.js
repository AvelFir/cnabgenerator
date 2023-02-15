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
    var isSobrepor = localStorage.getItem("isSobreporLinha");
    var size = configuration.size;

    if(isSobrepor && savedValue){
        return configuration.formatStyle(savedValue,size,fillerValue[0]);
    }
    if(fieldValue){
        return configuration.formatStyle(fieldValue,size,fillerValue[0]);
    }
    return fillerValue;    
} 