//Nesta estratégia, se não for passado nenhum valor, vai assumir o valor padrão (valor aseguir ao ||)
//Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1 //verifica se existe o primeiro parâmetro de entrada
    b = 1 in arguments ? b : 1 //verifica o 2 parâmetro de entrada
    c = isNaN(c) ? 1 : c //se o parâmetro não for do tipo número
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrão do es2015
function soma3( a= 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))