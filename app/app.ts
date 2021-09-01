import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao (new Date());
console.log(negociacao.volume);



// yarn run server - para startar
// yarn run compile - para verificar erros antes de compilar