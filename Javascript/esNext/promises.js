function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { //resolve quando a promessa é cumprida e reject quando é rejeitdada (ex: erro)
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    }) 
}

falarDepoisDe(3, "Que fixe!")
    .then(frase => frase.concat("?!?!?")) //then irá aceder ao Promise da função, em que irá receber como parâmetro dde entrada o valor de frase de Resolve
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //aceder ao Reject