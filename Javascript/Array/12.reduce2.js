const alunos = [
    {nome:"João", nota: 7.3, bolseiro: false},
    {nome:"Maria", nota: 9.2, bolseiro: true},
    {nome:"Pedro", nota: 9.8, bolseiro: false},
    {nome:"Ana", nota: 8.7, bolseiro: true},
]

//Desafio 1: Todos os alunos são bolseiros?
const todosBolseiros = (resultado, bolseiro) => resultado && bolseiro //soma false e true

console.log(alunos.map(a => a.bolseiro).reduce(todosBolseiros))

//Desafio 2: Algum aluno é bolseiro?
const algumBolseiro = (resultado, bolseiro) => resultado || bolseiro //algum deles é true
console.log(alunos.map(a => a.bolseiro).reduce(algumBolseiro))