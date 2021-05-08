function boaNota(valor) {
    if(valor) {
        console.log('A nota foi: ' + valor)
    }
}
console.log(boaNota(7))

function passarDeAno(nota) {
    if(nota > 9.5) {
        console.log('Aprovado')
    } else {
        console.log(('Reprovado'))
    }
}
console.log(passarDeAno(10))

function teste(total) {
    if(total) //sem as chavetas para definir o bloco, apenas a linha seguinte faz parte do IF  
        console.log('Primeiro')
        console.log('Segundo')
}
console.log(teste('Total'))
console.log(teste())