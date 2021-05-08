class Lancamento {
    constructor(nome = "Gerénico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { valorConsolidado += l.valor
        })
        return valorConsolidado 
    }
}

const salario = new Lancamento("Salário", 2000)
const contaLuz = new Lancamento("Luz", -220)

const contas = new cicloFinanceiro(2, 2020)
contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())