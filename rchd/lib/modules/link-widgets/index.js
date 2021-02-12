module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link',
  addFields: [
    {
      name: "texto",
      type: "string",
      label: "Texto",
      required: true,

    },
    {
      name: "url",
      type: "url",
      label: "URL",
      required: true,
    },
  ]
};