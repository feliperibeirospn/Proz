const { ChatCompletionRequestMessageRoleEnum } = require("openai");

const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
});

document.addEventListener("keyup", (e) => {
  console.log(e.key)
  console.log(e.code)

  if(e.code == 'Digit1') {
    console.log('Abre o menu lateral');
    navPerfil.style.display = "block";
  } 

//##ESC

  if(e.code == 'Escape') {
    console.log('Fecha o menu lateral');
    navPerfil.style.display = "none";
  } 
})


//
Felipe Ribeiro
Luan Dantas
Carlos 
Andrey Chiesa 
Paulo Lima
