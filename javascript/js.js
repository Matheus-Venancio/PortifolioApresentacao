
const btn2 = document.querySelector(".buttoContact")
const ligthbox = document.createElement('imgHome')
const images = document.querySelectorAll('img');

/**Envia mensagem pelo email */
btn2.onclick = function() {
var Name = document.getElementById("nome");
var Email = document.getElementById("email");
var Phone = document.getElementById("phone")
var Txtarea = document.getElementById("mensagem");

  if(Name.value.length<7){
    Name.style.backgroundColor="#ff6459"
    alert("Nome devera ter pelo menos 7 letras")
    Name.focus();
    return false;
  }else{
    if(Email.value.length<8){
      Email.style.backgroundColor="#ff6459"
      alert("Email devera ter pelo menos 8 letras")
      Email.focus();
      return false;
    }else{
      if(Phone.value.length<13){
        Phone.style.backgroundColor="#ff6459"
        alert("Phone devera ter pelo menos 11 numeros")
        Phone.focus();
        return false
      }else{
      if(Txtarea.value.length<8){
        Txtarea.style.backgroundColor="#ff6459"
        alert("Mensagem devera ter pelo menos 8 letras")
        Txtarea.focus();
        return false;
      }
    }
   }
   alert("Mensagem enviada com sucesso")
  }
};

/**Abrir o menu */
function abrirMenu(){
  var menu = document.querySelector("#menu-bars")
  var header = document.querySelector('header')
  menu.classList.toggle('fa-times')
  header.classList.toggle('active')
}

window.onscroll = () =>{
  var menu = document.querySelector("#menu-bars")
  var header = document.querySelector('header')
  menu.classList.remove('fa-times')
  header.classList.remove('active')
}

// Image Expansion

ligthbox.id = 'ligthbox'
document.body.appendChild(ligthbox)
images.forEach(image => {
  image.addEventListener('click', e => {
    ligthbox.classList.add('active')

    const img = document.createElement('img')
    img.src = image.src
    while(ligthbox.firstChild){
      ligthbox.removeChild(ligthbox.firstChild)
    }
    ligthbox.appendChild(img)
  })
})

ligthbox.addEventListener('click', e => {
  if(e.target !== e.currentTarget) return
  ligthbox.classList.remove('active')
})



