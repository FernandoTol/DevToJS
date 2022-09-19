import { updatePost, docRef } from "./credenciales.js";


// * Get
const collection = 'DevtoPOST'

const url = document.URL
let urlArr = url.split('?')
let idPost = urlArr[1]

window.addEventListener("DOMContentLoaded", async () => {
    const querySnapshot = await docRef(idPost);

    if (querySnapshot.exists()) {
        const postData = querySnapshot.data();
        console.log(postData)

        const contenido = postData.contenido;
        const etiquetasArr = postData.etiquetas;
        const imagenAvatar = postData.imagenAvatar;
        const imagenPortada = postData.imagenPortada;
        const title = postData.title;
        const usuario = postData.usuario;

        let etiquetasstr = etiquetasArr.toString();
        let newEtiquetas = etiquetasstr.replace(/,|_|-|@|<>/g, " ")

        document.querySelector('#contenido').value = contenido;
        document.querySelector('#titulo').value = title;
        document.querySelector('#usuario').value = usuario;
        document.querySelector('#etiquetas').value = newEtiquetas;

    } else {
        // * querySnapshot.data() will be undefined in this case
        console.log("No such document!");
    }
})
// !Termina creacion de GET



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
    updatePost(idPost, getValueInput());
    setTimeout(() => {
        window.location.href = "../index.html"
    }, '2000')
});
// !Termina creacion de POST