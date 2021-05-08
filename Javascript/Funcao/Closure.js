//Closure é o scope criado quando uma função é declarada
//Esse scope permite a função acessare manipular variáveis externas à função

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

 const minhaFuncao = fora()
 console.log(minhaFuncao())