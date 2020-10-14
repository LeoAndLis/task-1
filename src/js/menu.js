const btnShowMenu = document.querySelector('.round-icon--burger');
const btnHideMenu = document.querySelector('.menu__button-close');
const overlay = document.querySelector('.overlay--menu');
const overlayPopup = document.querySelector('.overlay--popup');
const menu = document.querySelector('.menu');


function showMenuButtonClickHandler() {

    overlay.classList.add('overlay--visible');
    menu.classList.add('popup-block--visible');

    overlay.addEventListener('click',  hideMenuHandler);
    document.addEventListener('keyup', hideMenuHandler);
    btnHideMenu.addEventListener('click', hideMenuHandler);
}

function hideMenuHandler(event) {
    if ((event.type === 'keyup' && event.code !== 'Escape') || overlayPopup.classList.contains('overlay--visible')){
        return false;
    }

    overlay.removeEventListener('click',  hideMenuHandler);
    document.removeEventListener('keyup', hideMenuHandler);
    btnHideMenu.removeEventListener('click', hideMenuHandler);
    
    menu.classList.remove('popup-block--visible');
    overlay.classList.remove('overlay--visible');
}

btnShowMenu.addEventListener('click', showMenuButtonClickHandler);