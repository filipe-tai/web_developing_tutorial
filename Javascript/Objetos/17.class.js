class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//heranca continua com o tipo prototype
class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        //comando super chama a cadeia de heranca. Neste caso a class Avo
        //vai receber o parâmetro this.sobrenome = sobrenome do avo
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        //ao definir o valor, vai passar para as classes acima o mesmo valor
        //para este caso, o Silva vai ser definido para o sobrenome do Pai e Avo
        super("Silva")
    }
}

const filho = new Filho
console.log(filho)
