var navbar = document.querySelector('.header')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('nav-active')
  } else {
    navbar.classList.remove('nav-active')
  }
}

document.querySelectorAll('.certificates .certificate .image .img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.main .certificates .certificate .popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.main .certificates .certificate .popup-image').style.display = 'none';
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.querySelector('.header .nav .nav-list');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navLinks.classList.toggle('active');
})

const navItems = document.querySelectorAll('.header .nav .nav-list .nav-item a');

navItems.forEach(x => x.addEventListener('click', () => {
  navLinks.classList.toggle('active');
}));