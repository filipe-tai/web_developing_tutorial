console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//o this usado em cada função, acede o valor passado antes de chamar a função implementada

//implementar uma função que não existe para string
//pode ser executada sempre que uma string chama a mesma função
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([0,2,4,6,8,10].first())
console.log(["a","b","c","d","e","f"].first())

//subscrever o comportamento de uma função
//DEVE SER FEITO COM MUITO CUIDADO
//AVALIAR TODOS OS IMPACTOS CASO SEJA IMPEMENTADO
String.prototype.toString = function() {
    return "Estragou tudo"
}

console.log("Escola Cod3r".toString())