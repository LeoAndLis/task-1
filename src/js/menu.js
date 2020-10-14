const buttonOpenMenu = document.querySelector('.open-menu');
const btnHideMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay--menu');
const overlayPopup = document.querySelector('.overlay--popup');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');

function openMenu() {
  overlay.classList.add('overlay--visible');
  menu.classList.add('popup-block--visible');

  overlay.addEventListener('click',  overlayClickHandler);
  document.addEventListener('keyup', escapeKeyupHandler);
  btnHideMenu.addEventListener('click', closeButtonMenuHandler);

  wrapper.classList.add('wrapper--hide-overflow');

  buttonOpenMenu.removeEventListener('click', openMenuButtonClickHandler);
}

function closeMenu() {

  overlay.removeEventListener('click',  overlayClickHandler);
  document.removeEventListener('keyup', escapeKeyupHandler);
  btnHideMenu.removeEventListener('click', closeButtonMenuHandler);

  menu.classList.remove('popup-block--visible');
  overlay.classList.remove('overlay--visible');

  wrapper.classList.remove('wrapper--hide-overflow');

  buttonOpenMenu.addEventListener('click', openMenuButtonClickHandler);
}

function openMenuButtonClickHandler() {
  openMenu();
}

function escapeKeyupHandler(event) {
  if ((event.type === 'keyup' && event.code !== 'Escape') || overlayPopup.classList.contains('overlay--visible')){
    return false;
  }
  closeMenu();
}

function closeButtonMenuHandler() {
  closeMenu();
}

function overlayClickHandler() {
  closeMenu();
}

buttonOpenMenu.addEventListener('click', openMenuButtonClickHandler);
