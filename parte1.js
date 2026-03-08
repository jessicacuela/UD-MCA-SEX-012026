let nomeDoArray = [
  "Maçã", "Banana", "Uva", "Laranja", "Manga",
  "Abacaxi", "Morango", "Kiwi", "Melancia", "Pera",
  "Limão", "Cereja", "Pêssego", "Ameixa", "Goiaba",
  "Mamão", "Caju", "Figo", "Framboesa", "Maracujá"
];

console.log(nomeDoArray[0]);  // posição 0
console.log(nomeDoArray[7]);  // posição 7
console.log(nomeDoArray[11]); // posição 11
console.log(nomeDoArray[15]); // posição 15
console.log(nomeDoArray[18]); // posição 18
console.log(nomeDoArray[20]); // posição 20

console.log(nomeDoArray[nomeDoArray.length - 2]); // penúltima
console.log(nomeDoArray[nomeDoArray.length - 1]); // última

console.log(nomeDoArray.length);

nomeDoArray.push("Carambola");

for (let i = 0; i < nomeDoArray.length; i++) {
  console.log(nomeDoArray[i]);
}