//cuidado ao definir este tipo de variavaies globais porque pode alterar o objeto global de toda a applicação
//o correto é usar os modulos
//console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Fixe'
})