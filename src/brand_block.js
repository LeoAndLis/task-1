if(document.documentElement.clientWidth < 768) {
    const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

const showHideBrands = document.querySelector('.brand-block__show-all');
const brandsBlock = document.querySelector('.brand-block__list');

showHideBrands.addEventListener('click', function(){
        if (showHideBrands.innerText === 'Показать все') {
            showHideBrands.innerText = 'Скрыть';
            showHideBrands.classList.add('brand-block__show-all--hide');
            brandsBlock.classList.add('brand-block__list--show-all');
        } else {
            showHideBrands.innerText = 'Показать все';
            showHideBrands.classList.remove('brand-block__show-all--hide');
            brandsBlock.classList.remove('brand-block__list--show-all');
        }
    });