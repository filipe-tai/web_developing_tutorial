function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: '15%'
    }
}

console.log(criarProduto('Maçã', '1€/kg'))