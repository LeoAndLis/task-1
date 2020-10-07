const showHideContent = document.querySelectorAll('.show-more');

/* add listeners to .show-more buttons */

showHideContent.forEach(function(item) {
  item.addEventListener('click', function () {
    if (this.innerText === this.dataset.showMoreName) {
      this.innerText = 'Скрыть';
      this.classList.add('show-more--hide');
      this.previousElementSibling.classList.add(this.dataset.showAllClass);
    } else {
      this.innerText = this.dataset.showMoreName;
      this.classList.remove('show-more--hide');
      this.previousElementSibling.classList.remove(this.dataset.showAllClass);
    }
  });
});

const burgerButton = document.querySelector('.round-icon--burger');
const btnsShowPopup = document.querySelectorAll('.show-popup');

const menu = document.querySelector('.menu');
const btnMenuClose = menu.querySelector('.round-icon--close');

const popup = document.querySelector('.popup');
const btnPopupClose = popup.querySelector('.round-icon--close');
const popupTitle = popup.querySelector('.title');
const formItemsPopup = popup.querySelectorAll('.form__item:not([type=tel])');

const overlayMenu = document.querySelector('.overlay--menu');
const overlayPopup = document.querySelector('.overlay--popup');

let countPopupped = 0;

/* add listeners to burger buttons for showing menu */

burgerButton.addEventListener('click', function(){
    
    menu.classList.add('menu--visible');
    overlayMenu.classList.add('overlay--visible');
    
    btnMenuClose.addEventListener('click', function(){hide('menu');});
    overlayMenu.addEventListener('click', function(){hide('menu');});
    
    countPopupped++;

    addKeyListener('menu');
});

/* add listeners to .show-popup buttons */

btnsShowPopup.forEach(function(button) {
    button.addEventListener('click', function(){

        btnPopupClose.addEventListener('click',  function(){hide('popup');});
        overlayPopup.addEventListener('click',  function(){hide('popup');});

        btnPopupClose.classList.add('popup__button-close--visible');
        overlayPopup.classList.add('overlay--visible');

        if (button.dataset.popupName === 'call'){
            popupTitle.innerText = 'Обратная связь';
            formItemsPopup.forEach(function(item){
                item.setAttribute('disabled', '');
                item.classList.add('form__item--hide');
            });
        }

        if (button.dataset.popupName === 'chat'){
            popupTitle.innerText = 'Заказать звонок';
            formItemsPopup.forEach(function(item){
                item.removeAttribute('disabled');
                item.classList.remove('form__item--hide');
            });
        }

        popup.classList.add('popup--visible');

        countPopupped++;

        addKeyListener('popup');
    });
});

/* hide menu/popup and remove closing listeners */

function hide(el_type, key_code) {
console.log(countPopupped + ' - ' + el_type);
    if (key_code !== undefined && key_code !== 'Escape'){
        return false;
    }

    if (el_type === 'popup') {
        popup.classList.remove('popup--visible');
        btnPopupClose.classList.remove('popup__button-close--visible');
        overlayPopup.classList.remove('overlay--visible');

        btnPopupClose.removeEventListener('click', hide);
        overlayPopup.removeEventListener('click', hide);

        countPopupped--;
    }
    
    if (el_type === 'menu') {
        menu.classList.remove('menu--visible');
        overlayMenu.classList.remove('overlay--visible');

        btnMenuClose.removeEventListener('click', hide);
        overlayMenu.removeEventListener('click', hide);

        countPopupped--;
    }

    if ( countPopupped === 0 ) {
        document.removeEventListener('keyup', hide);
    }
}

function addKeyListener(el_type) {
    console.log(countPopupped + ' - ' + el_type);
    if (countPopupped === 2) {
        console.log('Remove key listener');
        document.removeEventListener('keyup', hide);
    }

    document.addEventListener('keyup', function(e){
        hide(el_type, e.code);
    });
}
