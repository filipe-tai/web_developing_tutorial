//novo recurso ES2015 (ES6)

const pessoa = {
    nome: 'Ana',
    idade: '24',
    endereco: {
        morada: 'Avenida Principal',
        numero: '123'
    }
}

//extrair as prorpiedades de um objeto com o destructor {}
const {nome, idade} = pessoa
console.log(nome, idade)

//atribuir os valores a uma nova variável
const {nome: n, idade: i} = pessoa;
console.log(n, i)

//se for extraído uma propriedade que não foi definida, 
//vai retornar undefined. Neste synta
const {apelido, bemHumorada = true} = pessoa;
console.log(apelido, bemHumorada)

//extrair o objecto endereço e criar uma nova propriedade
const {endereco: {morada, numero, andar = "2ºesq"} }= pessoa;
console.log(morada, numero, andar)

//criar um novo objecto dentro do objeto pessoa
const { conta: {agencia = "Teste", num = 1} } = pessoa;
console.log(agencia, num)