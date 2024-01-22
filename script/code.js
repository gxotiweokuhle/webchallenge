
$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.slide');
    let dots = $('.dot');

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.css('transform', `translateX(${-100 * currentSlide}%)`);
        dots.removeClass('active');
        dots.eq(currentSlide).addClass('active');
    }

    function changeSlide(offset) {
        showSlide(currentSlide + offset);
    }

    $('.arrow.next').on('click', function () {
        changeSlide(1);
    });

    $('.dots-container').on('click', '.dot', function () {
        const dotIndex = $(this).index();
        showSlide(dotIndex);
    });

    for (let i = 0; i < slides.length; i++) {
        $('.dots-container').append('<div class="dot"></div>');
    }

    dots = $('.dot'); 

    showSlide(currentSlide);
});
