/////////////////////////////variáveis em Loop///////////////////////

//com variável var, todos os valores da array serão iguais ao último
//valor que i pode tomar
const funcs1 = [];

for(var i = 0; i < 10; i++) {
    funcs1.push(function() {
        console.log(i);
    })
}
funcs1[2] ();
funcs1[8] ();


//com variável let, os valores que i tomar será guardado na memória
//pelo que fora do bloco, a array irá ter todos os valores 
const funcs2 = [];

for(let i = 0; i < 10; i++) {
    funcs2.push(function() {
        console.log(i);
    })
}
funcs2[2] ();
funcs2[8] ();