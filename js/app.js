
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    loop: true, // Enable looping
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 30, // Optional: space between slidesPerView
    speed: 1000,
});
document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.header-flex');
    menu.classList.toggle('active'); // Toggle the active class
}); 
