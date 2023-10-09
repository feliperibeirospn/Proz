// Criando um elemento para o título
let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Massa de pizza";

let body = document.querySelector("body");

body.appendChild(titulo);


let produto = document.createElement("div");


produto.innerHTML = `
  <div>
    <h2>Massa Grande</h2>
    <img src="https://pin.it/14h8qZZ" alt="Pizza">
    <p>Massa.</p>
    <p id="preco-pizza">R$ 9.99</p>
  </div>
`;

body.appendChild(produto)