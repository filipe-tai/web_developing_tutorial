let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(this) //false - por ser uma função normal, o this referencia o contexto onde é chamado
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//o THIS referencia ao contexto onde o console.log está a escrever. É um módulo dentro do node
let comparaComThisArrow1 = param => console.log(this === param)
comparaComThisArrow1(global)
comparaComThisArrow1(module.exports) //chama o contexto léxico do console.log
comparaComThisArrow1(this) //true - por ser uma função arrow, o this referencia sempre o mesmo this onde é criado

comparaComThisArrow2 = comparaComThisArrow1.bind(obj)
comparaComThisArrow2(obj) //arrow function é mais forte que o bind
comparaComThisArrow2(module.exports)
//o arrow function referencia o THIS ao contexto onde foi escrito pelo que o BIND não irá alterar