// EXEMPLO 07 - Executar um callback varias vezes.

// Recebe o número da repetição e mostra na tela do terminal.
function mostrarPasso(numero) {
console.log("Passo:", numero);
}

// A funcão repetir sabe quantas vezes deve chamar o callback.
function repetir(quantidade, callback) {
// O laço começa em 1 e vai até a quantidade desejada.
for (let i = 1; i <= quantidade; i++) {
callback(i); // Chama o callback entregando o numero atual.
}
}
repetir(3, mostrarPasso);
// SAIDA: Passo: 1 / Passo: 2 / Passo: 3