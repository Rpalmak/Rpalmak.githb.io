var resources = {
    en: {
      translation: {
        downloadCV: 'Download CV',
      },
    },
    es: {
      translation: {
        downloadCV: 'Descargar CV',
      },
    },
  };
  
  i18next.init({
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo si la traducción no está disponible
    resources: resources,
  });
  