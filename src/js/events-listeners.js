const showHideContent = document.querySelectorAll('.show-more');

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
const btnClose = document.querySelector('.round-icon--close');
const menu = document.querySelector('.menu');

burgerButton.addEventListener('click', function(){
  console.log('burger clicked');
  menu.classList.add('menu--visible');
  btnClose.addEventListener('click', hide);
});

function hide(){
  menu.classList.remove('menu--visible');
  btnClose.removeEventListener('click', hide);
}
