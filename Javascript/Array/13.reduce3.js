Array.prototype.reduce2 = function(callback, inicial) {
    const indiciceInicial = valorInicial ? 0 : 1
    var acumulador = inicial || this[0]
        
    for(let i = valorInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome:"João", nota: 7.3, bolseiro: false},
    {nome:"Maria", nota: 9.2, bolseiro: true},
    {nome:"Pedro", nota: 9.8, bolseiro: false},
    {nome:"Ana", nota: 8.7, bolseiro: true},
]

//Desafio 1: Todos os alunos são bolseiros?
const todosBolseiros = (resultado, bolseiro) => resultado && bolseiro //soma false e true

console.log(alunos.map(a => a.bolseiro).reduce2(todosBolseiros))

//Desafio 2: Algum aluno é bolseiro?
const algumBolseiro = (resultado, bolseiro) => resultado || bolseiro //algum deles é true
console.log(alunos.map(a => a.bolseiro).reduce2(algumBolseiro))