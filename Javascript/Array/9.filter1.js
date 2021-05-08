

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    //return false //nenhum elemento vai aparecer na array final
    //return true //todos os elementos vão aparecer na array final
    //return p.preco > 2500
    return p.preco > 500 && p.fragil
}))

const caro = p => p.preco >= 500
const fragil = p => p.fragil

const produtos2 = produtos.filter(caro).filter(fragil)
console.log(produtos2)


var a = "oAbcSelect"
var c = "pAbcInput"
console.log(a.search("Select"))
console.log(c.search("Select"))