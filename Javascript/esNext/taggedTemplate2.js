function real(partes, ...valores) {
    const resultado = []

    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `€${valor.toFixed(2)}`
        resultado.push(partes[0], valor)
    })
    return resultado.join("")
}

const preco = 29.99
const precoPrestacao = 11

console.log(`1x de ${preco} ou 3x de ${precoPrestacao}`)
console.log(real `1x de ${preco} ou 3x de ${precoPrestacao}`) //chama a função real() e irá adicionar a moeda antes de cada valor