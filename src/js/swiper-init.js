window.onresize = addSwiper;
window.onload   = addSwiper;

let brandsSwiper;
let equipmentSwiper;
let swipersIsActivated = false;

function addSwiper(){

  if(document.documentElement.clientWidth < 768) {

    if (swipersIsActivated){
      return false;
    }

    brandsSwiper = new Swiper('.brands-swiper-container', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: false,
      pagination: {
        el: '.brands-swiper-pagination',
      },
      a11y: {
        enabled: false,
      },
    });

    equipmentSwiper = new Swiper('.equipment-swiper-container', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: false,
      pagination: {
        el: '.equipment-swiper-pagination',
      },
      a11y: {
        enabled: false,
      },
    });

    swipersIsActivated = true;

  } else {

    if (!swipersIsActivated){
      return false;
    }

    brandsSwiper.destroy(true, true);
    equipmentSwiper.destroy(true, true);

    swipersIsActivated = false;
  }
}
