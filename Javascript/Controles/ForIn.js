const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

//i irá retornar os indíces dos vários elementos da array
for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    apelido: 'Silva',
    idade: 24
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}