module.exports = {
  extend: "apostrophe-widgets",
  label: "Menuhome",
  addFields: [
    {
      name: "imagen",
      label: "Imagen",
      type: "singleton",
      widgetType: "apostrophe-images",
      options: {
        limit: 1,
        template: "single",
        size: "one-sixth",
      },
    },

    {
      name: "titulo",
      type: "string",
      label: "Titulo",
    },
    {
      name: "_page",
      type: "joinByOne",
      withType: "apostrophe-page",
      label: "Page",
      required: true,
      idField: "pageId",
    },
  ],
};
