//o comando DO/WHILE não é comum, normalemente é usado apenas o WHILE

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max- min) + min;
    return Math.floor(valor);
}

let opcao = 0;

//ao usar o do, obriga a que o bloco seja corrido pelo menos uma vez
//caso o valor da variável opcao seja -1, o bloco irá sempre correr uma vez
 do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi: ${opcao}.`)
} while (opcao != -1) //único controlo que tem o comando a seguir ao bloco

console.log('Até à próxima!')