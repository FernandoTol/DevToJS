//script para añadir post a la DB
export const savePost = (titulo, usuario, imagenPortada, categoria, imagenAvatar, etiquetas, contenido ) => {
  const guardaPost = {
    title: titulo,
    usuario: usuario,
    imagenPortada: imagenPortada,
    categoria: categoria,
    imagenAvatar: imagenAvatar,
    etiquetas: etiquetas,
    contenido: contenido
  };
  const caja = collection(db, "DevtoPOST");
  addDoc(caja, guardaPost);
};