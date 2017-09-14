var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content-close');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');
var overlay = document.querySelector('.modal-overlay');
var mapShow = document.querySelector('.js-map-show');
var map = document.querySelector('.modal-content-map');
var mapClose = map.querySelector('.modal-content-close');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-animation-shake');
  popup.classList.add('modal-content-show');
  overlay.classList.add('modal-content-show');
  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
});

function closeContent(event){
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  overlay.classList.remove('modal-content-show');
  map.classList.remove('modal-content-show');
};

close.addEventListener('click', closeContent);
overlay.addEventListener('click', closeContent);
mapClose.addEventListener('click', closeContent);

window.addEventListener('keydown', function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-content-show') || overlay.classList.contains('modal-content-show') || map.classList.contains('modal-content-show')) {
      event.preventDefault();
      closeContent(event);
    }
  }
  });

form.addEventListener('submit', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-animation-shake');
  if (!login.value || !password.value) {
    form.offsetWidth = form.offsetWidth;
    popup.classList.add('modal-content-animation-shake');
  }
  else {
    localStorage.setItem('login', login.value);
  }
});

mapShow.addEventListener('click', function(event){
  event.preventDefault();
  map.classList.add('modal-content-show');
  overlay.classList.add('modal-content-show');
});
