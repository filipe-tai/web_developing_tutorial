//map - criar uma array a partir de outro alterando os seus valores
//o segundo array vai ser uma array com o mesmo length que a original

const num = [1, 2, 3, 4, 5, 6]

//map - For com propósito
let num2 = num.map(function(valor) {
    return valor * 2
})
console.log(num2, num)

const soma10 = valor => valor + 10
const triplo = valor => valor * 3
const paraDinheiro = valor => `${parseFloat(valor).toFixed(2).replace('.', ',')}€`

num2 = num.map(soma10).map(triplo).map(paraDinheiro)
console.log(num2)
