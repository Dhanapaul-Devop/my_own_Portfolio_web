// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const form = document.querySelector('.contact_form');
function sendMsg(e){
      e.preventDefault();
const name = document.querySelector('.name'),
      email = document.querySelector('.email'),
      msg = document.querySelector('.msg');

      console.log(msg.value);
      email.send({
      SecureToken : "6ce6a1d7-bccc-41cf-914f-5c7622c59f70",
      To : 'asir4937@gmail.com',
      From : email.value,
      Subject : "Contact Form",
      Body : msg.value
  }).then(
    message => alert(message)
  );

}

form.addEventListener('submit',sendMsg);