AOS.init();

new Swiper(".reviewsSwiper", {
  loop:true,

  pagination:{
    el:".swiper-pagination",
  },
});
const otherGrid = document.querySelector('.other-grid');

const prevBtn = document.querySelector('.other-arrow.prev');

const nextBtn = document.querySelector('.other-arrow.next');

if(otherGrid){

    nextBtn.addEventListener('click', () => {

        otherGrid.scrollBy({
            left:350,
            behavior:'smooth'
        });

    });

    prevBtn.addEventListener('click', () => {

        otherGrid.scrollBy({
            left:-350,
            behavior:'smooth'
        });

    });

}

