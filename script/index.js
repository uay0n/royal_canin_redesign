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

const heartBtns = document.querySelectorAll('.heart');

heartBtns.forEach(function(btn){
    btn.addEventListener('click', function(){

        this.classList.toggle('active');

        this.classList.add('pop');

        setTimeout(() => {
            this.classList.remove('pop');
        }, 300);

    });
});