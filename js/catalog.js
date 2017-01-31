(function(){

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

})();

(function(){

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

})();