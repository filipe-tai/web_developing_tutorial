const fs = require("fs")

const produto = {
    nome: "Telemóvel",
    preco: 259.99,
    desconto: 0.15
}

//guardar código num ficherio através do node
//como o ficheiro arquicoGerado.json não existe, foi criado na pasta __dirname
//o objeto tem de estar no formato de json
fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), (err) => {
    console.log(err || "Arquvo Guardado!")
})