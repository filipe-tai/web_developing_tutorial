const pessoa = {
    saudacao: "Bom dia",
    falar() { //ES2015 - criar uma propriedade como função desta forma em vez de falar: function() {}
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e 00

/*apesar da variável ter sido definida como a função do objecto, por estar inserida dentro de pessoa,
não é possível chamar a função falar diretamente no código. Para isso é preciso um BIND*/
//dentro do contexto da função falar, o THIS refere à constante pessoa
/*agora sempre que a função falar for chamada diretamente no contexto global,
irá se referenciar ao THIS pessoa*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//a função falar não foi alterada com o BIND acima, apenas a variável onde foi definida é que a pode usar
const falarDePessoa2 = pessoa.falar
falarDePessoa2()