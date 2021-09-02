import { NegociacaoController } from "./models/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault;
    controller.adiciona();
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// Baixa o compilador do Typescript pelo Node via NPM / Yarn
// Depois de instalado precisamos criar o arquivo tsconfig.json que é o arquivo central
// Precisamos dizer no "include" onde está a pasta com arquivos Typescript
// Precisamos dizer também no "compileOptions" onde os arquivos compilados serão gerados
// Por isso a importância de criar o "outDir" e apontar pra pasta Dist onde ficará o JS 
//
// Comandos:
// yarn run server - para iniciar o servidor. Opção setada previamente no package.json
// yarn run compile - para verificar erros antes de compilar
// yarn run watch - coloca o modo de observação em mudanças nos arquivos e atualiza automaticamente
// yarn run start - principal para startar e permitir alterações automáticas
// Tudo em "Dist" é compilado do TS seguindo a mesma árvore criada na aba de models!
////////////////////////////////////////////////////////////////////////////////////////////////////