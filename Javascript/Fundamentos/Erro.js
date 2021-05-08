function tratarErro(erro) {
    //throw new Error('...') //inicia esta mensagem de erro
    //throw 10
    //throw false
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeEmCaps(obj) {
    try { //tenta executa este código
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch(e) { //caso haja um erro, será tratado aqui. O argumento e irá devolver os valores relativo ao próprio erro
        tratarErro(e)
    } finally { //corre este código haja erro ou não
        console.log('Final')
    }
}

const obj = { nome: 'Ana'}
imprimirNomeEmCaps(obj)