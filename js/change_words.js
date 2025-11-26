document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".hero_h1_item");
  let index = 0;

  setInterval(() => {
    // remover active del actual
    items[index].classList.remove("active");

    // pasar al siguiente
    index = (index + 1) % items.length;

    // activar el siguiente
    items[index].classList.add("active");

  }, 3000); // cada 3 segundos

});