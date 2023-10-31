function carregar() {
  var titu = window.document.getElementById('titulo')
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    titu.innerHTML = 'BOM DIA!'
    img.src =  'manha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18){
    //BOA TARDE!
    titu.innerHTML = 'BOA TARDE!'
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
  } else {
    //BOA NOITE!
    titu.innerHTML = 'BOA NOITE!'
    img.src = 'noite.png'
    document.body.style.background = '#515154'
  }
}