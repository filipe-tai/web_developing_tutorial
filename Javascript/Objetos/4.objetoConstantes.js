// pessoa -> 123 -> {...}
// a pessoa é uma constante, ou seja não é possível modificar
const pessoa = { nome: 'João',
                end: "Avenida 123" }
// o atributo nome pode ser alterado porque na prática, a constante pessoa não está a ser alterado mas sim o atributo
pessoa.nome = 'Pedro'

//não pode criar um novo objeto 
//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }

//congelar o objeto, não é permitido alterar os atributos
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)