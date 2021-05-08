function compras(trabalho1, trabalho2) {
    const comprarGelado = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
//    const comprarTv32 = !!(trabalho1 ^ trabalho2); //bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarGelado;
    //recurso novo do ES2015 - não é necessário descrever o campo e o valor do campo,
    //basta introduzir o nome do campo que irá devolver o nome do campo e o seu valor
    return {
        comprarGelado,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))