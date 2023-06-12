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
  
    // Certificados galeria
    $(document).ready(function () {
      // Filtrar las imágenes al hacer clic en los botones de categoría
      $('#categoria-filters li').on('click', function () {
        var categoria = $(this).data('filter');
        $('.container .certificado-item').hide(); // Ocultar todas las imágenes de certificados
        $('.container ' + categoria).fadeIn(); // Mostrar las imágenes de la categoría seleccionada
  
        // Activar/desactivar la selección de los botones
        $('#categoria-filters li').removeClass('active');
        $(this).addClass('active');
      });
  
      // Activar el primer botón de categoría por defecto
      $('#categoria-filters li').first().click();
    });
  
    // Portafolio galeria
    $(document).ready(function () {
      $('#portfolio-filters li').on('click', function () {
        var portfolio = $(this).data('filter');
        $('.container .portfolio-item').hide(); // Ocultar todas las imágenes de portafolio
        $('.container ' + portfolio).fadeIn(); // Mostrar las imágenes de la categoría seleccionada
  
        // Activar/desactivar la selección de los botones
        $('#portfolio-filters li').removeClass('active');
        $(this).addClass('active');
      });
  
      // Activar el primer botón de categoría por defecto
      $('#portfolio-filters li').first().click();
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
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  
    const toggleContainer = document.querySelector('.toggle-container');
    const toggleCheckbox = document.querySelector('#toggle-checkbox');
    const languageSwitch = document.querySelector('.language-switch');
    const toggleCircle = document.querySelector('.toggle-circle');
  
    toggleContainer.addEventListener('click', function () {
      toggleCheckbox.checked = !toggleCheckbox.checked;
      languageSwitch.classList.toggle('active');
      toggleCircle.classList.toggle('active');
      changeLanguage();
    });
  
    toggleCircle.addEventListener('click', function () {
      toggleCheckbox.checked = !toggleCheckbox.checked;
      languageSwitch.classList.toggle('active');
      toggleCircle.classList.toggle('active');
      changeLanguage();
    }); 
   
    function changeLanguage() {
        var currentLang = document.documentElement.lang;
        var newLang = currentLang === 'es' ? 'en' : 'es';
      
        document.documentElement.lang = newLang;
      
        // Cargar las traducciones desde el archivo JSON o de texto
        var translationsURL = 'lib/translate/translations.json'; // Reemplaza con la URL correcta
        fetch(translationsURL)
          .then(function(response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Error al cargar las traducciones');
            }
          })
          .then(function(translations) {
            // Actualizar los textos según el idioma seleccionado
            var downloadCVText = translations[newLang].downloadCV;
            document.getElementById('descargarCV').textContent = downloadCVText;
          })
          .catch(function(error) {
            console.error(error);
          });
      }
      
   
    // Establecer el idioma inicial
    document.documentElement.lang = 'es';
  
  })(jQuery);
  