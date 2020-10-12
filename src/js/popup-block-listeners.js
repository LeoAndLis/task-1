const btnsShowPopup = document.querySelectorAll('.show-popup');
const overlay = document.querySelector('.overlay');

let arrayPopupped = [];

/* add listeners to .show-popup buttons */

btnsShowPopup.forEach(function(button) {
    button.addEventListener('click', function(){

        let curPopupName = this.dataset.popupName;
        let curPopupBlock = document.querySelector('.popup-block--' + curPopupName);
        
        curPopupBlock.classList.add('popup-block--visible');
        curPopupBlock.querySelector('.round-icon--close').addEventListener('click',  hide);
        
        overlay.addEventListener('click',  hide);

        if (arrayPopupped.length === 0){
            overlay.classList.add('overlay--visible');
            document.addEventListener('keyup', hide);
        } else {
            overlay.classList.add('overlay--second-lvl');
        }

        arrayPopupped.push(curPopupName)

    });
});

/* hide menu/popup and remove closing listeners */

function hide(event) {
    if (event.type === 'keyup' && event.code !== 'Escape'){
        return false;
    }

    let el_type = arrayPopupped.pop();
    let curPopupBlock = document.querySelector('.popup-block--' + el_type);

    curPopupBlock.classList.remove('popup-block--visible');
    curPopupBlock.querySelector('.round-icon--close').removeEventListener('click',  hide);

    if ( arrayPopupped.length === 0 ) {

        document.removeEventListener('keyup', hide);
        overlay.removeEventListener('click', hide);

        overlay.classList.remove('overlay--visible');

    } else {
        overlay.classList.remove('overlay--second-lvl');
    }
}