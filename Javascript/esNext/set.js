//não aceita repetição e não é indexado
const clubes = new Set()
clubes.add("Benfica")
clubes.add("Porto").add("Sporting")
clubes.add("Belenenses")
clubes.add("Benfica") //repetido, vai ser ignorado

console.log(clubes)
console.log(clubes.size)
console.log(clubes.has("benfica")) //case sensitive
console.log(clubes.has("Benfica"))
clubes.delete("Belenenses")
console.log(clubes.has("Belenenses"))

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"]
const nomesSet = new Set(nomes) //repetições são removidas
console.log(nomesSet)