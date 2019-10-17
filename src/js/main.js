//animation (projects section)

function appearProjects() {
    $('.main__middle__projects-wrapper').css('right', '0');
}
function appearProjectsItem() {
    $('.main__middle__projects-item').css('opacity', '1');
}
setTimeout(appearProjects(), 1000);
setTimeout(appearProjectsItem(), 1000);



//slider 
const slider = $('.slide-img');
let currentSlide = $('.slide-img.active');
let counter = 0;
const totalSlides = slider.length;
$('.total-slides').text(1 + '/' + totalSlides);
let currentSlideNumber = '0' + 1;

$('.current-slide').text(currentSlideNumber);

$('.button-next-slide').click(function toggleSlide() {
    $(currentSlide).removeClass('active');
    counter++
    let displayTotalSlides = counter + 1;
    if (displayTotalSlides > slider.length) {
        displayTotalSlides = 1;
    }
    currentSlideNumber = '0' + displayTotalSlides;

    $('.current-slide').text(currentSlideNumber);
    $('.total-slides').text(displayTotalSlides + '/' + totalSlides);

    if(counter > slider.length - 1) {
        counter = 0;
    }

    currentSlide = slider[counter];
    $(currentSlide).addClass('active');
});
