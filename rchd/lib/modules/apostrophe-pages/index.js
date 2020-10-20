// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: "home",
      label: "Home",
    },
    {
      name: "contacto",
      label: "Contacto",
    },
    {
      name: "dos-columnas",
      label: "Dos Columnas",
    },
    {
      name: "miembros-page",
      label: "Miembros",
    },
    {
      name: "projects-page",
      label: "Proyectos"
    },
    { name: "quienesSomos", label: "Quienes Somos" },
    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
};
