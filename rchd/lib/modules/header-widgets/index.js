var _ = require("@sailshq/lodash");

module.exports = {
  extend: "apostrophe-widgets",
  label: "Titulo Pagina",
  addFields: [
    {
      name: "titulo",
      type: "area",
      label: "Titulo",
    },
    {
      name: "image",
      label: "image",
      type: "singleton",
      widgetType: "apostrophe-images",
      options: {
        limit: 1,
        template: "single",
        size: "one-sixth",
      },
    },
  ],
};
