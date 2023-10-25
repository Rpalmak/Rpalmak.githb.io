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
        var elements = document.querySelectorAll('[data-translate]');

        elements.forEach(function(element) {
          var key = element.dataset.translate;

          if (translations[newLang][key]) {
            element.textContent = translations[newLang][key];
          }
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  // Establecer el idioma inicial
  document.documentElement.lang = 'es';

})(jQuery);


//------------------------------------------------------- Loaders

let skills = [
  {
    imagen: "img/skills-icons/html-5.png",
    alt: "Imagen de HTML",
    titulo: "HTML"
  },
  {
    imagen: "img/skills-icons/css-3.png",
    alt: "Imagen de CSS",
    titulo: "CSS"
  },
  {
    imagen: "img/skills-icons/bootstrap.png",
    alt: "Imagen de Bootstrap",
    titulo: "Bootstrap"
  },
  {
    imagen: "img/skills-icons/mongodb.svg",
    alt: "Imagen de MongoDB",
    titulo: "MongoDB"
  },
  {
    imagen: "img/skills-icons/php.png",
    alt: "Imagen de PHP",
    titulo: "PHP"
  },
  {
    imagen: "img/skills-icons/wordpress.png",
    alt: "Imagen de Wordpress",
    titulo: "Wordpress"
  },
  {
    imagen: "img/skills-icons/java.png",
    alt: "Imagen de Java",
    titulo: "Java"
  },
  {
    imagen: "img/skills-icons/fiori.png",
    alt: "Imagen de Fiori SAP",
    titulo: "Fiori SAP"
  },
  {
    imagen: "img/skills-icons/sql-server.png",
    alt: "Imagen de SQL",
    titulo: "SQL"
  },
  {
    imagen: "img/skills-icons/js.png",
    alt: "Imagen de Javascript",
    titulo: "Javascript"
  },
  {
    imagen: "img/skills-icons/react.svg",
    alt: "Imagen de React",
    titulo: "React"
  },
  {
    imagen: "img/skills-icons/github.png",
    alt: "Imagen de Github",
    titulo: "Git/Github"
  },
  {
    imagen: "img/skills-icons/mysql.png",
    alt: "Imagen de MySQL",
    titulo: "MySQL"
  }
];

const elemento = document.getElementById("skillsStack"); // Reemplaza "miElemento" con el ID de tu elemento

for (let i = 0; i < skills.length; i++) {
  const skill = skills[i];
  const nuevoHTML = `
    <div class='skill'>
      <div class='d-flex flex-column align-items-center'>
        <img src='${skill.imagen}' alt='${skill.alt}' class='skill-image' />
        <p class='mb-2 text-center'>${skill.titulo}</p>
      </div>
    </div>
  `;
  elemento.innerHTML += nuevoHTML;
}


const certificados = [
  {
    categoria: "categoria1",
    imagen: "img/certificados/meta-react.png",
    alt: "Certificado de curso de React de Meta"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/meta.png",
    alt: "Certificado de curso de Meta"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/microsoft.png",
    alt: "Certificado de curso de Microsoft"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/university-of-london-introduction.png",
    alt: "Certificado de curso de University of London"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/CertificadoDeFinalizacion_React esencial-1.png",
    alt: "Certificado de curso de React 2023 por Linkedin"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/CertificadoDeFinalizacion_React esencial 2019-1.png",
    alt: "Certificado de curso de react de 2019 por Linkedin"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/api-servicios-web.png",
    alt: "Certificado de API Servicios Web de Linkedin Learning"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/wordpress.png",
    alt: "Certificado de Wordpress de Linkedin Learning"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/fundamentos-esenciales.png",
    alt: "Certificado de Fundamentos Esenciales de la programacion de Linkedin Learning"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/github.png",
    alt: "Certificado de Github de Linkedin Learning"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/javascript.png",
    alt: "Certificado de javascript Esencial de Linkedin Learning"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/nodejs.png",
    alt: "Certificado de nodeJS de Linkedin Learning"
  },
  {
    categoria: "categoria1",
    imagen: "img/certificados/php-esencial.png",
    alt: "Certificado de PHP Esencial de Linkedin Learning"
  },
  {
    categoria: "categoria2",
    imagen: "img/certificados/titulo.png",
    alt: "Titulo Universitario Inacap Ingeniero Informático"
  },
  {
    categoria: "categoria3",
    imagen: "img/certificados/EFSET.png",
    alt: "Certificado de EFSET Proficient C2"
  },
  {
    categoria: "categoria3",
    imagen: "img/certificados/tis.png",
    alt: "Certificado de Ingles de TIS"
  },
  {
    categoria: "categoria3",
    imagen: "img/certificados/SAP-FIORI.png",
    alt: "Certificado de SAP Fiori Developer"
  },
  {
    categoria: "categoria3",
    imagen: "img/certificados/SAP_LCNC.png",
    alt: "Certificado de SAP Low Code No Code"
  },
  {
    categoria: "categoria3",
    imagen: "img/certificados/tricentis-tosca.jpg",
    alt: "Certificado de Tricentis Tosca"
  },
  {
    categoria: "categoria4",
    imagen: "img/certificados/desafiolatam1.png",
    alt: "Certificado de Introduccion al desarrollo Web por Desafio Latam"
  },
  {
    categoria: "categoria4",
    imagen: "img/certificados/desafiolatam2.png",
    alt: "Certificado de CSS Avanzado por Desafio Latam"
  },
  {
    categoria: "categoria4",
    imagen: "img/certificados/desafiolatam3.png",
    alt: "Certificado de Javascript para la Web por Desafio Latam"
  }
];

const elementoCertificados = document.getElementById("certificadosContainer"); 

for (let i = 0; i < certificados.length; i++) {
  const certificado = certificados[i];
  const nuevoHTML = `
    <div class='col-md-4 certificado-item ${certificado.categoria} mb-4'>
      <a href='${certificado.imagen}' data-lightbox='certificado-${certificado.categoria}' title='Haz clic para agrandar'>
        <img class='img-fluid zoomable' src='${certificado.imagen}' alt='${certificado.alt}' />
        <div class='zoom-overlay'>
          <i class='fas fa-search-plus'></i>
        </div>
      </a>
    </div>
  `;
  elementoCertificados.innerHTML += nuevoHTML;
}



