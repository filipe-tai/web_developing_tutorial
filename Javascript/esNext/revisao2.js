//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))


//Arrow Function (this)
const lexico1 = () => console.log(this === exports) //this está a ser chamado num módulo do node, console.log, por isso é igual a exports
const lexico2 = lexico1.bind({}) //função arrow não funciona, mas se fosse uma função normal, com este bind(), o this passaria a apontar para o objeto {}
lexico1()
lexico2()


//Parâmetro Default
function log(texto = "Node") {
    console.log(texto)
}
log()
log(null)
log("Sou mais forte")


//Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))