document.addEventListener('DOMContentLoaded', function () {
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');
const phoneImg = document.querySelector('.phone-img');

window.addEventListener('scroll',()=>{
    const position =window.scrollY;
    if(position){
    navbar.classList.add('fixed-navbar');
    phoneImg.classList.remove('img-hidden');
    navbar.classList.remove('nav-active');
    hamburger.classList.remove('active');
    }
    else{
        navbar.classList.remove('fixed-navbar');


    }
})
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navbar.classList.toggle('nav-active');
    phoneImg.classList.add('img-hidden');
})

});

  