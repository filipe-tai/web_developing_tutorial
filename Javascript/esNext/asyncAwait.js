const http = require("http")

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resp => {
            let resultado = ""

            resp.on("data", dados => {
                resultado += dados
            })

            resp.on("end", () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso adicionado ao ES8
//Objetivo de simplificar o uso de promises...
let obterAlunos = async() => {
    //cada const vai receber o resultado da turma correspondente
    const ta = await getTurma("A")
    const tb = await getTurma("B")
    const tc = await getTurma("C")
    return [].concat(ta,tb,tc)
} //retorna um objeto AsyncFuncion

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))