function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula("Até Breve", 456)

console.log(aula1, aula2)

//função que simula a função "new"
//operador "..." concatena todos os parâmetros inseridos em um array
function novo(f, ... params) {
    const obj = {}
    obj.__proto__ = f.prototype
    //apply - executa a função f passando "obj.params" como argumento
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "Bem Vindo", 123)
const aula4 = novo(Aula, "Até Breve", 456)

console.log(aula3, aula4)