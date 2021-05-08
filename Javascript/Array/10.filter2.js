Array.prototype.filter2 = function(callback) {
    var newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil
}))

const caro = p => p.preco >= 500
const fragil = p => p.fragil

const produtos2 = produtos.filter2(caro).filter2(fragil)
console.log(produtos2)