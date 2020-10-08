window.addEventListener('resize', addSwipers);
window.addEventListener('load', addSwipers);

const TABLET_WIDTH = 768;

let swipers = document.querySelectorAll('.swiper-container');
let activeSwipers = [];
let swipersIsActivated = false;

function addSwipers() {
  if(document.documentElement.clientWidth < TABLET_WIDTH) {

    if (swipersIsActivated) {
      return false;
    }

    swipers.forEach(function(curSwiper) {

      activeSwipers.push(new Swiper( curSwiper, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: false,
        pagination: {
          el: '.swiper-pagination',
        },
        a11y: {
          enabled: false,
        },
      }));

    });

    swipersIsActivated = true;

  } else {

    if (!swipersIsActivated || !activeSwipers.length){
      return false;
    }

    while(activeSwipers.length){

      let curSwiper = activeSwipers.pop();
      curSwiper.destroy(true, true);

    }

    swipersIsActivated = false;

  }
}
