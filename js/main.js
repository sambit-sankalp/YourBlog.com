const responsive={
    320:{
        items:1
    },
    560:{
        items:2
    },
    760:{
        items:3
    }
}


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        responsive: responsive
    });

    AOS.init();



   
});

        var color1 = document.getElementsByClassName('fa-thumbs-up')[0];
        var color2 = document.getElementsByClassName('fa-thumbs-down')[0];

        function like() {
        color1.style.color = color1.style.color === 'blue' ? 'black': 'blue';
        color2.style.color = 'black';
        }

        function dislike() {
        color1.style.color = 'black';
        color2.style.color = color2.style.color === 'red' ? 'black' : 'red';
        }
