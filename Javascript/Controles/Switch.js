const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 20:
        case 19:
        case 18:
            console.log('Quadro de Honra')
            break //apenas com este comando consegue executar apenas o código acima e sair do switch
        case 17: case 16: case 15: case 14: case 13: case 12: case 11: case 10:
            console.log('Aprovado');
            break
        case 9: case 8: case 7:
            console.log('Recuperação');
            break;
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break;
        default: //comando para executar caso nenhum case do switch seja executado
            console.log('Nota inválida');
    }   
}

imprimirResultado(20);
imprimirResultado(17.4);
imprimirResultado(7);
imprimirResultado(6.4);
imprimirResultado(-1);
imprimirResultado(21);
