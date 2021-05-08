function Pessoa1() {
    this.idade = 0;
    
    //a cada 1000 milisegundos será executada a função passada no 1º parâmetro
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
/*o BIND(THIS) irá associar a função onde é chamada ao contexto pai pelo que as variáveis
referenciadas no filho terão os valores do pai*/
//sem o BIND, o this.idade não tem valor
//com o BIND, o this.idade é igual a 0, valor definido no contexto pai
new Pessoa1

function Pessoa2() {
    this.idade = 0;
    //é o mesmo que that em Fiori e permite que a função filho utilize o código definido no pai sem o BIND
    const self = this 
    //a cada 1000 milisegundos será executada a função passada no 1º parâmetro
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new Pessoa2()