let nomeDoArrayObjetos = [
  { nome: "chocolate", preco: 10, estoque: 5 },
  { nome: "mel", preco: 20, estoque: 8 },
  { nome: "aveia", preco: 15, estoque: 12 },
  { nome: "arroz", preco: 30, estoque: 3 },
  { nome: "flores", preco: 25, estoque: 9 },
  { nome: "carrinho", preco: 18, estoque: 7 },
  { nome: "carne", preco: 40, estoque: 2 },
  { nome: "macarrao", preco: 12, estoque: 11 },
  { nome: "azeite", preco: 22, estoque: 6 },
  { nome: "champanhe", preco: 35, estoque: 4 }
];

console.log(nomeDoArrayObjetos[1].preco);

console.log(nomeDoArrayObjetos[2].nome);

console.log(nomeDoArrayObjetos.length);

for (let i = 0; i < nomeDoArrayObjetos.length; i++) {
  console.log(nomeDoArrayObjetos[i].nome);
}

let totalEstoque = 0;

for (let i = 0; i < nomeDoArrayObjetos.length; i++) {
  totalEstoque += nomeDoArrayObjetos[i].estoque;
}

console.log("Total em estoque:", totalEstoque);

let maiorEstoque = nomeDoArrayObjetos[0];

for (let i = 1; i < nomeDoArrayObjetos.length; i++) {
  if (nomeDoArrayObjetos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = nomeDoArrayObjetos[i];
  }
}

console.log("Maior estoque:", maiorEstoque);

