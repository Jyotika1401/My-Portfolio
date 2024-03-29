let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
var sidemenu=document.getElementById("sidemenu");


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('simple');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "0";
}
window.onscroll = () => {
   
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('simple');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('simple');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
          // sticky header
    let header =document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('simple');
    }
