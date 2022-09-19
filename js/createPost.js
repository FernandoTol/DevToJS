import { post } from "./credenciales.js";

// * POST
const getValueInput = () => {
  let usuario = document.querySelector("#usuario").value;
  let imagen = document.querySelector("#cover-image").value;
  let titulo = document.querySelector("#titulo").value;
  let etiqueta = document.querySelector("#etiquetas").value;
  let contenido = document.querySelector("#contenido").value;
  let imagenAvatar = document.querySelector("#imagen-avatar").value;
  let etiquetaArr = etiqueta.split(" ")
  const ObjetCard = {
    usuario: usuario,
    imagenPortada: imagen,
    title: titulo,
    etiquetas: etiquetaArr,
    contenido: contenido,
    imagenAvatar: imagenAvatar,
  }
  console.log(ObjetCard)
  return ObjetCard;
};
const sendPost = document.querySelector("#sendPost");
sendPost.addEventListener("click", () => {
  post(getValueInput());
  setTimeout(() => {
    window.location.href = "../index.html"
}, '2000')
});
// !Termina creacion de POST