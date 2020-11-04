var _ = require("@sailshq/lodash");

module.exports = {
  extend: "apostrophe-widgets",
  contextualOnly:true,
  label: "Titulo Pagina",
  addFields: [
    {
      name: "titulo",
      type: "area",
      label: "Titulo",
    },
  ],
};
