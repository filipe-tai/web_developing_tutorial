const gulp = require("gulp")
const { series, parallel } = require("gulp")
// const series = gulp.series //alternativa para chamar o series

const antes1 = cb => {
    console.log("Tarefa Antes 1!")
    return cb()
}

const antes2 = cb => {
    console.log("Tarefa Antes 2!")
    return cb()
}

function copiar(cb) {
    // gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    gulp.src("pastaA/**/*.txt") // qualquer arquivo, assim como as pastas, na pasta A com a extensão txt
        // .pipe(imagePelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        // o pipe é a forma de aplicar transformações através de funções sobre os ficheiros scr
        .pipe(gulp.dest("pastaB")) // resultado das transforamções são guardadas numa pasta destino
    return cb()
}

const fim = cb => {
    console.log("Tarefa Fim!")
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)