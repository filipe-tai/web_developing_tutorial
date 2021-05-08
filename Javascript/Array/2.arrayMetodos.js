const piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

piloto.pop() //remove o último elemento da array
console.log(piloto)

piloto.push('Verstappen')
console.log(piloto)

piloto.shift() //remove o primeiro elemento
console.log(piloto)

piloto.unshift('Hamilton') //adiciona como primeiro elemento
console.log(piloto)

//splice

piloto.splice(2, 0, 'Bottas', 'Massa')
console.log(piloto)

piloto.splice(3, 1)
console.log(piloto)

//slice - gera um novo array a partir do original
const algunsPilotos1 = piloto.slice(2)
console.log("algunsPilotos1:", algunsPilotos1)

const algunsPilotos2 = piloto.slice(2, 4)
console.log("algunsPilotos2:", algunsPilotos2)