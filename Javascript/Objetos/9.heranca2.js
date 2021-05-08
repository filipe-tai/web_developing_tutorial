//Cadeia de protótipos (prototype chain)

const avo = { attr1: "A", attr2: "2"}
//referenciar o objeto "pai" é através no próprio objeto
const pai = {__proto__: avo, attr2: "B"}
const filho = {__proto__: pai, attr3: "C"}
console.log(filho.attr1)
console.log(filho.attr0)
//os objectos declarados não têm "attr0" na cadeia de protótipos, o primeiro objeto
//vai sempre apontar para Object.prototype, pelo que se for declarado diretamente,
//onde quer que seja chamada, irá sempre encontrar essa propriedade declarada
Object.prototype.attr0 = "Z" //cuidado ao usar porque impacta em todos os objetos
console.log(filho.attr0)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }    
}

const ferrari = {
    modelo: "F40",
    velMax: 340 //shadowing - criar o objeto ferrari com o protótipo carro e o valor e velMax ser subscrita
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}` //super obriga a usar a propriedade do protótipo
    }
}

//estabelcer uma relação entre o ferrari e carro com o carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())