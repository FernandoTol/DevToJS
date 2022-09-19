import { docRef } from './credenciales.js';
import { borrando } from './deletePost.js';

// * Get
const collection = 'DevtoPOST'
const cardsContainer = document.querySelector('#postContainer')
const btnActualizar = document.querySelector('#actualizar')

window.addEventListener("DOMContentLoaded", async () => {
    const url = document.URL
    let urlArr = url.split('?')
    let idPost = urlArr[1]
    const querySnapshot = await docRef(idPost);

    if (querySnapshot.exists()) {
        const post = querySnapshot.data();

        const etiqueta = (etiqueta) => {
            let lista = `<a class="container__crayons-tag"><span
            class="crayons-tag__prefix">${etiqueta}</span></a>`
            return lista
        }

        const etiquetasarr = post.etiquetas
        let element = ""
        for (let index = 0; index < etiquetasarr.length; index++) {
            element += etiqueta(etiquetasarr[index]);
        }

        cardsContainer.innerHTML += `
        <section class="container__One">
            <img src="${post.imagenPortada}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="container__imgtext">
                    <img class="container__imgUser" src="${post.imagenAvatar}" alt="">
                    <p class="container__imgtext--name"> ${post.usuario} <br> Oct 6'19</p>
                </div>
                <div id="contenidoEtiqueta" class="conteiner__tow ">
                    <h1 class="container__two--title col-12  ">
                        <a class="container__titleSmall " >${post.title}</a>
                    </h1>
                    ${element}
                </div>
                <div class="  col-lg-12 container__Three">
                ${post.contenido}
                </div>
            </div>
        </section>
        `;

        const borrar = document.querySelector('#delete')
        borrar.addEventListener('click', () => {
            borrando(idPost)
        })

        btnActualizar.addEventListener('click', () => {
            window.location.href=`./updatePost.html?${idPost}`
        })

    } else {
        // * querySnapshot.data() will be undefined in this case
        console.log("No such document!");
    }
})
