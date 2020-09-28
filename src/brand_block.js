window.onresize = addSwiper;
window.onload   = addSwiper;

let mySwiper;
let swiperIsActivated = false;

const showHideBrands = document.querySelector('.brand-block__show-all');
const brandsBlockList = document.querySelector('.brand-block__list');

showHideBrands.addEventListener('click', function(){
        if (showHideBrands.innerText === 'Показать все') {
            showHideBrands.innerText = 'Скрыть';
            showHideBrands.classList.add('brand-block__show-all--hide');
            brandsBlockList.classList.add('brand-block__list--show-all');
        } else {
            showHideBrands.innerText = 'Показать все';
            showHideBrands.classList.remove('brand-block__show-all--hide');
            brandsBlockList.classList.remove('brand-block__list--show-all');
        }
    });


function addSwiper(){
    if(document.documentElement.clientWidth < 768) {
        if (swiperIsActivated){
            return false;
        }
        mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            loop: false,
            pagination: {
              el: '.swiper-pagination',
            },
            a11y: {
              enabled: false,  
            },
        });
        swiperIsActivated = true;
    } else {
        if (!swiperIsActivated){
            return false;
        }
        mySwiper.destroy(true, true);
        swiperIsActivated = false;
    }
}