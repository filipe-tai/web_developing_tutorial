//com promise
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

/* let nomes = []
getTurma("A").then(alunos => {
    //console.log(alunos)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma("B").then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma("C").then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nomes}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])//Promise.all() irá encadear todas as chamadas
    .then(turmas => [].concat(...turmas))//o valor recebido no then é uma array com 3 arrays (uma de cada turma). No final irá retornar numa só array o resultado de todas as chamadas
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) //definir sempre o catch no Promise para tratar dos erros

//getTurma("D").catch(e => console.log(e.message))