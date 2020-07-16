module.exports = {
  extend: "apostrophe-widgets",
  label: "Header",
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
