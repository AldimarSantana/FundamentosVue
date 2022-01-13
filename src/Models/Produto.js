

export default class Produto {
    
    constructor(obj) {
        obj = obj || {};
        
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obk.valor || 0;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro;
    }
}