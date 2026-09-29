//로얄캐닌 js
const breedSlide = new Swiper('.breed .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
});

const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});