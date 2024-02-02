// Navbar Fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
  } else {
      header.classList.remove('navbar-fixed');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

// Slider
$(document).ready(function() {
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = $('.slide').width();
    $('.slider-wrapper').css({
      transform: 'translateX(' + (-slideWidth * index) + 'px)',
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % $('.slide').length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + $('.slide').length) % $('.slide').length;
    showSlide(currentIndex);
  }

  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);
});