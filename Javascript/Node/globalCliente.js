require('./global')

console.log(MinhaApp.saudacao())

//no ficheiro global.js foi definido o freeze do objeto
MinhaApp.nome = 'Eita!'

console.log(MinhaApp.nome)