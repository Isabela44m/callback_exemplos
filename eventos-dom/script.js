//(introdução ao DOM).
// DOM = representação da página HTML que o JavaScript consegue consultar e alterar.
// PARA TESTAR: abra index.html no navegador; estescript nao roda sozinho no Node.

// document representa a pagina HTML aberta no navegador.
// querySelector("#btn") localiza o elemento cujoid é "btn".
const botao = document.querySelector("#btn");

// Localiza o parágrafo cujo id é "status".
const status = document.querySelector("#status");

// Esta função será nosso callback: ela descreve o que deve acontecer no clique.
function acenderLuz() {
// textContent altera o TEXTO exibido dentro do parágrafo.
status.textContent = "Luz acesa!";
}

// addEventListener registra um "ouvinte" de evento
// "click" é o tipo de evento: o usuário clica nobotão.
// acenderLuz SEM parênteses: entregamos a função para o navegador.
// O navegador chama essa funcao quando acontecer o clique.
botao.addEventListener("click", acenderLuz);