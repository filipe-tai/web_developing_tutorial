//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
//console.log(b) //let é definido dentro do bloco e só pode ser acessado no próprio bloco


//Template String
const produto = "iPad"
console.log(`${produto} é caro`) //String `` pode ser adicionado variáveis e fazer parágrafo através do enter


//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] =[1, 2]
console.log(x, y)

const {idade: i, nome} = {nome: "Ana", idade: 21} //idade: i - renomear a propriedade
console.log(i, nome)