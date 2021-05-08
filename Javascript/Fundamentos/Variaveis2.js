/////////////definição das variáveis (scope Local vs Global)///////////

//as variáveis podem ser definidas localmente ou globalmente (scope)
//por exemplo uma variável var definida dentro de uma função é uma var local, e fora da função é global
function local() {
    var varLocal = 3;
    console.log(varLocal); //devolve 3
}
console.log(local())
//console.log(varLocal) //variável não definida

//uma variável let só é visível dentro do bloco onde é definida. Caso não seja definida dentro do scope
//onde está a ser chamada, irá procurar no scope acima até ao scope global
var numero = 1;
{
    let numero = 2
    console.log("Dentro: ", numero)
}
console.log("Fora: ", numero)