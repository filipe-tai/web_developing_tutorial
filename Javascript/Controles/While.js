function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max- min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi: ${opcao}.`)
}

console.log('Até à próxima!')

var aObject = [
    {
        a: 1
    },
    {
        a: 2
    },
    {
        a: 1
    }
]

function test2(array) {
    for (var i of array) {
        if(i.a == 2) {
            var a = array.indexOf(i)
            console.log(a)
            array.splice(a, 1)
        }
    }
    console.log(array)
    
}

console.log(test2(aObject))