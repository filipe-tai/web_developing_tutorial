const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

let carrinho2 = carrinho.map(function(valor) {
    return JSON.parse(valor)
})
console.log(carrinho2)

let precario = carrinho2.map(function (valor) {
    return valor.preco
})
console.log(precario)
