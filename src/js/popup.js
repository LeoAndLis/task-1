const btnsShowPopup = document.querySelectorAll('.show-popup');
const overlay = document.querySelector('.overlay--popup');
const overlayMenu = document.querySelector('.overlay--menu');
const wrapper = document.querySelector('.wrapper');

let currentPopuppedBlock = [];

function openPopup(element) {
  let currentPopuppedName = element.dataset.popupName;
  currentPopuppedBlock = document.querySelector('.popup-block--' + currentPopuppedName);

  currentPopuppedBlock.classList.add('popup-block--visible');
  currentPopuppedBlock.querySelector('.round-icon--close').addEventListener('click',  closePopupButtonClickHandler);

  overlay.addEventListener('click',  overlayClickHandler);
  document.addEventListener('keyup', escapeKeyupHandler);

  overlay.classList.add('overlay--visible');

  if (!overlayMenu.classList.contains('overlay--visible')) {
    wrapper.classList.add('wrapper--hide-overflow');
  }

  btnsShowPopup.forEach(function(button) {
    button.removeEventListener('click', openPopupClickHandler);
  });
}

function closePopup() {

  currentPopuppedBlock.classList.remove('popup-block--visible');
  currentPopuppedBlock.querySelector('.round-icon--close').removeEventListener('click',  closePopupButtonClickHandler);

  document.removeEventListener('keyup', escapeKeyupHandler);
  overlay.removeEventListener('click', overlayClickHandler);
  overlay.classList.remove('overlay--visible');

  if (!overlayMenu.classList.contains('overlay--visible')) {
    wrapper.classList.remove('wrapper--hide-overflow');
  }

  btnsShowPopup.forEach(function(button) {
    button.addEventListener('click', openPopupClickHandler);
  });
}

function openPopupClickHandler(event) {
  openPopup(event.target);
}

function closePopupButtonClickHandler(){
  closePopup();
}

function overlayClickHandler() {
  closePopup();
}

function escapeKeyupHandler(event) {
  if (event.type === 'keyup' && event.code !== 'Escape'){
    return false;
  }
  closePopup();
}

btnsShowPopup.forEach(function(button) {
    button.addEventListener('click', openPopupClickHandler);
});
