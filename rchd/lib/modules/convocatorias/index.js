module.exports = {
  name: 'convocatoria',
  extend: 'apostrophe-pieces',
  label: 'Convocatoria',
  pluralLabel: 'Convocatorias',
  addFields: [
    {
      name: 'title',
      label: 'Título',
      type: 'string',
      required: true
    },
    {
      name: 'description',
      label: 'Descripción',
      type: 'string',
      required: true
    },
    {
      name: 'date',
      label: 'Fecha límite',
      type: 'string',
      required: true
    },
    {
      name: 'pageUrl',
      label: 'Link contacto',
      type: 'string',
      required: true
    }
  ]
};