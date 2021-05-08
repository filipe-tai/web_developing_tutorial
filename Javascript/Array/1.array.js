console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
//push insere um elemento no final da array
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados[8] === undefined, aprovados[8] === null)
//sorte ordena o array segundo condição inserida
aprovados.sort()
console.log(aprovados)

//elimina o valor do elemento, mas não elimina a posição
delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//adiciona e remove elementos na array
//splice(início, quantos elimina, elementos a adicionar)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)


var aType = "A"
var i = 6

var test = function() {

    if(aType == "A" && (i === 5 || i === 6)) {
    return "resultou"
    } else {
        return "não resultou"
    }
}

console.log(test())