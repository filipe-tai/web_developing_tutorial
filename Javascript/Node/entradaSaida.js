//chamada no TERMINAL "node entradaSaida.js -a"
const anonimo = process.argv.indexOf("-a") !== -1
console.log(anonimo)

if(anonimo) {
    //vai ser devolvido depois da chamada
    //\n simula o enter do usuário
    process.stdout.write("Fala Anónimo!\n")
    //sai do programa
    process.exit()
} else {
    process.stdout.write("Informe o seu nome: ")
    
    //evento on("data") - evento após digitar dados e clicar no enter
    //input de data
    process.stdin.on("data", data => {
        const nome = data.toString().replace("\n", "") //substitui o enter (\n) por "" para não ser executado
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}