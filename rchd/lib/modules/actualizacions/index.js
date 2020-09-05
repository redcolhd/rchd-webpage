module.exports = {
  name: 'actualizacion',
  extend: 'apostrophe-pieces',
  label: 'Actualizacion',
  pluralLabel: 'Actualizacions',
  addFields: [
    {
      name: 'typeOfUpdate',
      label: 'Tipo de actualización',
      type: 'string',
      required: true,
      choices: [
        {
          label: 'TostadaHD',
          value: 'tostadaHD'
        },
        {
          label: 'Blog RCHD',
          value: 'blogRCHD'
        }
      ]
    },
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