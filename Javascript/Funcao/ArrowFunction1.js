/*ES2015 criou as funções arrow para reduzir a syntax e definir o THIS no local 
onde é definida e mantê-la constante*/

//tradicional
let dobro = function(a) {
    return 2 * a
}

//não pode ser chamada diretamente, tem de ser atribuída a uma variável para ser usada
dobro = (a) => {
    return 2 * a
}

//return implicito
//usado quando o código da função tem apenas uma linha
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola =function() {
    return 'Olá'
}

//funções sem parâmetros de entrada
ola = () => 'Olá'
ola = _ = 'Olá' //possui parâmetro mas ignora no momento de execução
console.log(ola)