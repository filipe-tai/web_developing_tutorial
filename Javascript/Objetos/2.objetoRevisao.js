//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Genérica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Pedro",
        idade: 23,
        morada: {
            rua: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Ana",
        idade: 20
    },
    {
        nome: "Catarina",
        idade: 21
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.morada.numero = 1000
carro["proprietario"]["morada"]["rua"] = "Av. DEF"

console.log(carro)

//delete carro.condutores
delete carro.proprietario.morada
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)