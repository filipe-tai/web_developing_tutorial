const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem usar o callback
semCallbak = array => {
    let resultado = []
    for(i in notas) {
        if(notas[i] < 7) {
            resultado.push(notas[i])
        } else {
            continue
        }
    }
    return resultado
}
console.log(semCallbak(notas))

const comCallback1 = notas.filter(function(nota) {
    return nota < 7
})
console.log(comCallback1)

const comCallback2 = notas.filter(nota => {
    return nota < 7
})
console.log(comCallback2)