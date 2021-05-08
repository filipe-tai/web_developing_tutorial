function Pessoa(nome) {
        this.nome = nome

    this.criarFrase = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const P1 = new Pessoa('Ana')
P1.criarFrase()