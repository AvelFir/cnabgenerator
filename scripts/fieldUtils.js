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
    if(fieldValue == "" || fieldValue == "undefined"){
        if(savedValue){
            return configuration.formatStyle(savedValue)
        }
        return fillerValue;
    }
    var size = configuration.size;
    return configuration.formatStyle(fieldValue,size,fillerValue[0]);
} 