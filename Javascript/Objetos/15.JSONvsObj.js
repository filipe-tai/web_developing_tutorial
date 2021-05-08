//JSON - Javascript Object Notation
//apesar do nome ter Object, é diferente de um obj
const obj = {a: 1, b: 2,c: 3, soma() {return a + b + c} }
//a função é excluída do json porque este formato é textual e não recebe funções
console.log(JSON.stringify(obj))

//não funciona porque não aceita a string orignal no formato que está
//console.log(JSON.parse("{a: 1, b: 2, c: 3} "))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

//É REGRA - a string passada deve conter os atributos entre "" e não ''
//é possível usar só "" para abrir a string e para os atributos, mas para isso,
//é necessário usar o escape (\) para identificar que não é o final da string,
//mas sim algo no meio (\'string\')
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))

