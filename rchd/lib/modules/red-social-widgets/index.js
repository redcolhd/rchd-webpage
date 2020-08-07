module.exports = {
  extend: "apostrophe-widgets",
  label: "Red Social",
  addFields: [
    {
      name: "image",
      label: "image",
      type: "singleton",
      widgetType: "apostrophe-images",
      hideTitle: true,
      options: {
        limit: 1,
        template: "single",
        size: "one-sixth", 
      },
    },
    {
      name: "titulo",
      type: "singleton",
      label: "Titulo",
    },
  ],
};
