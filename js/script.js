var popup = document.querySelector('.feedback');
var link = document.querySelector('.contacts .contacts-btn');
var close = document.querySelector('.close-window');

    link.addEventListener('click',function(event) {
        event.preventDefault();
        popup.classList.add('feedback-show');
    },false);
                        
    close.addEventListener('click',function(event){
        event.preventDefault();
        popup.classList.remove('feedback-show');
    },false);

var btn = document.querySelectorAll('.pagination-element');
var carousel = document.querySelector('.slider-wrapper');

    for(var i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', toggleActive);
    }

    function toggleActive(event) {
        event.preventDefault();
        if(!this.classList.contains('pagination-active')) {
            for(var i = 0; i < btn.length; i++) {
                if (btn[i] == this) {
                    this.classList.add('pagination-active');
                } else {
                    btn[i].classList.remove('pagination-active');
                }
            }    
        }
        if(this.classList.contains('slide1')) {
            carousel.style.transform = "translate(0)";
        }
        if(this.classList.contains('slide2')) {
            carousel.style.transform = "translate(-1200px)";
        }
        if(this.classList.contains('slide3')) {
            carousel.style.transform = "translate(-2400px)";
        }
    }




var slider = document.querySelector('.nouislider');
var inputMax = document.querySelector('.max-price');
var inputMin = document.querySelector('.min-price');
noUiSlider.create(slider, {
    start: [0,15000],
    connect: true,
    step: 100,
    range: {
        'min': 0,
        'max': 20000
    }
});

slider.noUiSlider.on('update', function( values, handle ) {

    var value = values[handle];

    if ( handle ) {
        inputMax.value = Math.round(value);
    } else {
        inputMin.value = Math.round(value);
    }
});

inputMin.addEventListener('change', function(){
    slider.noUiSlider.set([this.value, null]);
});

inputMax.addEventListener('change', function(){
    slider.noUiSlider.set([null, this.value]);
});