



function irpara() {
  const linkPerfil = document.getElementById("link-perfil");
  const navPerfil = document.getElementById("nav-perfil");


  document.addEventListener("keyup", (e) => {
    console.log(e.key)
    console.log(e.code)

    if (e.code == 'Digit1') {
      console.log('Abre o menu lateral');
      navPerfil.style.display = "block";
    } else if (e.code == 'Escape') {
      console.log('Fecha o menu lateral');
      navPerfil.style.display = "none";
    }
  })
  const linkPerfilDados = document.getElementById('link-perfil-dados');


  document.addEventListener('keyup', (e) => {
    if (navPerfil.style.display == 'block') {
      if (e.code = 'Digit1') {
        linkPerfilDados.click()
      }
    } else if (e.code == 'Digit1') {
      navPerfil.style.display = 'block'
    }
  })
}



function fechar() {
  document.addEventListener('keyup', (e) => {
    if (e.code == 'Digit3') {
      window.location.href = 'index.html';
    }
  })
}
fechar();
irpara();




