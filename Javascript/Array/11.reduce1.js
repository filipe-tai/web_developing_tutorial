const alunos = [
    {nome:"João", nota: 7.3, bolseiro: false},
    {nome:"Maria", nota: 9.2, bolseiro: true},
    {nome:"Pedro", nota: 9.8, bolseiro: false},
    {nome:"Ana", nota: 8.7, bolseiro: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador += atual
}, "Teste") //passar o valor inicial (opcional). Pode ser do tipo num ou string
 
console.log(resultado)

