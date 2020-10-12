const showHideButtons = document.querySelectorAll('.show-more');

/* hide/show .show-more buttons */

window.addEventListener('resize', hideShowMore);
window.addEventListener('load', hideShowMore);

function hideShowMore() {
    showHideButtons.forEach(function(item) {
       if (item.previousElementSibling.offsetHeight >= item.previousElementSibling.firstElementChild.offsetHeight) {
           item.classList.add('show-more--hide-self');
       } else {
           item.classList.remove('show-more--hide-self');
       }
    });
}

/* add listeners to .show-more buttons */

showHideButtons.forEach(function(item) {
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