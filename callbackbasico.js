// EXEMPLO 01 - Callback básico
// Objetivo: entender que podemos ENTREGAR uma função para outra função.

// Esta funcão sabe qual mensagem deve mostrar.
function dizerOla() {
console.log("Olá, turma!");
}

// O parametro "funcaoRecebida" recebera uma função.
// O nome do parametro é livre: não precisa se chamar "callback".
function executar(funcaoRecebida) {
funcaoRecebida(); // Os parênteses fazem a função recebida EXECUTAR.
}
// Sem parênteses: entregamos a função dizerola, sem executá-la aqui.
executar(dizerOla);
// SAÍDA: Ola, turma!