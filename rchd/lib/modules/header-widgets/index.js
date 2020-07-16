module.exports = {
  extend: "apostrophe-widgets",
  label: "Titulo Pagina",
  contextualOnly: true,
  addFields: [
    {
      name: "titulo",
      type: "area",
      label: "Titulo",
    },
    {
      name: "image",
      label: "image",
      type: "area",
    },
  ],
};
