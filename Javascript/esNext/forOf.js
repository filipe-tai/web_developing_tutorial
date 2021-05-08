for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ["Map", "Set", "Promise"]

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ["Map", { abordados: true }],
    ["Set", { abordados: true }],
    ["Promise", { abordados: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log([chave, valor])
}

const s = new Set(["a", "b", "c"])
for (letra of s) {
    console.log(letra)
}