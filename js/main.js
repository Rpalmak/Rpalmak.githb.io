(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

      
      
      
      
    $(document).ready(function () {
        // Filtrar las imágenes al hacer clic en los botones de categoría
        $('#categoria-filters li').on('click', function () {
          var categoria = $(this).data('filter');
          $('.container .col-md-4').hide(); // Ocultar todas las imágenes
          $('.container ' + categoria).fadeIn(); // Mostrar las imágenes de la categoría seleccionada
      
          // Activar/desactivar la selección de los botones
          $('#categoria-filters li').removeClass('active');
          $(this).addClass('active');
        });
      
        // Activar el primer botón de categoría por defecto
        $('#categoria-filters li').first().click();
      });
      









      const toggleContainer = document.querySelector('.toggle-container');
const flagIcons = toggleContainer.querySelectorAll('.flag-icon');

toggleContainer.addEventListener('click', function () {
  flagIcons.forEach(function (flagIcon) {
    flagIcon.classList.toggle('active');
  });
});











    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


const toggleContainer = document.querySelector('.toggle-container');

toggleContainer.addEventListener('click', function() {
  this.parentNode.classList.toggle('active');
});








