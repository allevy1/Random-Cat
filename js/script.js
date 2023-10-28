const button = document.querySelector("#button");
const gatinho = document.querySelector("#imagem");
const URL = `https://api.thecatapi.com/v1/images/search`;

button.addEventListener("click", () => {
  gatinhoDaSorte();
});

async function gatinhoDaSorte() {
  try {
    const request = await fetch(URL);
    const response = await request.json();
    gatinho.src = response[0].url;
    console.log("rodou");
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
}

// let intervalo = setInterval(gatinhoDaSorte, 2000);
// setTimeout(() => {
//   clearInterval(intervalo);
//   console.log("parou");
// }, 20000);
