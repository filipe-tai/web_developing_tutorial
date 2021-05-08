Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if(nota.entre(18, 20)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(10, 17.99)) {
        console.log('Aprovado')
    } else if(nota.entre(7, 9.4)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 6.9)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(20)
imprimirResultado(17)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(-1)
imprimirResultado(21)