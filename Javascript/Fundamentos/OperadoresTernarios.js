const resultado1 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

//o código acima é o mesmo que o de baixo
function resultado2(nota) {
    if(nota >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    } 
}

console.log(resultado1(8))
console.log(resultado2(6))