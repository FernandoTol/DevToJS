import { getTasks } from './credenciales.js';

// * Get
const collection = 'DevtoPOST'
const cardsContainer = document.querySelector('#cardsContainer')

window.addEventListener("DOMContentLoaded", async () => {

    const querySnapshot = await getTasks();

    querySnapshot.forEach((doc) => {
        const post = doc.data();

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
                        <p class="container__imgtext--name"> Simon Holdorf <br> Oct 6'19</p>
                    </div>
                    <div id="contenidoEtiqueta" class="conteiner__tow ">
                        <h1 class="container__two--title col-12  ">
                            <a class="container__titleSmall " href="./pages/postCard.html?${doc.id} ">${post.title}</a>
                        </h1>
                        ${element}
                    </div>
                    <div class="  col-lg-12 container__Three">
                        <div class="row">
                            <div class=" container-fluid col-6 icons">
                                <div class="row">
                                    <div class="col-6 reactions">
                                        <img src="./assets/svg/svg-export/corazon blanco borde negro.svg" alt="">
                                        <p>12572 Reactions</p>
                                    </div>
                                    <div class="col-6 container__three--comment">
                                        <img src="./assets/svg/svg-export/mensaje viñeta.svg" alt="">
                                        <p>26 Comments</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 btn">
                                <a>7 min read</a>
                                <button type="button" class="btn btn-secondary" disabled>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            `;
    })
})
