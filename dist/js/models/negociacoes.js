export class Negociacoes {
    constructor() {
        // Array que recebe todo e somente o componente visto em negociação. Ele também poderia receber tipos primitivos como <string> ou mesmo <boolean> 
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
