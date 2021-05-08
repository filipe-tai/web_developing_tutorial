console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//3 formas de declarar o module.exports
this.a = 1
exports.b = 2
module.exports.c = 3


exports = null //objeto exports é diferente dos 3 acima (os três referenciam ao modules.exports)
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

//por ser definido no module.exports, o objeto será exportado
module.exports = {publico: true}