function area(largura, altura) {
    const area = largura * altura;
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) //segundo parâmetro não é um número
console.log(area()) //não existem parâmetros do tipo número
console.log(area(2, 3, 17, 22, 44)) //apenas lê os dois primeiros parâmetros
console.log(area(5, 5))