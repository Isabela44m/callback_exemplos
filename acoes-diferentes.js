// EXEMPLO 02 - A mesma funcao executando acoes diferentes.

function ligar() {
console.log("Máquina ligada!");
}

function desligar() {
console.log("Máquina desligada!");
}

// "acao" é o nome do parametro que vai guardar a função recebida.
function controlarMaquina(acao) {
 acao(); // Executa a funcão que foi recebida neste momento.
}
controlarMaquina(ligar);// Entrega a funcao ligar.
controlarMaquina(desligar); // Agora entrega a função desligar.
// SAÍDA: Máquina ligada! / Máquina desligada!

