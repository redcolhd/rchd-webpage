module.exports = {
  name: "actualizacion",
  extend: "apostrophe-pieces",
  label: "Actualizacion",
  pluralLabel: "Actualizacions",
  addFields: [
    {
      name: "typeOfUpdate",
      label: "Tipo de actualización",
      type: "select",
      required: true,
      choices: [
        {
          name: "TostadaHD",
          value: "#TostadaHD",
          label: "TostadaHD",
        },
        {
          name: "Blog Cultura y Bits",
          value: "Blog Cultura y Bits",
          label: "Bolg Cultura y Bits",
        },
      ],
    },
    {
      name: "title",
      label: "Título",
      type: "string",
      required: true,
    },
    {
      name: "description",
      label: "Descripción",
      type: "string",
      required: true,
    },
    {
      name: "date",
      label: "Fecha límite",
      type: "string",
      required: true,
    },
    {
      name: "pageUrl",
      label: "Link contacto",
      type: "string",
      required: true,
    },
  ],
};
