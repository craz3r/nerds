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

    var gallery = document.querySelector('.slider-wrapper');
    var paginator = document.querySelector('.slider-pagination');
    var slideWidth = 1200;
    var time = setInterval(move, 5000);

    for(var i = 0; i < paginator.children.length; i++){
        paginator.children[i].addEventListener('mouseover', function(){
            clearInterval(time);
        });
        paginator.children[i].addEventListener('mouseout', function(){
            time = setInterval(move, 5000);
        });
        paginator.children[i].addEventListener('click', function(){
            document.querySelector('.pagination-active').classList.remove('pagination-active');
            this.classList.add('pagination-active');
            var number = this.dataset.number;
            certainSlide(number);
        });
    }

    gallery.addEventListener('mouseover', function(){
        clearInterval(time);
    });

    gallery.addEventListener('mouseout', function(){
        time = setInterval(move, 5000);
    });


    function certainSlide(n){
        var currentSlide = n;
        var offset = currentSlide*slideWidth*(-1);
        gallery.style.left = offset + "px";
        gallery.dataset.index = currentSlide;
    }

    function move() {
        var currentSlide = gallery.dataset.index;
        currentSlide++;
        if(currentSlide > gallery.children.length - 1) {
            currentSlide = 0;
        }
        var offset = currentSlide*slideWidth*(-1);
        gallery.style.left = offset + "px";
        gallery.dataset.index = currentSlide;
        document.querySelector('.pagination-active').classList.remove('pagination-active');
        paginator.children[currentSlide].classList.toggle('pagination-active');
    }

})();
