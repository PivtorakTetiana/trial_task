//animation (projects section)
function appearProjects() {
    $('.main__middle__projects-wrapper').css('right', '0');
}
function appearProjectsItem() {
    $('.main__middle__projects-item').css('opacity', '1');
}

setTimeout(appearProjects(), 1000,);
setTimeout(appearProjectsItem(), 1000);

function projects_width() {
    $('.main__middle__projects-wrapper').addClass('w100');
}

setTimeout(projects_width, 3000);

function scrollPage() {
    $('.products').toggle('6000');
    window.scrollTo(0,document.body.scrollHeight)
}
setTimeout(scrollPage, 8000);

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


//scroll logo change
function change_top() {
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.main__top').addClass('fixed-top');
            $('.main__top a').addClass('fixed-top-color');
            $('.main__top__logo > a > img').attr('src', 'src/img/logo-black.png');
    
        } else {
            $('.main__top').removeClass('fixed-top');
            $('.main__top a').removeClass('fixed-top-color');
            $('.main__top__logo img').attr('src', 'src/img/logo.png');
        }
    });
}
change_top();