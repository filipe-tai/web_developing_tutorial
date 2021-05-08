//Nomenclatura de ficheiro - Cliente quer dizer que vai aceder aos outros ficheiros

//'./moduloA' (relative path) - o . quer dizer que está na mesma pasta para aceder ao módulo A
//require é o comando que chama/importa os outros ficheiros
const moduloA = require('./moduloA') //vai importar tudo o que foi exportado do móduloA
const moduloB = require('./moduloB') //vai importar tudo o que foi exportado do móduloB

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) //apesar de no móduloA não ter sido criado um objeto, vai retornar os elementos num objeto

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)