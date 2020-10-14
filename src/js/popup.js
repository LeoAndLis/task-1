const btnsShowPopup = document.querySelectorAll('.show-popup');
const overlay = document.querySelector('.overlay--popup');

let currentPopuppedBlock = [];

function showPopupClickHandler() {

    let currentPopuppedName = this.dataset.popupName;
    currentPopuppedBlock = document.querySelector('.popup-block--' + currentPopuppedName);

    currentPopuppedBlock.classList.add('popup-block--visible');
    currentPopuppedBlock.querySelector('.round-icon--close').addEventListener('click',  hidePopupHandler);

    overlay.addEventListener('click',  hidePopupHandler);

    overlay.classList.add('overlay--visible');
    document.addEventListener('keyup', hidePopupHandler);

    btnsShowPopup.forEach(function(button) {
        button.removeEventListener('click', showPopupClickHandler);
    });
}

function hidePopupHandler(event) {
    if (event.type === 'keyup' && event.code !== 'Escape'){
        return false;
    }

    currentPopuppedBlock.classList.remove('popup-block--visible');
    currentPopuppedBlock.querySelector('.round-icon--close').removeEventListener('click',  hidePopupHandler);

    document.removeEventListener('keyup', hidePopupHandler);
    overlay.removeEventListener('click', hidePopupHandler);
    overlay.classList.remove('overlay--visible');
    
    btnsShowPopup.forEach(function(button) {
        button.addEventListener('click', showPopupClickHandler);
    });
}

btnsShowPopup.forEach(function(button) {
    button.addEventListener('click', showPopupClickHandler);
});