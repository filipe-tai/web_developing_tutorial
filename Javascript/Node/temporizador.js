const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob("*/5 * 20 * * 1", function() {
    console.log("Executando tarefa1", new Date().getSeconds())
}) //executar de 5 em 5 seg, qq min, às 12h, qq dia, qq mês, segunda-feira (0 = domingo)

setTimeout(function() {
    //cancelar a tarefa1 ao fim de 20 seg
    tarefa1.cancel()
    console.log("Cancelado Tarefa1")
}, 20000)


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //segudna a sexta
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log("Executando tarefa2!", new Date().getSeconds())
})

console.log(tarefa1)