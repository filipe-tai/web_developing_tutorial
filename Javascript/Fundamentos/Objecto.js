const object1 = {
    produtos: {
        prod1nome : "Telemóvel",
        prod2nome : "Computador"
    },
    morada: "Areeiro"
}

object1.veiculos = {};
object1.veiculos.vei1 = "Carro";
object1["veiculos"]["vei2"] = "Avião"; //evitar usar este tipo de syntax

console.log(object1.produtos)
console.log(object1.morada)
console.log(object1.veiculos);