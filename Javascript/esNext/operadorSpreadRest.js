//Operador ...rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionarios = {nome: "Maria", salário: 2500}
const clone = {ativo: true, ...funcionarios} //esta é uma variável cópia, pelo que alterar no clone, não irá impactar no funcionarios
console.log(clone)


//usar spread com array
const grupoA = ["João", "Pedro", "Glória"]
const grupoFinal = ["Maria", ...grupoA, "Rafaela"]
console.log(grupoFinal)