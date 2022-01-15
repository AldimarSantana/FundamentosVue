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

export default{
    aplicarMascaraEmDataIso,
    aplicarMascaraDataHoraEmDataIso
}