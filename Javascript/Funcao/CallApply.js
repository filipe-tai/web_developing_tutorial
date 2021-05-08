function getPreco(imposto = 0, moeda = '€R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco()) //esta chamada executa a função com os dados da constante produto

const carro = {
    preco: 49990,
    desc: 0.20
}

//CALL e APPLY vai executar a função com os dados do scope que está a ser chamada no primeiro argumento
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//o CALL e o APPLY diferenciam-se na chamada
console.log(getPreco.call(carro, 0.17, '$')) //cada parâmetro é um input na função
console.log(getPreco.apply(global, [0.17, '$'])) //os parâmetros têm que ser passados como um array