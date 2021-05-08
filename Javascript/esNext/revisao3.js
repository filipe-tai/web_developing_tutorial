//ES8: Object.values e Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))


//Melhorias da Notação Literal
const nome = "Carla"
const pessoa = {
    nome, //o valor deste propriedade vai ser o que foi declarado acima
    ola() {
        return "Oi gente!"
    }
}
console.log(pessoa.nome, pessoa.ola())


//Class - class em js acaba por ser tranformada em um função
class Animal {}
class Cachorro extends Animal {
    falar() {
        return "Au Au!"
    }
}

console.log(new Cachorro().falar()) //criar o objeto com a classe, pode ser usado o new para instanciá-la