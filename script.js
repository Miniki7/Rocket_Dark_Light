function toggleMode(){
  const html = document.documentElement

  /*  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  } 

    o toggle abaixo faz basicamente essa logica acima*/
  html.classList.toggle("light")

  /* pegar a tag img */
  const img = document.querySelector("#profile img")

  /* substituir a imagem  */
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de sol e jaqueta, sem barba e fundo roxo degradê até azul."
    )
  } else {
    // set tiver sem light mode, manter img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}