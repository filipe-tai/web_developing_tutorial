//instanciaUnica exporta um objeto
//apenas foi exportado um objeto a partir do node e ficou guardado no cache
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//instanciaNova exporta uma função
//novas instancias criadas a partir de uma factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//como o node faz cache, guarda os valores chamados no contador A e reflete no contador B
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//como foi criada uma nova instancia, o valor não fica acumalado entre instancias
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)