const pessoa = {
    nome: 'Ana',
    idade: 29,
    peso: 59
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//a chave e valor são as keys e values da array criada na chamada Object.entries(pessoa)
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

//é possível definir outras propriedades para esta propriedade além do valor
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: false, //vai ser listado
    writable: false, //não permite ser modificado
    value: "01/01/2020"
})

pessoa.dataNascimento = "22/03/2020"
console.log(pessoa.dataNascimento)
//dataNascimento vai aparecer consoante o valor de enumerable
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//adiciona as propriedades dos objetos ao PRIMEIRO objeto
//se o campo já existir, o valor será do último objeto inserido
const obj = Object.assign(dest, o1, o2)

//Object.freeze(obj)
obj.c = 1234
console.log(obj)

