//Funções CALLBACK são funções que são chamadas quando um evento chamado

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
} 

//para cada elemento da array, o método forEach() irá devolver o valor e o indíce de cada elemento
//chamando apenas a função, sem dar valores aos argumentos, será executada com os dados acima referidos 
fabricantes.forEach(imprimir)

//o primeiro parâmetro do método forEach() será o valor de cada argumento
fabricantes.forEach(fabricante => console.log(fabricante))