window.onresize = addSwiper;
window.onload   = addSwiper;

let mySwiper;
let swiperIsActivated = false;

const showHideContent = document.querySelector('.section__show-more');
const sectionContent = document.querySelector('.section__content');

showHideContent.addEventListener('click', function(){
        if (showHideContent.innerText === 'Показать все') {
            showHideContent.innerText = 'Скрыть';
            showHideContent.classList.add('section__show-more--hide');
            sectionContent.classList.add('section__content--show-all');
        } else {
            showHideContent.innerText = 'Показать все';
            showHideContent.classList.remove('section__show-more--hide');
            sectionContent.classList.remove('section__content--show-all');
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