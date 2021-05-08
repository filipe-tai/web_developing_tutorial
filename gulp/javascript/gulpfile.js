const { series } = require("gulp")
const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

function transformacaoJS(cb) {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false, // os comentários não vão ser importados
            presets: ["env"] // vai transformar para o versão de js mais recente
        }))
        .pipe(uglify()) // pega no código todo e insere numa linha só
        .on("error", err => console.log(err))
        .pipe(concat("codigo.min.js"))
        .pipe(gulp.dest("build"))

    // return cb()
}

function fim(cb) {
    console.log("Fim!!")
    return cb()
}

exports.default = series(transformacaoJS, fim)