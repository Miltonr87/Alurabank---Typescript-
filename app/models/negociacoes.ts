import { Negociacao } from "./negociacao";

export class Negociacoes {                                          
    // Array que recebe todo e somente o componente visto em negociação. Ele também poderia receber tipos primitivos como <string> ou mesmo <boolean> 
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();