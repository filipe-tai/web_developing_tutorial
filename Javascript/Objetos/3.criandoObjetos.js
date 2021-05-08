//usando a notação literal (diferente de json)
const obj1 = {}
console.log(obj1)

//object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPreco = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2998.99, 0.25)
console.log(p1.getPreco(), p2.getPreco())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return salarioBase / 30 * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario("João", 1000, 4)
const f2 = new criarFuncionario("Ana", 1200, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

//uma função famosa que retorn Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
console.log(fromJSON)