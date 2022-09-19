import { deletePost } from "./credenciales.js";


window.addEventListener("DOMContentLoaded", () => {
  const url = document.URL
  let urlArr = url.split('?')
  let idPost = urlArr[1]
  console.log(idPost);

  const borrar = document.querySelector('#delete')
  console.log(borrar)

  borrar.addEventListener('click', () => {
    console.log('first')
    //      deletePost(idPost);
    // window.location.href = "../index.html"
  })

})



