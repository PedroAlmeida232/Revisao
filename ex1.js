// const usuario ={
//     senha:"123456"


// }
// const usuarioJson = JSON.stringify(usuario)
// localStorage.setItem("usuario", usuarioJson)
// console.log(usuarioJson)

const usuario = localStorage.getItem("usuario")
// const usuarioJson = JSON.parse(usuarioJson)

const dados={
    nome:"fiap",
    senha:"12345",
    email:"coco@gmail.com"

}
const converteusuario=JSON.stringify(dados)
localStorage.setItem("dados" , converteusuario)

localStorage.removeItem("dados")