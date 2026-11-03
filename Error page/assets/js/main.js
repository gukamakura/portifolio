/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
   const header = document.getElementById('header');
   this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__data', {duration: 1.2, opacity: 0, y: -50, delay: .3});
gsap.from('.home__blob-1', {duration: 1.5, opacity: 0, scale: 0, delay: .5});
gsap.from('.home__blob-2', {duration: 1.5, opacity: 0, scale: 0, delay: .7});
gsap.from('.home__blob-3', {duration: 1.5, opacity: 0, scale: 0, delay: .9});
gsap.from('.home__blob-4', {duration: 1.5, opacity: 0, scale: 0, delay: 1.1});
gsap.from('.home__img-5', {duration: 1.5, opacity: 0, y: 50, delay: 1.3});
