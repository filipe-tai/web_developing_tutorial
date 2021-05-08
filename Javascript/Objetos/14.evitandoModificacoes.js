//Object.preventExtensions - evitar que sejam adicionados atributos, mas podem ser eliminados
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "Promoção"
})

console.log("Extensível:", Object.isExtensible(produto))

//é permitido alterar dados
produto.nome = "Borracha"
//não é permitido adicionar novos atributos
produto.descrição = "Borracha escolar branca"
//é permitido eliminar atributos
delete produto.tag
console.log(produto)


//Object.seal - não permite adicionar nem eliminar atributos, somente alterar 
const pessoa = {
    nome: "Juliana",
    idade: 35
}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

//não é permitido adicionar novos atributos
pessoa.sobrenome = "Silva"
//não é permitido eliminar novos atributos
delete pessoa.nome
//é permitido alterar novos atributos
pessoa.idade = 36
console.log(pessoa)

//Object.freeze - não permite qualquer tipo de alteração ao objecto