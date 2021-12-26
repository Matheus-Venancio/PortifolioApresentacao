
/*const btn2 = document.getElementById("btnContact")*/
const nome = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const txtarea = document.getElementById('mensagem')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const ligthbox = document.createElement('imgHome')
const images = document.querySelectorAll('img');

/**Verify inputs */
form.addEventListener('submit', (e) =>{
  let messages = []
  if(nome.value === '' ||nome.value == null){
    messages.push('Preencha o nome')
  }

  if(nome.value.length<=10){
    messages.push('O nome deve conter pelo menos 10 caracteres')
  }

  if(email.value.length<=10){
    messages.push('O emal deve conter pelo menos 10 caracteres')
  }

  if(phone.value.length<11){
    messages.push('o telefone tem que ter 11 caracteres')
    
  }

  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText= messages.join(', ')
  }
})

//Number inputs 
function numberInput(evt){
  var theEvent =evt || window.event;
  var key = theEvent.keyCode || theEvent.which;

  key = String.fromCharCode(key);

  var regex = /^[0-9]+$/;

  if(!regex.test(key)){
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function textInput(evt){
  var theEvent =evt || window.event;
  var key = theEvent.keyCode || theEvent.which;

  key = String.fromCharCode(key);

  var regex = /^[a-z]/;

  if(!regex.test(key)){
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

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

/*ligthbox.id = 'ligthbox'
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
*/

//Effects scrool

window.addEventListener('scroll', reveal);
function reveal(){
 var reveals = document.querySelectorAll('.reveal');
 for(var i=0; i< reveals.length; i++){
   var windowheight = window.innerHeight;
   var revealtop = reveals[i].getBoundingClientRect().top;
   var revealpoint = 150;

   if(revealtop < windowheight - revealpoint){
     reveals[i].classList.add('active');
   }else{
     reveals[i].classList.remove('active');
   }
 }
}