module.exports = {
  extend: "apostrophe-widgets",
  label: "Red Social",
  addFields: [
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
    {
      name: "titulo",
      type: "area",
      label: "Titulo",
    },
  ],
};
