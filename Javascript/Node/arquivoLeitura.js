const fs = require('fs') //fs (file system) é um módulo previamente instalado pelo node

const caminho = __dirname + '/arquivo.json' //__dirname é o diretório/path de onde esta constante é chamada




//LER FICHEIRO
//sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

//assincrono
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//de forma sincrona poderá ter um impato grande na performance porque o comando seguinte só irá ser executado após o anterior estar terminado
//para ficherios grandes, pode levar algum tempo a ser processado
//caso seja pequeno, já não tem tanto impacto
//desta forma, a leutura assincrona é melhor neste caso



//LER PASTA
fs.readdir(__dirname, (err, arquivo) => {
    console.log("Conteúdo da pasta...")
    console.log(arquivo)
})