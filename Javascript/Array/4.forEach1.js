const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']
//função callback do forEach só recebe o valor, indice e a array original

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
    console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

var a = "0998.S11RAc/RT/Obs%2006"
var b = decodeURI(a)
console.log(b)
var c = encodeURIComponent(b)
console.log(c)
var d = decodeURIComponent(c)
console.log(d)


var array = [2, 1, 1, 2, 1]

parse

for (var a = 0; a < array.length; a++) {
    if(array[a] == 1) {
        array.splice(a,1)
        a--
    }
}

console.log(array)
