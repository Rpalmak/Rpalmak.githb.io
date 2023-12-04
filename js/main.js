(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Typed Initiate
  if ($(".typed-text-output").length == 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Smooth scrolling to section
  $(".btn-scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 0,
        },
        1500,
        "easeInOutExpo"
      );
    }
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  const toggleContainer = document.querySelector(".toggle-container");
  const toggleCheckbox = document.querySelector("#toggle-checkbox");
  const languageSwitch = document.querySelector(".language-switch");
  const toggleCircle = document.querySelector(".toggle-circle");

  toggleContainer.addEventListener("click", function () {
    toggleCheckbox.checked = !toggleCheckbox.checked;
    languageSwitch.classList.toggle("active");
    toggleCircle.classList.toggle("active");
    changeLanguage();
  });

  toggleCircle.addEventListener("click", function () {
    toggleCheckbox.checked = !toggleCheckbox.checked;
    languageSwitch.classList.toggle("active");
    toggleCircle.classList.toggle("active");
    changeLanguage();
  });

  function changeLanguage() {
    var currentLang = document.documentElement.lang;
    var newLang = currentLang === "es" ? "en" : "es";

    document.documentElement.lang = newLang;

    // Cargar las traducciones desde el archivo JSON o de texto
    var translationsURL = "lib/translate/translations.json"; // Reemplaza con la URL correcta
    fetch(translationsURL)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al cargar las traducciones");
        }
      })
      .then(function (translations) {
        var elements = document.querySelectorAll("[data-translate]");

        elements.forEach(function (element) {
          var key = element.dataset.translate;

          if (translations[newLang][key]) {
            element.textContent = translations[newLang][key];
          }
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // Establecer el idioma inicial
  document.documentElement.lang = "es";
})(jQuery);

//------------------------------------------------------------------------------------------

function cargarCertificados() {
  fetch("../data/certificados.json")
    .then((response) => response.json())
    .then((data) => {
      const certificados = data.certificates;
      const elementoCertificados = document.getElementById(
        "certificadosContainer"
      );
      for (let i = 0; i < certificados.length; i++) {
        const certificado = certificados[i];
        const nuevoHTML = `
          <div class='col-md-4 certificado-item ${certificado.category} mb-4'>
            <a href='${certificado.image}' data-lightbox='certificado-${certificado.category}' title='Haz clic para agrandar'>
              <img class='img-fluid zoomable' src='${certificado.image}' alt='${certificado.alt}' />
            </a>
          </div>
        `;
        elementoCertificados.innerHTML += nuevoHTML;
      }
      filtrarCertificados("categoria1"); 
    })
    .catch((error) => console.error("Error al cargar certificados:", error));
}



// Función para cargar y trabajar con el archivo JSON de skills
function cargarSkills() {
  fetch("../data/skills.json")
    .then((response) => response.json())
    .then((data) => {
      const skills = data.skills;
      const elementoSkills = document.getElementById("skillsStack");

      for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        const nuevoHTML = `
          <div class='skill'>
            <div class='d-flex flex-column align-items-center'>
              <img src='${skill.image}' alt='${skill.alt}' class='skill-image' />
              <p class='mb-2 text-center'>${skill.title}</p>
            </div>
          </div>
        `;
        elementoSkills.innerHTML += nuevoHTML;
      }
    })
    .catch((error) => console.error("Error al cargar skills:", error));
}

// Función para cargar y trabajar con el archivo JSON de trabajos
function cargarTrabajos() {
  fetch("../data/trabajos.json")
    .then((response) => response.json())
    .then((data) => {
      const trabajos = data.portfolio;
      const elementoTrabajos = document.getElementById("trabajosContainer");

      trabajos.forEach((trabajo) => {
        const nuevoHTML = `
          <div class='col-md-4 portfolio-item ${trabajo.category}'>
            <a href='${trabajo.pdf ? trabajo.pdf : trabajo.image}' data-lightbox='${trabajo.category}' title='Haz clic para agrandar' class='portafolio-item'>
              ${
                trabajo.pdf
                  ? `<iframe src='${trabajo.pdf}' frameborder='0' class='pdf-thumbnail'></iframe>`
                  : `<img class='d-block w-100 zoomable' src='${trabajo.image}' alt='${trabajo.title}' />`
              }
            </a>
          </div>
        `;

        elementoTrabajos.innerHTML += nuevoHTML;
      });

      filtrarTrabajos("first");
    })
    .catch((error) => console.error("Error al cargar trabajos:", error));
}




function filtrarTrabajos(categoria) {
  const items = document.querySelectorAll(".portfolio-item");
  items.forEach((item) => {
    item.style.display = "none";
    if (item.classList.contains(categoria)) {
      item.style.display = "block";
    }
  });

  // Agregar la clase 'active' al botón presionado y quitarla de los demás
  const buttons = document.querySelectorAll("#portfolio-filters li");
  buttons.forEach((button) => {
    if (button.dataset.filter === `.${categoria}`) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}




function filtrarCertificados(categoria) {
  const items = document.querySelectorAll(".certificado-item");
  items.forEach((item) => {
    item.style.display = "none";
    if (item.classList.contains(categoria)) {
      item.style.display = "block";
    }
  });

  // Agregar la clase 'active' al botón presionado y quitarla de los demás
  const buttons = document.querySelectorAll("#portfolio-filters li");
  buttons.forEach((button) => {
    if (button.dataset.filter === `.${categoria}`) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}





document.addEventListener("DOMContentLoaded", function () {
  cargarCertificados();
  cargarSkills();
  cargarTrabajos();

  filtrarTrabajos("first");
  filtrarCertificados("categoria1");
});
