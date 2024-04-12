const carrito = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>`;
const heart = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`;
window.addEventListener("load", (e) => {
  let idImg = 1;
  function cambiarImagen() {
    const imagen = document.querySelector("#carrousel-img");
    if (idImg > 3) {
      idImg = 1;
    }
    imagen.src = `./src/img/carrousel/carrouselImg${idImg}.png`;
    idImg++;
    setTimeout(cambiarImagen, 2000); // 2000 milisegundos = 2 segundos
  }
  cambiarImagen(); // Llamada inicial para iniciar el ciclo
  fetch("productos.json")
    .then((response) => response.json())
    .then((data) => {
      cargarComponentes(data);
    });
  const cargarComponentes = (productosList) => {
    productosList.forEach((element) => {
      document.querySelector("#ventas").innerHTML += `<article class="manga">
      <div class="manga-photo">
      <img class="manga-img" src="${element.imgUrl}" />
      <span class="manga-like">${heart}</span>
        </div>
        <div class="manga-descripcion">
        <h3 class="manga-nombre">${element.name}</h3>
        <span class="manga-precio">$${element.precio}</span>
        <div class="manga-icon"><a class="manga-iconVerMas">Ver mas detalles</a><button class="manga-iconBtn"> ${carrito}</button></div>
        </div>
      </article>`;
    });
  };
});
