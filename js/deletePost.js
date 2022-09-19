import { deletePost } from "./credenciales.js";


  export const borrando = (id) => {
    deletePost(id)
    setTimeout(() => {
      window.location.href="../index.html" 
    }, '2000')
    
  }



