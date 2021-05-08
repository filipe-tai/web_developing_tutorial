const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    //Irá devolver "Global" pois tem em conta o local onde foi declarada e não executada
    minhaFuncao()
}

exec()