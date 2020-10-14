const showHideButtons = document.querySelectorAll('.show-more');

function hideShowMoreResizeHandler() {
    showHideButtons.forEach(function(item) {
       if (item.previousElementSibling.offsetHeight >= item.previousElementSibling.firstElementChild.offsetHeight) {
           item.classList.add('show-more--hide-self');
       } else {
           item.classList.remove('show-more--hide-self');
       }
    });
}

function showMoreButtonClickHandler () {
  if (this.innerText === this.dataset.showMoreName) {
    this.innerText = 'Скрыть';
    this.classList.add('show-more--hide');
    this.previousElementSibling.classList.add(this.dataset.showAllClass);
  } else {
    this.innerText = this.dataset.showMoreName;
    this.classList.remove('show-more--hide');
    this.previousElementSibling.classList.remove(this.dataset.showAllClass);
  }
}


showHideButtons.forEach(function(item) {
  item.addEventListener('click', showMoreButtonClickHandler);
});

window.addEventListener('resize', hideShowMoreResizeHandler);
window.addEventListener('load', hideShowMoreResizeHandler);