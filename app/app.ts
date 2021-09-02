import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao (new Date(), 10, 100);
console.log(negociacao.volume);
alert('Hello Typescript')


/////////////////////////////////////////////////////////////////////////////
// yarn run server - para iniciar o servidor. Opção setada previamente no package.json
// yarn run compile - para verificar erros antes de compilar
// yarn run watch - coloca o modo de observação em mudanças nos arquivos
// yarn run start - para iniciar o compilador do Typescript e permitir alterações automáticas
// Tudo em "Dist" é compilado do TS seguindo a mesma árvore criada na aba de models!