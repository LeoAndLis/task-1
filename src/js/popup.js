const btnsShowPopup = document.querySelectorAll('.show-popup');
const overlay = document.querySelector('.overlay--popup');

let arrayPopupped = [];

function showPopupClickHandler() {

    let curPopupName = this.dataset.popupName;
    let curPopupBlock = document.querySelector('.popup-block--' + curPopupName);

    curPopupBlock.classList.add('popup-block--visible');
    curPopupBlock.querySelector('.round-icon--close').addEventListener('click',  hidePopupHandler);

    overlay.addEventListener('click',  hidePopupHandler);

    overlay.classList.add('overlay--visible');
    document.addEventListener('keyup', hidePopupHandler);

    arrayPopupped.push(curPopupName)

}

function hidePopupHandler(event) {
    if (event.type === 'keyup' && event.code !== 'Escape'){
        return false;
    }

    let el_type = arrayPopupped.pop();
    let curPopupBlock = document.querySelector('.popup-block--' + el_type);

    curPopupBlock.classList.remove('popup-block--visible');
    curPopupBlock.querySelector('.round-icon--close').removeEventListener('click',  hidePopupHandler);

    document.removeEventListener('keyup', hidePopupHandler);
    overlay.removeEventListener('click', hidePopupHandler);
    overlay.classList.remove('overlay--visible');

}

btnsShowPopup.forEach(function(button) {
    button.addEventListener('click', showPopupClickHandler);
});