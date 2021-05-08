function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        /*como foi criada uma função arrow, o this não vai mudar entre o pai e filho.
        O THIS referencia o contexto léxico onde foi criado, que neste caso é a função pessoa*/
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa