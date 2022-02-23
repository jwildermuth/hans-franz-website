'use-strict';


const navButton = document.querySelector('#nav-button');
const mobileNav = document.querySelector('.mobile-nav-wrapper');
const mobileNavUl = document.querySelector('.mobile-nav-list');


// hamburger button toggle
navButton.addEventListener('click', () => {
  mobileNav.classList.toggle('display-block');
})


// hide mobile nav when clicking outside of it
window.addEventListener('mouseup', function(e) {
  if (e.target != navButton &&
      e.target != mobileNav &&
      e.target != mobileNavUl) {
    mobileNav.classList.remove('display-block');
  }
})
