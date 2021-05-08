//syntax para criar uma função
const soma1 = function(a, b) {
    console.log(a + b);
} //atribuir uma função a uma variável

const soma2 = (a, b) => {
    return a + b;
} //arrow function

const soma3 = (a, b) => a - b //arrow function com o retorno implicito
 


//////////////////////argumentos aceites pela função////////////////

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) //o segundo argumento é lido como undefined
imprimirSoma(2,3,4,5,6,7,8,9,10) //apenas lê os dois primeiros valores
imprimirSoma() //os dois argumentos são lidos como undefined

function soma(a, b = 0) {
    return a + b;
}

console.log(soma(1))
console.log(soma(1,2))


