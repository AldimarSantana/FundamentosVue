import moment from "moment";

function aplicarMascaraEmDataIso(data){
    if(data){
        return moment(data).locale('pt-br').format('DD/MM/YYYY');
    }
    return ''
}

function aplicarMascaraDataHoraEmDataIso(data){
    if(data){
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
    }
    return ''
}


function aplicarMascaraIsoEmFormatoAmericano(data){
    if(data){
        let dataAmericana = moment(data).locale('pt-br').format('YYYY-MM-DD');
        return dataAmericana + "T00:00:00";
    }
    return ''
}

function aplicarMascaraFormatoAmericanoEmISO(data){
    if(data){
        return moment(data).locale('pt-br').format('YYYY-MM-DD');
    }
    return ''
}



export default{
    aplicarMascaraEmDataIso,
    aplicarMascaraDataHoraEmDataIso,
    aplicarMascaraIsoEmFormatoAmericano,
    aplicarMascaraFormatoAmericanoEmISO
}